// publications.js의 PUBLICATIONS를 읽어 목록을 그립니다.
(function () {
  const list = document.getElementById("pub-list");
  if (!list || typeof PUBLICATIONS === "undefined") return;

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // "Seonghoon Yu*" -> { name: "Seonghoon Yu", mark: "*" }
  const parseAuthor = (a) => {
    const m = a.match(/^(.*?)([*+]*)$/);
    return { name: m[1].trim(), mark: m[2] };
  };

  const renderAuthors = (authors) =>
    authors
      .map(parseAuthor)
      .map(({ name, mark }) => {
        const n = name === SELF_NAME ? `<strong class="self">${esc(name)}</strong>` : esc(name);
        return mark ? `${n}<sup>${esc(mark)}</sup>` : n;
      })
      .join(", ");

  // "Byung-kwan Lee" -> "Lee, Byung-kwan"
  const bibName = (name) => {
    const parts = name.split(" ");
    const last = parts.pop();
    return parts.length ? `${last}, ${parts.join(" ")}` : last;
  };

  const bibKey = (p) => {
    const first = parseAuthor(p.authors[0]).name.split(" ").pop().toLowerCase().replace(/[^a-z]/g, "");
    const word = p.title
      .split(/[\s-]+/)
      .map((w) => w.toLowerCase().replace(/[^a-z]/g, ""))
      .find((w) => w && !["a", "an", "the"].includes(w));
    return `${first}${p.year}${word}`;
  };

  const renderBibtex = (p) => {
    const isJournal = Boolean(p.bib.journal);
    const fields = [
      ["title", p.title],
      ["author", p.authors.map((a) => bibName(parseAuthor(a).name)).join(" and ")],
      isJournal ? ["journal", p.bib.journal] : ["booktitle", p.bib.booktitle],
      ["year", p.year],
    ];
    const body = fields.map(([k, v]) => `  ${k.padEnd(9)} = {${v}}`).join(",\n");
    return `@${isJournal ? "article" : "inproceedings"}{${bibKey(p)},\n${body}\n}`;
  };

  const isVideo = (src) => /\.(mp4|webm)$/i.test(src || "");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const renderThumb = (p) => {
    if (!p.teaser) return `<span class="thumb-label">${esc(p.venue)}</span>`;
    if (isVideo(p.teaser)) {
      const poster = p.poster ? ` poster="${esc(p.poster)}"` : "";
      // 움직임 줄이기 설정이면 자동재생 대신 컨트롤 표시
      const play = reduceMotion ? "controls" : "autoplay loop";
      return `<video src="${esc(p.teaser)}"${poster} ${play} muted playsinline preload="metadata"></video>`;
    }
    return `<img src="${esc(p.teaser)}" alt="" loading="lazy">`;
  };

  const thumbClass = (p) => (!p.teaser ? " is-empty" : isVideo(p.teaser) ? " is-video" : "");

  const renderLinks = (p, i) => {
    const out = [];
    const l = p.links || {};
    if (l.arxiv) {
      out.push(`<a href="https://arxiv.org/abs/${esc(l.arxiv)}">arXiv</a>`);
      out.push(`<a href="https://arxiv.org/pdf/${esc(l.arxiv)}">PDF</a>`);
    }
    if (l.project) out.push(`<a href="${esc(l.project)}">Project Page</a>`);
    if (l.code) out.push(`<a href="${esc(l.code)}">Code</a>`);
    if (p.bib) {
      out.push(
        `<button type="button" class="link-btn" aria-expanded="false" aria-controls="bib-${i}">BibTeX</button>`
      );
    }
    return out.join(" / ");
  };

  const titleHref = (p) => {
    const l = p.links || {};
    if (l.project) return l.project;
    if (l.arxiv) return `https://arxiv.org/abs/${l.arxiv}`;
    return "";
  };

  list.innerHTML = PUBLICATIONS.map((p, i) => {
    const href = titleHref(p);
    const title = href
      ? `<a class="pub-title" href="${esc(href)}">${esc(p.title)}</a>`
      : `<span class="pub-title">${esc(p.title)}</span>`;
    const links = renderLinks(p, i);
    const bib = p.bib
      ? `<div class="bibtex" id="bib-${i}" hidden>
           <button type="button" class="copy-btn">Copy</button>
           <pre><code>${esc(renderBibtex(p))}</code></pre>
         </div>`
      : "";
    return `
      <article class="pub">
        <div class="pub-thumb${thumbClass(p)}">${renderThumb(p)}</div>
        <div class="pub-body">
          ${title}
          <div class="pub-authors">${renderAuthors(p.authors)}</div>
          <div class="pub-venue"><em>${esc(p.venue)}</em></div>
          ${links ? `<div class="pub-links">${links}</div>` : ""}
          ${bib}
        </div>
      </article>`;
  }).join("");

  list.addEventListener("click", async (e) => {
    const toggle = e.target.closest(".link-btn");
    if (toggle) {
      const box = document.getElementById(toggle.getAttribute("aria-controls"));
      const open = box.hidden;
      box.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      return;
    }
    const copy = e.target.closest(".copy-btn");
    if (copy) {
      const text = copy.parentElement.querySelector("code").textContent;
      try {
        await navigator.clipboard.writeText(text);
        copy.textContent = "Copied";
      } catch {
        copy.textContent = "Copy failed";
      }
      setTimeout(() => (copy.textContent = "Copy"), 1500);
    }
  });
})();
