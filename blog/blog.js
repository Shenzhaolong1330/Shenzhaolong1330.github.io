(() => {
  'use strict';
  const data = window.homepage;
  const local = ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname) || location.protocol === 'file:';
  const posts = (data.blog || []).filter(post => !post.draft || local);
  const make = (tag, text = '', className = '') => {
    const node = document.createElement(tag); node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  const owner = document.getElementById('blog-owner'); owner.textContent = data.name;
  const articleURL = post => 'post.html?post=' + encodeURIComponent(post.slug);
  const dateLabel = date => /^\d{4}-\d{2}-\d{2}$/.test(date || '')
    ? new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }).format(new Date(date + 'T00:00:00Z')) : '';
  const archive = document.getElementById('blog-archive');
  if (archive) {
    document.title = 'Blog | ' + data.name;
    posts.forEach(post => {
      const row = make('article', '', 'blog-row'); const meta = make('div', '', 'blog-meta');
      if (post.date) { const time = make('time', dateLabel(post.date)); time.dateTime = post.date; meta.append(time); }
      if (post.draft) meta.append(make('span', 'Draft', 'blog-preview'));
      const body = make('div'); const h = make('h3'); const link = make('a', post.title); link.href = articleURL(post);
      h.append(link); body.append(h, make('p', post.summary)); row.append(meta, body); archive.append(row);
    });
    document.getElementById('blog-empty').hidden = posts.length > 0;
    return;
  }
  const post = posts.find(post => post.slug === new URLSearchParams(location.search).get('post'));
  const title = document.getElementById('post-title'); const body = document.getElementById('post-body');
  function unavailable(message) {
    title.textContent = 'Article unavailable'; document.title = 'Blog | ' + data.name;
    body.replaceChildren(make('p', message));
  }
  if (!post) { unavailable('This article could not be found. You can return to All posts above.'); return; }
  title.textContent = post.title; document.title = post.title + ' | ' + data.name;
  document.getElementById('post-summary').textContent = post.summary;
  document.querySelector('meta[name="description"]').content = post.summary;
  document.getElementById('post-meta').textContent = [dateLabel(post.date), post.draft ? 'Draft \u00b7 ' + data.name : data.name].filter(Boolean).join(' \u00b7 ');
  if (!/^posts\/[a-z0-9-]+\.md$/i.test(post.file || '')) { unavailable('The article file is not configured correctly.'); return; }
  const sourceURL = new URL(post.file, location.href);
  const safeURL = value => {
    try {
      const url = new URL(value, value.startsWith('#') ? location.href : sourceURL);
      return ['https:', 'http:', 'mailto:'].includes(url.protocol) ? url.href : '';
    } catch { return ''; }
  };
  // Small, safe Markdown subset: headings, links/images, emphasis, lists,
  // quotations, and fenced code. Raw HTML is displayed as ordinary text.
  function inline(parent, text) {
    const pattern = /!\[([^\]]*)\]\(([^\s)]+)\)|\[([^\]]+)\]\(([^\s)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`|\*([^*]+)\*/g;
    let end = 0;
    for (const m of text.matchAll(pattern)) {
      parent.append(document.createTextNode(text.slice(end, m.index)));
      if (m[1] !== undefined) {
        const url = safeURL(m[2]);
        if (url && !url.startsWith('mailto:')) { const img = make('img'); img.src = url; img.alt = m[1]; img.loading = 'lazy'; parent.append(img); }
        else parent.append(document.createTextNode(m[1]));
      } else if (m[3] !== undefined) {
        const url = safeURL(m[4]); const a = make(url ? 'a' : 'span', m[3]); if (url) a.href = url; parent.append(a);
      } else parent.append(make(m[5] !== undefined ? 'strong' : m[6] !== undefined ? 'code' : 'em', m[5] ?? m[6] ?? m[7]));
      end = m.index + m[0].length;
    }
    parent.append(document.createTextNode(text.slice(end)));
  }
  function renderMarkdown(text) {
    const fragment = document.createDocumentFragment(); const lines = text.replace(/\r\n/g, '\n').split('\n');
    const headingIDs = new Map();
    let i = 0;
    const special = line => /^(#{1,6}\s|```|>\s?|[-*+]\s|\d+\.\s|---\s*$)/.test(line);
    while (i < lines.length) {
      const line = lines[i];
      if (!line.trim()) { i++; continue; }
      if (line.startsWith('```')) {
        const code = []; i++;
        while (i < lines.length && !lines[i].startsWith('```')) code.push(lines[i++]);
        const pre = make('pre'); pre.append(make('code', code.join('\n'))); fragment.append(pre); i++; continue;
      }
      const heading = /^(#{1,6})\s+(.+)$/.exec(line);
      if (heading) {
        const h = make('h' + Math.min(6, Math.max(2, heading[1].length)));
        inline(h, heading[2]); const id = h.textContent.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '') || 'section';
        const count = headingIDs.get(id) || 0; headingIDs.set(id, count + 1); h.id = id + (count ? '-' + (count + 1) : '');
        fragment.append(h); i++; continue;
      }
      if (/^---\s*$/.test(line)) { fragment.append(make('hr')); i++; continue; }
      if (/^>/.test(line)) {
        const quote = []; while (i < lines.length && /^>/.test(lines[i])) quote.push(lines[i++].replace(/^>\s?/, ''));
        const b = make('blockquote'); const p = make('p'); inline(p, quote.join(' ')); b.append(p); fragment.append(b); continue;
      }
      const ordered = /^\d+\.\s/.test(line);
      if (ordered || /^[-*+]\s/.test(line)) {
        const list = make(ordered ? 'ol' : 'ul'); const pattern = ordered ? /^\d+\.\s+/ : /^[-*+]\s+/;
        while (i < lines.length && pattern.test(lines[i])) { const li = make('li'); inline(li, lines[i++].replace(pattern, '')); list.append(li); }
        fragment.append(list); continue;
      }
      const paragraph = [line]; i++;
      while (i < lines.length && lines[i].trim() && !special(lines[i])) paragraph.push(lines[i++]);
      const p = make('p'); inline(p, paragraph.join(' ')); fragment.append(p);
    }
    return fragment;
  }
  fetch(sourceURL).then(response => {
    if (!response.ok) throw new Error('Article request failed'); return response.text();
  }).then(text => body.replaceChildren(renderMarkdown(text))).catch(() => unavailable('The article could not be loaded. Please try again or return to All posts.'));
})();
