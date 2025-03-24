---
title: "DOPT: D-learning with off-policy target toward sample efficiency and fast convergence control"
collection: publications
category: manuscripts
permalink: /publication/2025-5-19-DOPT-D-learning
excerpt: 'This paper is about off-policy D-learning, and its application to dynamic systems control.'
date: 2025-5-19
venue: '2025 IEEE International Conference on Robotics and Automation (ICRA)'
slidesurl: 'http://shenzhaolong1330.github.io/files/DOPT_slides.pdf'
paperurl: 'http://shenzhaolong1330.github.io/files/ICRA683_final.pdf'
citation: 'Zhaolong Shen and Quan Quan. (2025). &quot;DOPT: D-learning with off-policy target toward sample efficiency and fast convergence control&quot.; <i>2025 IEEE International Conference on Robotics and Automation (ICRA)</i>.'
---

Abstract— In recent times, Lyapunov theory has been incorporated into learning-based control methods to provide a stability guarantee. However, merely satisfying the Lyapunov conditions does not fully leverage the capabilities of the Neural Network (NN) controller. Furthermore, training an effective Lyapunov candidate requires substantial data, which inherently results in sample inefficiency. To address these limitations, we propose an off-policy variant of the vanilla D-learning method that uses current and historical data to iteratively enhance the NN controller within the framework of Lyapunov theory. Our method outperforms the Deep Deterministic Policy Gradient (DDPG) and D-learning in terms of stability, sample efficiency, and the quality of the trained controllers and Lyapunov candidates. Link to code: github.com/Shenzhaolong1330/DOPT