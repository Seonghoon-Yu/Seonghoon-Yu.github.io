// 본인 이름: 저자 목록에서 자동으로 굵게 표시됩니다.
const SELF_NAME = "Seonghoon Yu";

// 위에서부터 순서대로 표시됩니다 (최신순).
//
// authors : 이름 끝에 *  = equal contribution, +  = corresponding author
// teaser  : 썸네일 이미지 또는 .mp4 영상 경로 (비우면 학회 이름 타일이 표시됨)
// poster  : 영상이 재생되기 전에 보일 이미지 (선택)
// links   : arxiv (ID만), code, project — 없는 항목은 생략
// bib     : booktitle 또는 journal — 지정하면 BibTeX 버튼이 생김
const PUBLICATIONS = [
  {
    title: "When to Switch: Reliable Action-Chunk Extension for Vision-Language-Action Models",
    authors: ["Seonghoon Yu", "Dongwon Kim", "HyungRok Jung", "Yoonjae Baek", "Byung-kwan Lee", "Suha Kwak", "Jeany Son"],
    venue: "Under review",
    year: 2026,
    teaser: "assets/teasers/when-to-switch.mp4",
    poster: "assets/teasers/when-to-switch.jpg",
    links: { code: "https://github.com/Seonghoon-Yu/RACE-VLA" },
  },
  {
    title: "Hide to See: Reasoning-prefix Masking for Visual-anchored Thinking in VLM Distillation",
    authors: ["Seonghoon Yu", "Dongjun Nam", "Byung-kwan Lee+", "Jeany Son+"],
    venue: "NeurIPS 2026",
    year: 2026,
    teaser: "assets/teasers/hide-to-see.png",
    links: { arxiv: "2605.11651", code: "https://github.com/Seonghoon-Yu/Masking-KD", project: "https://seonghoon-yu.github.io/Masking-KD-Page/" },
    bib: { booktitle: "Advances in Neural Information Processing Systems (NeurIPS)" },
  },
  {
    title: "Cost-efficient Active Learning for Referring Image Segmentation and Grounding",
    authors: ["Junbeom Hong*", "Seonghoon Yu*", "HyungRok Jung", "Sundong Kim", "Jeany Son"],
    venue: "EMNLP 2026 Findings",
    year: 2026,
    teaser: "assets/teasers/active-learning.png",
    links: { arxiv: "2608.30621", code: "https://github.com/junbum766/ALRIS" },
    bib: { booktitle: "Findings of the Association for Computational Linguistics: EMNLP 2026" },
  },
  {
    title: "Single-Teacher View Augmentation: Boosting Knowledge Distillation via Angular Diversity",
    authors: ["Seonghoon Yu*", "Dongjun Nam*", "Dina Katabi", "Jeany Son"],
    venue: "NeurIPS 2025",
    year: 2025,
    teaser: "assets/teasers/diverse-kd.png",
    links: { arxiv: "2510.22480", code: "https://github.com/june6423/Angular-KD" },
    bib: { booktitle: "Advances in Neural Information Processing Systems (NeurIPS)" },
  },
  {
    title: "Latent Expression Generation for Referring Image Segmentation and Grounding",
    authors: ["Seonghoon Yu", "Junbeom Hong", "Joonseok Lee", "Jeany Son"],
    venue: "ICCV 2025",
    year: 2025,
    teaser: "assets/teasers/latent-vg.png",
    links: { arxiv: "2508.05123", code: "https://github.com/Seonghoon-Yu/Latent-VG" },
    bib: { booktitle: "Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)" },
  },
  {
    title: "A Simple Baseline with Single-encoder for Referring Image Segmentation",
    authors: ["Seonghoon Yu", "Ilchae Jung", "Byeongju Han", "Taeoh Kim", "Yunho Kim", "Dongyoon Wee", "Jeany Son"],
    venue: "arXiv preprint 2024",
    year: 2024,
    teaser: "assets/teasers/shared-ris.png",
    links: { arxiv: "2408.15521", code: "https://github.com/Seonghoon-Yu/Shared-RIS" },
    bib: { journal: "arXiv preprint arXiv:2408.15521" },
  },
  {
    title: "Pseudo-RIS: Distinctive Pseudo-supervision Generation for Referring Image Segmentation",
    authors: ["Seonghoon Yu", "Paul Hongsuck Seo+", "Jeany Son+"],
    venue: "ECCV 2024",
    year: 2024,
    teaser: "assets/teasers/pseudo-ris.png",
    links: { arxiv: "2407.07412", code: "https://github.com/Seonghoon-Yu/Pseudo-RIS" },
    bib: { booktitle: "European Conference on Computer Vision (ECCV)" },
  },
  {
    title: "Zero-shot Referring Image Segmentation with Global-Local Context Features",
    authors: ["Seonghoon Yu", "Paul Hongsuck Seo", "Jeany Son"],
    venue: "CVPR 2023",
    year: 2023,
    teaser: "assets/teasers/zero-shot-ris.png",
    links: { arxiv: "2303.17811", code: "https://github.com/Seonghoon-Yu/Zero-shot-RIS" },
    bib: { booktitle: "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)" },
  },
];
