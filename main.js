(() => {
  'use strict';
  const data = window.homepage;
  const $ = id => document.getElementById(id);
  const make = (tag, text, className) => {
    const element = document.createElement(tag);
    if (text) element.textContent = text;
    if (className) element.className = className;
    return element;
  };
  const safeURL = value => {
    if (!value) return '';
    try {
      const url = new URL(value, document.baseURI);
      return ['http:', 'https:', 'mailto:', 'file:'].includes(url.protocol) ? value : '';
    } catch { return ''; }
  };
  // Inline links only: [label](URL). HTML remains plain text.
  const inlinePattern = /\[([^\]\n]+)\]\(([^\s]+?)\)/g;
  function rich(tag, value, className) {
    const element = make(tag, '', className);
    const text = String(value || '');
    let end = 0;
    for (const match of text.matchAll(inlinePattern)) {
      element.append(document.createTextNode(text.slice(end, match.index)));
      const url = safeURL(match[2]);
      const label = make(url ? 'a' : 'span', match[1]);
      if (url) label.href = url;
      element.append(label);
      end = match.index + match[0].length;
    }
    element.append(document.createTextNode(text.slice(end)));
    return element;
  }
  function links(items, parent) {
    (items || []).forEach(item => {
      const wrapper = make('span');
      const url = safeURL(item.url);
      const link = make(url ? 'a' : 'span', item.label, url ? '' : 'unavailable');
      if (url) link.href = url;
      else link.title = 'Link to be added';
      wrapper.append(link); parent.append(wrapper);
    });
  }
  function media(item) {
    const box = make('div', '', 'visual');
    if (safeURL(item.video)) {
      box.classList.add('video-visual');
      const video = make('video');
      video.src = item.video; video.controls = true; video.muted = true; video.playsInline = true; video.preload = 'metadata';
      video.setAttribute('aria-label', item.imageAlt || item.title);
      video.append(document.createTextNode('Your browser does not support embedded video.'));
      const fallback = make('a', 'Open video', 'video-fallback'); fallback.href = item.video;
      video.addEventListener('error', () => { fallback.hidden = false; });
      fallback.hidden = true;
      box.append(fallback);
      if (safeURL(item.image)) video.poster = item.image;
      box.append(video);
    } else if (safeURL(item.image)) {
      box.classList.add('image-visual');
      const img = make('img'); img.src = item.image; img.alt = item.imageAlt || item.title; img.loading = 'lazy'; box.append(img);
    } else {
      const label = make('div', '', 'visual-label');
      box.classList.add('image-placeholder');
      label.append(make('span', 'Research image'));
      box.setAttribute('aria-label', 'Image placeholder for ' + item.title);
      box.append(label);
    }
    return box;
  }
  function entry(item, publication, options = {}) {
    const article = make('article', '', 'entry');
    if (item.image || item.video || publication || options.reserveImage) article.append(media(item));
    else article.classList.add('text-entry');
    const body = make('div'); const title = make('h3');
    const target = (item.links || []).find(link => safeURL(link.url));
    if (target && !options.plainTitle) { const a = make('a', item.title); a.href = target.url; title.append(a); }
    else title.textContent = item.title;
    body.append(title);
    if (item.authors?.length) {
      const authors = make('p');
      item.authors.forEach((name, i) => {
        if (i) authors.append(document.createTextNode(', '));
        authors.append(make((data.authorNames || [data.name]).includes(name.replace(/\*/g, '').trim()) ? 'strong' : 'span', name));
      });
      body.append(authors);
    }
    const venue = rich('p', publication ? item.venue : item.organization, publication ? 'venue' : 'organization');
    if (item.isNew) venue.append(make('span', 'New', 'badge'));
    if (venue.textContent) body.append(venue);
    const linkRow = make('div', '', 'entry-links'); links(item.links, linkRow); body.append(linkRow);
    body.append(rich('p', item.description, 'description'));
    article.append(body); return article;
  }
  document.title = data.name;
  document.querySelector('meta[name="description"]').content = `${data.name} — ${data.bio.join(' ').replace(inlinePattern, '$1')}`;
  $('name').textContent = data.name; $('native-name').textContent = data.nativeName;
  $('email').textContent = data.email;
  data.bio.forEach(paragraph => $('bio').append(rich('p', paragraph)));
  links(data.socials, $('socials'));
  if (safeURL(data.photo)) {
    const img = make('img'); img.src = data.photo; img.alt = `Portrait of ${data.name}`;
    $('portrait').replaceChildren(img);
  }
  if (!data.photo) {
    $('portrait').replaceChildren(make('span', 'SZ'), make('small', 'ROBOT LEARNING'));
    $('portrait').classList.add('monogram');
  }
  data.news.forEach(item => {
    const li = make('li'); li.append(make('span', `${item.date}: `, 'date'));
    const hasInline = [...String(item.text).matchAll(inlinePattern)].length > 0;
    const newsText = hasInline ? rich('span', item.text) : make(safeURL(item.url) ? 'a' : 'span', item.text);
    if (!hasInline && safeURL(item.url)) newsText.href = item.url;
    li.append(newsText);
    if (safeURL(item.image)) {
      const details = make('details', '', 'news-photo');
      details.append(make('summary', 'View photo'));
      const link = make('a'); link.href = item.image;
      const img = make('img'); img.src = item.image; img.alt = item.imageAlt || 'News photograph'; img.loading = 'lazy';
      link.append(img); details.append(link); li.append(details);
    }
    if (item.isNew) li.append(make('span', 'New', 'badge')); $('news').append(li);
  });
  (data.demos || []).forEach(item => $('demos').append(entry(item, false)));
  (data.platforms || []).forEach(item => $('platforms').append(entry(item, false, { plainTitle: true })));
  function publications(filter) {
    const items = data.publications.filter(item => filter === 'all' || item.selected);
    $('publications').replaceChildren(...items.map(item => entry(item, true)));
    $('publication-count').textContent = `${items.length} / ${data.publications.length}`;
    document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
  }
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => publications(button.dataset.filter)));
  publications('selected');
  data.service.forEach(item => $('service').append(rich('li', item)));
  ['news'].forEach(id => {
    if (!data[id].length) $(id).closest('section').hidden = true;
  });
  (data.talks || []).forEach(item => $('talks').append(entry(item, false)));
  $('talks-empty').hidden = Boolean(data.talks?.length);
  $('footer-name').textContent = data.name; $('updated').textContent = data.updated;
})();
