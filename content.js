// Content follows the same top-to-bottom order as the homepage.
window.homepage = {
  // Profile / page header
  "name": "Shen Zhaolong",

  "nativeName": "沈照龙",

  "authorNames": [
    "Shen Zhaolong",
    "Zhaolong Shen"
  ],

  "email": "shenzhaolong1330@gmail.com",

  "photo": "https://avatars.githubusercontent.com/u/129477019?v=4",

  "bio": [
    "I'm a robotics research intern at [DeepCybo](https://deepcybo.site/), working on robotic agents and policy post-training for real-world robotic deployment.",
    "I'm also a second-year Ph.D. student in [Rfly Lab](https://rfly.buaa.edu.cn/) at [Beihang University (BUAA)](https://www.buaa.edu.cn/), jointly training at [Zhongguancun Academy (ZGCA)](https://www.bza.edu.cn/). I am supervised by Prof. [Quan Quan](https://shi.buaa.edu.cn/quanquan/zh_CN/index.htm) and Prof. [Kai Chen](https://www.bza.edu.cn/teacher/64014f93a18f41bc88551bf9f248e4cd). Previously, I received my bachelor's degree from [Northeastern University (NEU)](https://www.neu.edu.cn/).",
    "My earlier research focused on learning-based control. Since starting my Ph.D. in 2025, my research has focused on advanced robot learning at ZGCA.",
    "My goal is to develop robot policies that generalize across tasks and environments while remaining reliable in the physical world."
  ],

  "socials": [
    {
      "label": "Email",
      "url": "mailto:shenzhaolong1330@gmail.com"
    },
    {
      "label": "Google Scholar",
      "url": "https://scholar.google.com/citations?user=cX44LSMAAAAJ"
    },
    {
      "label": "GitHub",
      "url": "https://github.com/Shenzhaolong1330"
    },
    {
      "label": "ORCID",
      "url": "https://orcid.org/0000-0003-1330-1833"
    }
  ],

  // 1. News
  "news": [
    {
      "date": "Jun. 2026",
      "text": "I led Team DeepCyboZGCA in the [ICRA 2026 What Bimanuals Can Do (WBCD)](https://wbcdcompetition.github.io/) Competition. Our team placed 2nd nationally and 3rd globally in the XtalPi Lab Experiments track.",
      "image": "assets/news/WBCD.jpg",
      "imageAlt": "WBCD 2026 competition award photograph"
    },
    {
      "date": "Jun. 2026",
      "text": "Our paper on D-learning ([Reptile-D-Learning](https://arxiv.org/pdf/2606.25659)) was accepted to IROS 2026.",
    },
    {
      "date": "Mar. 2026",
      "text": "My interview with CCTV aired on [CCTV-13's Morning News (朝闻天下)](https://content-static.cctvnews.cctv.com/snow-book/video.html?item_id=2106778134502029508).",
      "image": "assets/demos/interview.png",
    },
    {
      "date": "Jun. 2025",
      "text": "Our paper on D-learning ([DL-Clip](https://ieeexplore.ieee.org/abstract/document/11247028/)) was accepted to IROS 2025.",
    },
    {
      "date": "Feb. 2025",
      "text": "Our paper on D-learning ([DOPT](https://doi.org/10.1109/ICRA55743.2025.11127827)) was accepted to ICRA 2025.",
    }
  ],

  // 2. Demos
  "demos": [
    {
      "title": "Real-World Reinforcement Learning",
      "organization": "",
      "description": "Learning manipulation through interaction with the physical world.",
      "video": "assets/demos/rl.mp4",
      "image": "",
      "imageAlt": "Real-World Reinforcement Learning demonstration",
      "links": []
    },
    {
      "title": "Robotic Agents",
      "organization": "",
      "description": "Robotic agent demonstrations for real-world manipulation tasks.",
      "video": "assets/demos/agentic.mp4",
      "image": "",
      "imageAlt": "Robotic Agents demonstration",
      "links": []
    },
    {
      "title": "Bimanual Imitation Learning",
      "organization": "",
      "description": "Coordinated dual-arm manipulation using policies learned from demonstrations.",
      "video": "assets/demos/il.mp4",
      "image": "",
      "imageAlt": "Bimanual Imitation Learning demonstration",
      "links": []
    },
    {
      "title": "Complex Manipulation",
      "organization": "",
      "description": "Demonstrations of complex and precise robot manipulation tasks.",
      "video": "assets/demos/complex.mp4",
      "image": "",
      "imageAlt": "Complex Manipulation demonstration",
      "links": []
    },
    {
      "title": "WBCD 2026 Competition",
      "organization": "",
      "description": "Footage from our participation in the ICRA 2026 What Bimanuals Can Do ([WBCD](https://wbcdcompetition.github.io/)) competition.",
      "video": "assets/demos/competition.mp4",
      "image": "",
      "imageAlt": "WBCD 2026 Competition demonstration",
      "links": [
        {
          "label": "competition website",
          "url": "https://wbcdcompetition.github.io/"
        }
      ]
    }
  ],

  // 3. Robot Platforms
  "platforms": [
    {
      "title": "Franka Platform",
      "description": "A single Franka arm for robot manipulation. It supports experiments with imitation learning, alongside an open-source teleoperation toolkit with multiple teleoperators.",
      "image": "assets/platforms/franka.jpeg",
      "links": [
        {
          "label": "code",
          "url": "https://github.com/Shenzhaolong1330/lerobot_franka_teleop"
        },
        {
          "label": "openpi-franka",
          "url": "https://github.com/Shenzhaolong1330/openpi-franka"
        }
      ]
    },
    {
      "title": "Bimanual Robot Platforms",
      "description": "These bimanual platforms support our research experiments and participation in the ICRA [WBCD](https://wbcdcompetition.github.io/) competition. Code is available below.",
      "image": "assets/platforms/supported_robots.jpg",
      "links": [
        {
          "label": "code",
          "url": "https://github.com/Shenzhaolong1330/dual_arm_teleop"
        }
      ]
    },
    {
      "title": "Dexterous Manipulation Platform",
      "description": "A dexterous manipulation platform combining depth and tactile perception with human demonstrations to support research on fine-grained interaction.",
      // "image": "assets/platforms/dexterous.png",
      "video": "assets/platforms/dex.mp4",
      "links": []
    }
  ],

  // 4. Research & Publication - Publications & Preprints
  // Under-review work is listed first, followed by publications in date order.
  "publications": [
    {
      "title": "Under Pressure: Characterizing the Reliability of Learned Rewards in Real-World Robot Reinforcement Learning",
      "image": "assets/researchs/underpressure.png",
      "description": "I study how reward pressure and task structure affect learned reward reliability in real-world reinforcement learning, and investigate static and offline-RL screening to select reward configurations.",
      "links": [],
      "authors": [
        "Zhaolong Shen",
        "Chenyu Su",
        "Shijie Lian",
        "Bin Yu",
        "Xiaopeng Lin",
        "Haipeng Cao",
        "Weiwei Shang",
        "Zhirui Zhang",
        "Cong Huang",
        "Kai Chen",
        "Quan Quan"
      ],
      "venue": "Under review",
      "selected": true
    },
    {
      "title": "Beyond Local Success: Harnessing Robotic Agents for Consequence-Aware Skill Execution via Failure Backtracing",
      "image": "assets/researchs/beyondlocalsuccess.png",
      "description": "I investigate failure backtracing for robotic agents: reviewing execution history, attributing failures, and adjusting subsequent skills to account for their consequences.",
      "links": [],
      "authors": [
        "Zhaolong Shen",
        "Haipeng Cao",
        "Zishen Zhuang",
        "Chenyu Su",
        "Kai Hu",
        "Kai Chen",
        "Quan Quan"
      ],
      "venue": "Under review",
      "selected": true
    },
    {
      "title": "ActionPiece: Rethinking Action Tokenization for Autoregressive Vision-Language-Action Models",
      "authors": [
        "Shijie Lian",
        "Bin Yu",
        "Zhaolong Shen",
        "Xiaopeng Lin",
        "Yichao Du",
        "Zhirui Zhang",
        "Laurence T. Yang",
        "Kai Chen"
      ],
      "venue": "arXiv preprint, 2026",
      "selected": false,
      "description": "Preserving physical relationships between actions during tokenization for autoregressive VLA policies.",
      "image": "assets/researchs/actionpiece.png",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2609.18487"
        }
      ],
      "date": "2026-09-16",
      "imageAlt": "ActionPiece: Rethinking Action Tokenization for Autoregressive Vision-Language-Action Models - overview",
      "imageSource": "https://arxiv.org/html/2609.18487v1/fig_actionpiece-architecture.png"
    },
    {
      "title": "PhysBrain 1.5: From Vision-Language Models to Physical Foundation Models",
      "authors": [
        "DeepCybo Team",
        "Bin Yu",
        "Haipeng Cao",
        "Zheng Chang",
        "Kai Chen",
        "Youning Chen",
        "Kailin Deng",
        "Yichao Du",
        "Xiaotong Fu",
        "Haoyang Ge",
        "Yunlong Guo",
        "Chenliu Hao",
        "Jiyan He",
        "Xuguo He",
        "Yakun Hou",
        "Kai Hu",
        "Cong Huang",
        "Tuopusen Huang",
        "Yu Huang",
        "Hong Li",
        "Peize Li",
        "Shijie Lian",
        "Xiaopeng Lin",
        "Yun Lin",
        "Haibao Liu",
        "Haochen Liu",
        "Qiuzhi Liu",
        "Shengcai Liu",
        "Zhiqiang Liu",
        "Tao Luo",
        "Peng Ren",
        "Shuo Ren",
        "Chaoyi Ruan",
        "Zhaolong Shen",
        "Yukun Shi",
        "Qiyuan Su",
        "Yuxuan Tian",
        "Yining Wang",
        "Changti Wu",
        "Hao Wu",
        "Xueyin Xu",
        "Ruoqi Yang",
        "Zhaoyang Yang",
        "Hang Yuan",
        "Zhaoyang Zeng",
        "Hanwen Zhang",
        "Ruimeng Zhang",
        "Yao Zhang",
        "Yibo Zhang",
        "Yuxiang Zhang",
        "Zhirui Zhang",
        "Ziyi Zhang",
        "Zubin Zheng",
        "Zishen Zhuang"
      ],
      "venue": "arXiv preprint, 2026",
      "selected": false,
      "description": "A unified physical foundation model for understanding environments, generating actions, and predicting future states.",
      "image": "assets/researchs/physbrain-1-5.png",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2609.14973"
        },
        {
          "label": "project",
          "url": "https://deepcybo-physai.github.io/PhysBrain-1.5/"
        },
        {
          "label": "code",
          "url": "https://github.com/DeepCybo-PhysAI/PhysBrain-1.5"
        }
      ],
      "date": "2026-09-14",
      "imageAlt": "PhysBrain 1.5: From Vision-Language Models to Physical Foundation Models - overview",
      "imageSource": "https://arxiv.org/html/2609.14973v1/model.png"
    },
    {
      "title": "VLA-Precision: Asymmetric Co-Bootstrapping for Efficient Real-World Online RL of Vision-Language-Action Models",
      "authors": [
        "Chenyu Su",
        "Zhaolong Shen",
        "Yuan Qian",
        "Chen Qian",
        "Rui Zhang",
        "Feng Yan",
        "Weixing Chen",
        "Fei Zhang",
        "Jiamin Wang",
        "Shuang Cong",
        "Weiwei Shang"
      ],
      "venue": "arXiv preprint, 2026",
      "selected": true,
      "description": "Efficient real-world online reinforcement learning for precise and reliable VLA manipulation through asymmetric co-bootstrapping.",
      "image": "assets/researchs/vla-precision.png",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2609.04355"
        },
        {
          "label": "project",
          "url": "https://vla-precision.github.io/"
        }
      ],
      "date": "2026-09-03",
      "imageAlt": "VLA-Precision: Asymmetric Co-Bootstrapping for Efficient Real-World Online RL of Vision-Language-Action Models - overview",
      "imageSource": "https://arxiv.org/html/2609.04355v3/figure_2.png"
    },
    {
      "title": "SIEVE: Structure-Aware Data Selection for Imitation Learning with VLA Models",
      "authors": [
        "Changti Wu",
        "Bin Yu",
        "Zhaolong Shen",
        "Shijie Lian",
        "Xiaopeng Lin",
        "Cong Huang",
        "Zhirui Zhang",
        "Lei Zhang",
        "Kai Chen"
      ],
      "venue": "arXiv preprint, 2026",
      "selected": false,
      "description": "Selecting demonstrations through reusable manipulation primitives and their transitions for more efficient VLA imitation learning.",
      "image": "assets/researchs/sieve.png",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2607.06442"
        }
      ],
      "date": "2026-07-07",
      "imageAlt": "SIEVE: Structure-Aware Data Selection for Imitation Learning with VLA Models - overview",
      "imageSource": "https://arxiv.org/html/2607.06442v1/overview.png"
    },
    {
      "title": "Human-as-Humanoid: Enabling Zero-Shot Humanoid Learning from Ego-Exo Human Videos with Human-Aligned Embodiments",
      "authors": [
        "Xiaopeng Lin",
        "Ruoqi Yang",
        "Shijie Lian",
        "Zhaolong Shen",
        "Bin Yu",
        "Changti Wu",
        "Haibao Liu",
        "Yuxiang Zhang",
        "Hong Li",
        "Qiyuan Su",
        "Haochen Liu",
        "Xuguo He",
        "Yukun Shi",
        "Cong Huang",
        "Zhirui Zhang",
        "Bojun Cheng",
        "Kai Chen"
      ],
      "venue": "arXiv preprint, 2026",
      "selected": true,
      "description": "Converting ego-exo human videos into executable humanoid action supervision for zero-shot robot deployment.",
      "image": "assets/researchs/human-as-humanoid.png",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2606.32009"
        },
        {
          "label": "project",
          "url": "https://zgc-embodyai.github.io/Human-as-Humanoid/"
        }
      ],
      "date": "2026-06-30",
      "imageAlt": "Human-as-Humanoid: Enabling Zero-Shot Humanoid Learning from Ego-Exo Human Videos with Human-Aligned Embodiments - overview",
      "imageSource": "https://arxiv.org/html/2606.32009v1/figures/intro.png"
    },
    {
      "title": "Learning to Adapt: Reptile-D-Learning for Robust and Efficient Control Under Parametric Uncertainty",
      "authors": [
        "Haipeng Cao",
        "Zhaolong Shen",
        "Quan Quan"
      ],
      "venue": "IROS 2026",
      "selected": true,
      "description": "Combining Reptile meta-learning with D-learning for robust control and rapid adaptation under parametric uncertainty.",
      "image": "assets/researchs/reptile-d-learning.png",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2606.25659"
        }
      ],
      "date": "2026-06-24",
      "imageAlt": "Learning to Adapt: Reptile-D-Learning for Robust and Efficient Control Under Parametric Uncertainty - overview",
      "imageSource": "https://arxiv.org/html/2606.25659v1/pictures/overview_final.png"
    },
    {
      "title": "RoboSemanticBench: Diagnosing Semantic Grounding in Action Prediction for VLA Models",
      "authors": [
        "Bin Yu",
        "Yao Zhang",
        "Haishan Liu",
        "Shijie Lian",
        "Yuliang Wei",
        "Xiaopeng Lin",
        "Zhaolong Shen",
        "Changti Wu",
        "Ruina Hu",
        "Bailing Wang",
        "Cong Huang",
        "Kai Chen"
      ],
      "venue": "Findings of EMNLP 2026",
      "selected": false,
      "description": "Evaluating whether VLA policies translate semantic understanding into correct physical actions.",
      "image": "assets/researchs/robosemanticbench.png",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2606.02277"
        },
        {
          "label": "code",
          "url": "https://github.com/ZGC-EmbodyAI/RoboSemanticBench"
        }
      ],
      "date": "2026-06-01",
      "imageAlt": "RoboSemanticBench: Diagnosing Semantic Grounding in Action Prediction for VLA Models - overview",
      "imageSource": "https://arxiv.org/html/2606.02277v1/main.png"
    },
    {
      "title": "PhysBrain 1.0 Technical Report",
      "authors": [
        "Shijie Lian",
        "Bin Yu",
        "Xiaopeng Lin",
        "Changti Wu",
        "Hang Yuan",
        "Xiaolin Hu",
        "Zhaolong Shen",
        "Yuzhuo Miao",
        "Haishan Liu",
        "Yuxuan Tian",
        "Yukun Shi",
        "Cong Huang",
        "Kai Chen"
      ],
      "venue": "arXiv preprint, 2026",
      "selected": false,
      "description": "Transferring physical commonsense learned from human egocentric videos to embodied understanding and robot policies.",
      "image": "assets/researchs/physbrain-1-0.png",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2605.15298"
        }
      ],
      "date": "2026-05-14",
      "imageAlt": "PhysBrain 1.0 Technical Report - overview",
      "imageSource": "https://arxiv.org/html/2605.15298v1/main_fig.png"
    },
    {
      "title": "IntentVLA: Short-Horizon Intent Modeling for Aliased Robot Manipulation",
      "authors": [
        "Shijie Lian",
        "Bin Yu",
        "Xiaopeng Lin",
        "Zhaolong Shen",
        "Laurence Tianruo Yang",
        "Yurun Jin",
        "Haishan Liu",
        "Changti Wu",
        "Hang Yuan",
        "Cong Huang",
        "Kai Chen"
      ],
      "venue": "EMNLP 2026",
      "selected": false,
      "description": "Modeling short-horizon intent to improve action consistency when similar observations require different manipulation behaviors.",
      "image": "assets/researchs/intentvla.png",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2605.14712"
        },
        {
          "label": "code",
          "url": "https://github.com/ZGC-EmbodyAI/IntentVLA"
        }
      ],
      "date": "2026-05-14",
      "imageAlt": "IntentVLA: Short-Horizon Intent Modeling for Aliased Robot Manipulation - overview",
      "imageSource": "https://arxiv.org/html/2605.14712v3/Fig3.png"
    },
    {
      "title": "FrameSkip: Learning from Fewer but More Informative Frames in VLA Training",
      "authors": [
        "Bin Yu",
        "Shijie Lian",
        "Xiaopeng Lin",
        "Zhaolong Shen",
        "Yuliang Wei",
        "Changti Wu",
        "Hang Yuan",
        "Haishan Liu",
        "Bailing Wang",
        "Cong Huang",
        "Kai Chen"
      ],
      "venue": "Findings of EMNLP 2026",
      "selected": false,
      "description": "Training VLA policies with fewer, more informative demonstration frames while leaving inference unchanged.",
      "image": "assets/researchs/frameskip.png",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2605.13757"
        },
        {
          "label": "code",
          "url": "https://github.com/ZGC-EmbodyAI/FrameSkip"
        }
      ],
      "date": "2026-05-13",
      "imageAlt": "FrameSkip: Learning from Fewer but More Informative Frames in VLA Training - overview",
      "imageSource": "https://arxiv.org/html/2605.13757v1/method.png"
    },
    {
      "title": "3D-Mix for VLA: A Plug-and-Play Module for Integrating VGGT-based 3D Information into Vision-Language-Action Models",
      "authors": [
        "Bin Yu",
        "Shijie Lian",
        "Xiaopeng Lin",
        "Zhaolong Shen",
        "Yuliang Wei",
        "Haishan Liu",
        "Changti Wu",
        "Hang Yuan",
        "Bailing Wang",
        "Cong Huang",
        "Kai Chen"
      ],
      "venue": "arXiv preprint, 2026",
      "selected": false,
      "description": "Integrating 3D geometric information into existing VLA architectures through a plug-and-play fusion module.",
      "image": "assets/researchs/3d-mix.png",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2603.24393"
        }
      ],
      "date": "2026-03-25",
      "imageAlt": "3D-Mix for VLA: A Plug-and-Play Module for Integrating VGGT-based 3D Information into Vision-Language-Action Models - overview",
      "imageSource": "https://arxiv.org/html/2603.24393v1/VLA-arch.png"
    },
    {
      "title": "LangForce: Bayesian Decomposition of Vision Language Action Models via Latent Action Queries",
      "authors": [
        "Shijie Lian",
        "Bin Yu",
        "Xiaopeng Lin",
        "Laurence T. Yang",
        "Zhaolong Shen",
        "Changti Wu",
        "Yuzhuo Miao",
        "Cong Huang",
        "Kai Chen"
      ],
      "venue": "ICML 2026",
      "selected": false,
      "description": "Bayesian decomposition with latent action queries helps VLA policies follow language instructions instead of relying on visual shortcuts.",
      "image": "assets/researchs/langforce.png",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2601.15197"
        },
        {
          "label": "code",
          "url": "https://github.com/ZGC-EmbodyAI/LangForce"
        }
      ],
      "date": "2026-01-21",
      "imageAlt": "LangForce: Bayesian Decomposition of Vision Language Action Models via Latent Action Queries - overview",
      "imageSource": "https://arxiv.org/html/2601.15197v7/Main_Figure.svg"
    },
    {
      "title": "TwinBrainVLA: Unleashing the Potential of Generalist VLMs for Embodied Tasks via Asymmetric Mixture-of-Transformers",
      "authors": [
        "Bin Yu",
        "Shijie Lian",
        "Xiaopeng Lin",
        "Yuliang Wei",
        "Zhaolong Shen",
        "Changti Wu",
        "Yuzhuo Miao",
        "Xinming Wang",
        "Bailing Wang",
        "Cong Huang",
        "Kai Chen"
      ],
      "venue": "Findings of EMNLP 2026",
      "selected": false,
      "description": "A frozen generalist and a trainable specialist preserve visual-language knowledge while learning embodied control.",
      "image": "assets/researchs/twinbrainvla.png",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2601.14133"
        },
        {
          "label": "code",
          "url": "https://github.com/ZGC-EmbodyAI/TwinBrainVLA"
        }
      ],
      "date": "2026-01-20",
      "imageAlt": "TwinBrainVLA: Unleashing the Potential of Generalist VLMs for Embodied Tasks via Asymmetric Mixture-of-Transformers - overview",
      "imageSource": "https://arxiv.org/html/2601.14133v2/DualBrainVLA-arch.png"
    },
    {
      "title": "PhysBrain: Human Egocentric Data as a Bridge from Vision Language Models to Physical Intelligence",
      "authors": [
        "Xiaopeng Lin",
        "Shijie Lian",
        "Bin Yu",
        "Ruoqi Yang",
        "Zhaolong Shen",
        "Changti Wu",
        "Yuzhuo Miao",
        "Yurun Jin",
        "Yukun Shi",
        "Jiyan He",
        "Cong Huang",
        "Bojun Cheng",
        "Kai Chen"
      ],
      "venue": "arXiv preprint, 2025",
      "selected": false,
      "description": "Transferring supervision from human egocentric video to improve embodied understanding and downstream robot control.",
      "image": "assets/researchs/physbrain.png",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2512.16793"
        },
        {
          "label": "code",
          "url": "https://github.com/ZGC-EmbodyAI/PhysBrain"
        }
      ],
      "date": "2025-12-18",
      "imageAlt": "PhysBrain: Human Egocentric Data as a Bridge from Vision Language Models to Physical Intelligence - overview",
      "imageSource": "https://arxiv.org/html/2512.16793v2/fig/data_pipeline.jpg"
    },
    {
      "title": "DL-Clip: Online D-Learning with Clipping Operation for Fast Model-Free Stabilizing Control",
      "authors": [
        "Jingxuan Liu",
        "Chenyu Wang",
        "Zhaolong Shen",
        "Quan Quan"
      ],
      "venue": "IROS 2025",
      "selected": true,
      "description": "Online model-free stabilizing control using D-learning and clipped policy updates.",
      "image": "assets/researchs/dl-clip.png",
      "links": [
        {
          "label": "paper",
          "url": "https://doi.org/10.1109/IROS60139.2025.11247028"
        }
      ],
      "date": "2025-10-19",
      "imageAlt": "DL-Clip real-world multicopter visual servoing experiment",
      "imageSource": "https://raw.githubusercontent.com/Ljx-11/DL-Clip-Algorithm/main/result/real_fig1.png"
    },
    {
      "title": "DOPT: D-Learning with Off-Policy Target toward Sample Efficiency and Fast Convergence Control",
      "authors": [
        "Zhaolong Shen",
        "Quan Quan"
      ],
      "venue": "ICRA 2025",
      "selected": true,
      "description": "An off-policy variant of D-learning that reuses current and historical data for sample-efficient, fast-converging control within a Lyapunov framework.",
      "image": "assets/researchs/dopt.png",
      "links": [
        {
          "label": "paper",
          "url": "https://doi.org/10.1109/ICRA55743.2025.11127827"
        },
        {
          "label": "code",
          "url": "https://github.com/Shenzhaolong1330/DOPT"
        }
      ],
      "date": "2025-05-19",
      "imageAlt": "DOPT: D-Learning with Off-Policy Target toward Sample Efficiency and Fast Convergence Control - overview",
      "imageSource": "https://github.com/user-attachments/assets/26da8133-a487-4131-9aa8-a10e44c6ec5b"
    },
    {
      "title": "An Efficient Real-Time Planning Method for Swarm Robotics Based on an Optimal Virtual Tube",
      "authors": [
        "Pengda Mao",
        "Shuli Lv",
        "Chen Min",
        "Zhaolong Shen",
        "Quan Quan"
      ],
      "venue": "arXiv preprint, 2025",
      "selected": false,
      "description": "Combining optimal virtual tube planning with distributed control for efficient real-time swarm navigation.",
      "image": "assets/researchs/optimal-virtual-tube.png",
      "links": [
        {
          "label": "paper",
          "url": "https://arxiv.org/abs/2505.01380"
        }
      ],
      "date": "2025-05-02",
      "imageAlt": "An Efficient Real-Time Planning Method for Swarm Robotics Based on an Optimal Virtual Tube - overview",
      "imageSource": "https://arxiv.org/html/2505.01380v2/top_figure.png"
    }
  ],

  // 5. Academic Service
  "service": [
    "Reviewer: RA-L, ICRA, IROS, AAAI"
  ],

  // 6. Talks & Media
  "talks": [
    {
      "title": "WBCD 2026 Technical Talk",
      "description": "I was invited to give a technical talk sharing our solutions in the [WBCD](https://wbcdcompetition.github.io/) 2026 competition.",
      "image": "assets/talks/Talks.jpg",
    }
  ],

  // Footer
  "updated": "September 2026",

  // Saved education data (not currently displayed)
  "education": [
    {
      "institution": "Beihang University (BUAA) & Zhongguancun Academy (ZGCA)",
      "degree": "Ph.D. student · Advisors: Prof. Quan Quan and Dr. Kai Chen",
      "period": ""
    },
    {
      "institution": "Northeastern University (NEU)",
      "degree": "Bachelor’s degree",
      "period": ""
    }
  ]
};
