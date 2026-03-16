import { STAGES, PERFORMANCES } from './data.js';

// ─── icons ──────────────────────────────────────────────────────
const ICONS = {
  bolt: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14H12V22L22 10H13V2Z"/></svg>`,
  rocket: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.5-1 1-4c1.5 0 3 .5 4 2Z"/><path d="M12 15v5s1 .5 4 1c0-1.5-.5-3-2-4Z"/></svg>`,
  star: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,
  starOutline: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  eye: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeOff: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
  play: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5 3L19 12L5 21V3Z"/></svg>`,
  chevronDown: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"/></svg>`,
  chevronRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"/></svg>`,
  chevronUp: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><polyline points="18 15 12 9 6 15"/></svg>`,
  rock: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M18 12V10a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2"/><path d="M14 10V3a2 2 0 0 0-2-2 2 2 0 0 0-2 2v11"/><path d="M10 14V9a2 2 0 0 0-2-2 2 2 0 0 0-2 2v5"/><path d="M6 14v-1a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-7"/><path d="m14.5 18.5 2 2"/></svg>`,
  viewStage: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/></svg>`,
  viewTime: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
};

// ─── state ───────────────────────────────────────────────────────
const state = {
  date: "2026-03-21",
  stageFilter: null,
  favOnly: false,
  showHidden: false,
  modalPerf: null,
  viewMode: "stage",
};

const LS_FAV = "megaport_fav";
const LS_HIDDEN = "megaport_hidden";

let favorites = new Set(JSON.parse(localStorage.getItem(LS_FAV) || "[]"));
let hidden = new Set(JSON.parse(localStorage.getItem(LS_HIDDEN) || "[]"));

// collapsed stage bodies: Set of stage names currently collapsed
const collapsedStages = new Set();
// collapsed past sections per stage
const pastExpanded = new Set();

// ─── persistence ─────────────────────────────────────────────────
function saveFav() { localStorage.setItem(LS_FAV, JSON.stringify([...favorites])); }
function saveHidden() { localStorage.setItem(LS_HIDDEN, JSON.stringify([...hidden])); }

// ─── time helpers ────────────────────────────────────────────────
function toMins(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function nowMins() {
  const d = new Date();
  return d.getHours() * 60 + d.getMinutes();
}

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function isToday(date) { return date === todayStr(); }

function isFestivalPeriod() {
  const now = new Date();
  return now >= new Date("2026-03-21T00:00:00") && now <= new Date("2026-03-22T23:59:59");
}

function perfStatus(p) {
  if (!isToday(p.date)) return "normal";
  const now = nowMins();
  if (toMins(p.end) <= now) return "past";
  if (toMins(p.start) <= now) return "playing";
  if (toMins(p.start) - now <= 90) return "upcoming";
  return "normal";
}

function fmtTime(t) { return t; }

// ─── data helpers ────────────────────────────────────────────────
function perfId(p) { return `${p.date}|${p.stage}|${p.name}`; }

function isFav(p) { return favorites.has(p.name); }
function isHidden(p) { return hidden.has(p.name); }

function perfsForDate(date) {
  return PERFORMANCES.filter(p => p.date === date);
}

function filteredPerfs(date) {
  let perfs = perfsForDate(date);
  if (state.stageFilter) perfs = perfs.filter(p => p.stage === state.stageFilter);
  if (state.favOnly) perfs = perfs.filter(p => isFav(p));
  return perfs;
}

function stagesForDate(date) {
  const names = [...new Set(perfsForDate(date).map(p => p.stage))];
  return names.sort((a, b) => (STAGES[a]?.order ?? 99) - (STAGES[b]?.order ?? 99));
}

// ─── youtube helper ───────────────────────────────────────────────
function ytUrl(artist, song) {
  return "https://www.youtube.com/results?search_query=" + encodeURIComponent(artist + " " + song);
}

// ─── render: now/next banner ─────────────────────────────────────
function renderNowNext() {
  const container = document.getElementById("now-next");
  if (!isToday(state.date)) { container.innerHTML = ""; return; }

  const perfs = perfsForDate(state.date);
  const playing = perfs.filter(p => perfStatus(p) === "playing");
  const upcoming = perfs.filter(p => perfStatus(p) === "upcoming")
    .sort((a, b) => toMins(a.start) - toMins(b.start));

  let html = "";

  if (playing.length) {
    html += `<div class="now-next-header">${ICONS.bolt} NOW ON STAGE</div>
             <div class="now-next-grid">`;
    playing.forEach(p => {
      const stg = STAGES[p.stage] || {};
      html += `<div class="now-next-card" data-perf="${escHtml(perfId(p))}">
        <div class="now-next-stage-dot" style="background:${stg.color || "#888"}"></div>
        <div class="now-next-info">
          <div class="now-next-name">${escHtml(p.name)}</div>
          <div class="now-next-meta">${escHtml(p.stage)}</div>
        </div>
        <div class="now-next-time">LIVE</div>
      </div>`;
    });
    html += "</div>";
  }

  if (upcoming.length) {
    html += `<div class="now-next-header next" style="margin-top:${playing.length ? 0 : 0}px">${ICONS.rocket} UP NEXT</div>
             <div class="now-next-grid next-grid">`;
    upcoming.slice(0, 6).forEach(p => {
      const stg = STAGES[p.stage] || {};
      html += `<div class="now-next-card" data-perf="${escHtml(perfId(p))}">
        <div class="now-next-stage-dot" style="background:${stg.color || "#888"}"></div>
        <div class="now-next-info">
          <div class="now-next-name">${escHtml(p.name)}</div>
          <div class="now-next-meta">${escHtml(p.stage)}</div>
        </div>
        <div class="now-next-time next-time">${fmtTime(p.start)}</div>
      </div>`;
    });
    html += "</div>";
  }

  container.innerHTML = html ? `<div class="now-next-section">${html}</div>` : "";
}

// ─── render: stage filter pills ──────────────────────────────────
function renderFilter() {
  const stages = stagesForDate(state.date);
  const container = document.getElementById("stage-filter");
  let html = `<div class="stage-pill all ${!state.stageFilter && !state.favOnly ? "active" : ""}"
                   data-stage="">ALL STAGES</div>`;
  stages.forEach(name => {
    const stg = STAGES[name] || {};
    const active = state.stageFilter === name;
    // use dynamic color for border/text, but solid for active
    const color = stg.color || "#888";
    const style = active
      ? `background:${color}; color:#000; border-color:${color}; box-shadow: 0 0 15px ${color}44;`
      : `border-color:${color}88; color:${color};`;

    html += `<div class="stage-pill ${active ? "active" : ""}"
                  data-stage="${escHtml(name)}"
                  style="${style}">
              ${escHtml(name)}
             </div>`;
  });
  container.innerHTML = html;
}

// ─── render: main performance list ───────────────────────────────
function renderMain() {
  const main = document.getElementById("perf-list");
  const perfs = filteredPerfs(state.date);

  if (!perfs.length) {
    main.innerHTML = `<div class="empty-state">${ICONS.rock}<div style="font-weight:900; margin-top:10px; font-size:1.2rem; color:var(--text-sub)">NO SHOWS FOUND</div></div>`;
    return;
  }

  if (state.viewMode === "time") {
    renderMainByTime(perfs);
    return;
  }

  // group by stage
  const stageOrder = stagesForDate(state.date);
  const byStage = {};
  perfs.forEach(p => { (byStage[p.stage] = byStage[p.stage] || []).push(p); });

  // when filtering by stage, only show that stage; else show in order
  const stagesToShow = state.stageFilter
    ? [state.stageFilter]
    : stageOrder.filter(s => byStage[s]);

  let html = "";
  const todayView = isToday(state.date);

  stagesToShow.forEach(stageName => {
    const stg = STAGES[stageName] || {};
    const perfs = (byStage[stageName] || []).sort((a, b) => toMins(a.start) - toMins(b.start));
    const collapsed = collapsedStages.has(stageName);

    const pastPerfs = perfs.filter(p => perfStatus(p) === "past");
    const activePerfs = perfs.filter(p => perfStatus(p) !== "past");
    const hasPast = todayView && pastPerfs.length > 0;
    const pastExp = pastExpanded.has(stageName);
    const hiddenCount = perfs.filter(p => isHidden(p) && !state.showHidden).length;

    html += `<div class="stage-section">
      <div class="stage-section-header ${collapsed ? "collapsed" : ""}" data-toggle="${escHtml(stageName)}">
        <div class="stage-dot" style="background:${stg.color || "#888"}; box-shadow: 0 0 8px ${stg.color || "#888"}aa"></div>
        <span class="stage-name">${escHtml(stageName)}</span>
        <span class="stage-sublabel">${stg.label || ""}</span>
        ${hiddenCount ? `<span class="stage-count">(${hiddenCount} HIDDEN)</span>` : ""}
        <span class="stage-toggle">${collapsed ? ICONS.chevronRight : ICONS.chevronDown}</span>
      </div>`;

    if (!collapsed) {
      html += `<div class="stage-section-body ${state.showHidden ? "show-hidden" : ""}">`;

      // past performances (collapsible)
      if (hasPast) {
        html += `<div class="past-section ${pastExp ? "" : "collapsed"}">`;
        pastPerfs.forEach(p => { html += renderPerfRow(p, "past"); });
        html += "</div>";
        html += `<div class="past-toggle" data-past-toggle="${escHtml(stageName)}">
          <div style="display:flex; align-items:center; justify-content:center; gap:8px">
            ${pastExp ? ICONS.chevronUp : ICONS.chevronDown}
            ${pastExp ? "HIDE FINISHED" : `SHOW FINISHED (${pastPerfs.length})`}
          </div>
        </div>`;
      }

      // active performances
      if (activePerfs.length === 0 && !hasPast) {
        html += `<div class="all-past-msg">TODAY'S LINEUP IS FINISHED</div>`;
      }
      activePerfs.forEach(p => {
        const status = perfStatus(p);
        html += renderPerfRow(p, status);
      });

      html += "</div>"; // stage-section-body
    }

    html += "</div>"; // stage-section
  });

  main.innerHTML = html;
}

function renderMainByTime(perfs) {
  const main = document.getElementById("perf-list");
  const sorted = [...perfs].sort((a, b) => {
    const timeDiff = toMins(a.start) - toMins(b.start);
    if (timeDiff !== 0) return timeDiff;
    return (STAGES[a.stage]?.order ?? 99) - (STAGES[b.stage]?.order ?? 99);
  });

  let html = "";
  const todayView = isToday(state.date);
  const pastPerfs = sorted.filter(p => perfStatus(p) === "past");
  const activePerfs = sorted.filter(p => perfStatus(p) !== "past");
  const hasPast = todayView && pastPerfs.length > 0;
  const pastExp = pastExpanded.has("__time_view__");

  html += `<div class="time-view-section">`;

  if (hasPast) {
    html += `<div class="past-section ${pastExp ? "" : "collapsed"}">`;
    pastPerfs.forEach(p => { html += renderPerfRow(p, "past", true); });
    html += "</div>";
    html += `<div class="past-toggle" data-past-toggle="__time_view__">
          <div style="display:flex; align-items:center; justify-content:center; gap:8px">
            ${pastExp ? ICONS.chevronUp : ICONS.chevronDown}
            ${pastExp ? "HIDE FINISHED" : `SHOW FINISHED (${pastPerfs.length})`}
          </div>
        </div>`;
  }

  if (activePerfs.length === 0 && !hasPast) {
    html += `<div class="all-past-msg">TODAY'S LINEUP IS FINISHED</div>`;
  }
  activePerfs.forEach(p => {
    const status = perfStatus(p);
    html += renderPerfRow(p, status, true);
  });

  html += `</div>`;
  main.innerHTML = html;
}

function renderPerfRow(p, status, showStage = false) {
  const fav = isFav(p);
  const hid = isHidden(p);
  const id = escHtml(perfId(p));
  const isPlaying = status === "playing";
  const stg = STAGES[p.stage] || {};

  return `<div class="perf-row ${status} ${hid ? "hidden-row" : ""}" data-perf="${id}">
    ${isPlaying ? `<div class="perf-status-dot"></div>` : ""}
    <div class="perf-time">
      <div class="perf-time-start">${fmtTime(p.start)}</div>
      <div class="perf-time-end">${fmtTime(p.end)}</div>
    </div>
    <div class="perf-info">
      <div class="perf-name">${escHtml(p.name)}</div>
      <div style="display:flex; align-items:center; gap:8px">
        ${showStage ? `<div class="perf-stage-label" style="background:${stg.color || "#888"}22; color:${stg.color || "#888"}; border:1px solid ${stg.color || "#888"}44; font-size:0.65rem; padding:1px 6px; border-radius:4px; font-weight:800; text-transform:uppercase">${escHtml(p.stage)}</div>` : ""}
        ${p.tags?.length ? `<div class="perf-tags" style="margin:0">${p.tags.map(t => `<span class="perf-tag">${escHtml(t)}</span>`).join("")}</div>` : ""}
      </div>
    </div>
    <div class="perf-actions">
      <button class="action-btn fav-btn ${fav ? "fav-active" : ""}"
              data-fav="${id}" title="FAV" aria-label="FAV">
        ${fav ? ICONS.star : ICONS.starOutline}
      </button>
      <button class="action-btn hide-btn ${hid ? "hide-active" : ""}"
              data-hide="${id}" title="HIDE" aria-label="HIDE">
        ${hid ? ICONS.eyeOff : ICONS.eye}
      </button>
    </div>
  </div>`;
}

// ─── render: modal ────────────────────────────────────────────────
function renderModal(p) {
  const stg = STAGES[p.stage] || {};
  const status = perfStatus(p);
  const fav = isFav(p);
  const hid = isHidden(p);
  const id = escHtml(perfId(p));

  const timeStr = `${p.start} – ${p.end}`;
  const statusBadge = status === "playing"
    ? `<span class="modal-time-playing" style="background:${varToHex("--now")}22; color:var(--now); border-color:var(--now)44">${ICONS.bolt} LIVE NOW</span>`
    : status === "past" ? `<span style="color:var(--text-dim);font-size:0.8rem; font-weight:800">FINISHED</span>` : "";

  const songsHtml = p.songs?.length
    ? `<div class="modal-section-title" style="margin-top:20px; color:var(--accent)">MUST HEAR</div>
       <div class="songs-list">
         ${p.songs.map(s => `
           <a href="${ytUrl(p.name, s)}" target="_blank" rel="noopener" class="song-item" style="display:flex; align-items:center; text-decoration:none; color:var(--text)">
             <span style="font-size:1.2rem; margin-right:12px; color:var(--accent2)">${ICONS.play}</span>
             <div style="flex:1">
               <div style="font-weight:800; font-size:0.95rem">${escHtml(s)}</div>
               <div style="font-size:0.7rem; color:var(--text-dim); text-transform:uppercase">Listen on YouTube ↗</div>
             </div>
           </a>`).join("")}
       </div>`
    : "";

  document.getElementById("modal-overlay").innerHTML = `
    <div class="modal-sheet" id="modal-sheet">
      <div style="width:40px; height:4px; background:var(--border); border-radius:2px; margin:12px auto; flex-shrink:0"></div>
      <div class="modal-scroll">
        <div class="modal-stage-badge"
             style="background:${stg.color || "#888"}22; border:2px solid ${stg.color || "#888"}88; color:${stg.color || "#888"}">
          <div style="width:10px; height:10px; border-radius:3px; background:${stg.color || "#888"}; box-shadow:0 0 8px ${stg.color || "#888"}"></div>
          ${escHtml(p.stage)}
        </div>

        <h2 class="modal-title">${escHtml(p.name)}</h2>

        <div class="modal-time" style="display:flex; align-items:center; gap:12px">
          <span>${timeStr}</span>
          ${statusBadge}
        </div>

        ${p.tags?.length ? `<div class="modal-tags" style="margin-bottom:20px">${p.tags.map(t => `<span class="modal-tag">${escHtml(t)}</span>`).join("")}</div>` : ""}

        ${p.desc ? `<p class="modal-desc">${escHtml(p.desc)}</p>` : ""}

        ${songsHtml}

        <div class="modal-actions" style="margin-top:30px">
          <button class="modal-action-btn fav-btn ${fav ? "active" : ""}" data-fav="${id}">
            ${fav ? ICONS.star + " SAVED" : ICONS.starOutline + " SAVE"}
          </button>
          <button class="modal-action-btn hide-btn ${hid ? "active" : ""}" data-hide="${id}" style="background:transparent; border-color:transparent; box-shadow:none; flex:0.4">
            ${hid ? ICONS.eye + " SHOW" : ICONS.eyeOff + " HIDE"}
          </button>
        </div>
      </div>
    </div>`;
}

// helper for modal colors
function varToHex(v) {
  if (v === "--now") return "#00ff9f";
  return "#ffffff";
}

// ─── open / close modal ──────────────────────────────────────────
function openModal(p) {
  state.modalPerf = p;
  renderModal(p);
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  state.modalPerf = null;
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

// ─── perf lookup ─────────────────────────────────────────────────
function findPerf(id) {
  const [date, stage, name] = id.split("|");
  return PERFORMANCES.find(p => p.date === date && p.stage === stage && p.name === name);
}

// ─── event delegation ────────────────────────────────────────────
document.addEventListener("click", e => {
  const t = e.target;

  // date tab
  const dateTab = t.closest(".date-tab");
  if (dateTab) {
    state.date = dateTab.dataset.date;
    state.stageFilter = null;
    collapsedStages.clear();
    pastExpanded.clear();
    renderAll();
    return;
  }

  // stage filter pill
  const pill = t.closest(".stage-pill");
  if (pill) {
    const stage = pill.dataset.stage;
    state.stageFilter = stage || null;
    if (!stage) state.favOnly = false;
    renderFilter();
    renderMain();
    // add tapped to the freshly rendered pill (old element was replaced by renderFilter)
    const newPill = document.querySelector(`.stage-pill[data-stage="${stage}"]`);
    if (newPill) {
      newPill.classList.add("tapped");
      setTimeout(() => newPill.classList.remove("tapped"), 350);
    }
    return;
  }

  // fav button (in row or modal)
  const favBtn = t.closest("[data-fav]");
  if (favBtn && !t.closest(".modal-overlay")) {
    e.stopPropagation();
    const p = findPerf(favBtn.dataset.fav);
    if (p) { toggleFav(p); renderMain(); }
    return;
  }

  // hide button (in row)
  const hideBtn = t.closest("[data-hide]");
  if (hideBtn && !t.closest(".modal-overlay")) {
    e.stopPropagation();
    const p = findPerf(hideBtn.dataset.hide);
    if (p) { toggleHidden(p); renderMain(); }
    return;
  }

  // stage section collapse toggle
  const toggleHdr = t.closest("[data-toggle]");
  if (toggleHdr) {
    const name = toggleHdr.dataset.toggle;
    collapsedStages.has(name) ? collapsedStages.delete(name) : collapsedStages.add(name);
    renderMain();
    return;
  }

  // past section expand toggle
  const pastToggle = t.closest("[data-past-toggle]");
  if (pastToggle) {
    const name = pastToggle.dataset.pastToggle;
    pastExpanded.has(name) ? pastExpanded.delete(name) : pastExpanded.add(name);
    renderMain();
    return;
  }

  // performance row → open modal
  const perfRow = t.closest("[data-perf]");
  if (perfRow && !t.closest(".perf-actions")) {
    const p = findPerf(perfRow.dataset.perf);
    if (p) openModal(p);
    return;
  }

  // modal overlay backdrop
  if (t === document.getElementById("modal-overlay")) {
    closeModal();
    return;
  }

  // modal fav / hide buttons
  const mFav = t.closest(".modal-action-btn.fav-btn");
  if (mFav && state.modalPerf) {
    toggleFav(state.modalPerf);
    renderModal(state.modalPerf);
    renderMain();
    return;
  }

  const mHide = t.closest(".modal-action-btn.hide-btn");
  if (mHide && state.modalPerf) {
    toggleHidden(state.modalPerf);
    renderModal(state.modalPerf);
    renderMain();
    return;
  }

  // header fav-only toggle
  const bFav = t.closest("#btn-fav");
  if (bFav) {
    state.favOnly = !state.favOnly;
    state.stageFilter = null;
    bFav.classList.toggle("active", state.favOnly);
    if (state.date !== "rolling") {
      renderFilter();
      renderMain();
    }
    return;
  }

  // header show-hidden toggle
  const bHidden = t.closest("#btn-hidden");
  if (bHidden) {
    state.showHidden = !state.showHidden;
    bHidden.classList.toggle("active", state.showHidden);
    if (state.date !== "rolling") renderMain();
    return;
  }

  // header view-mode toggle
  const bViewMode = t.closest("#btn-view-mode");
  if (bViewMode) {
    state.viewMode = state.viewMode === "stage" ? "time" : "stage";
    renderViewToggle();
    if (state.date !== "rolling") renderMain();
    return;
  }
});

// close modal on back gesture / escape
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

// ─── fav / hide toggles ───────────────────────────────────────────
function toggleFav(p) {
  isFav(p) ? favorites.delete(p.name) : favorites.add(p.name);
  saveFav();
}

function toggleHidden(p) {
  isHidden(p) ? hidden.delete(p.name) : hidden.add(p.name);
  saveHidden();
}

// ─── full render cycle ────────────────────────────────────────────
function renderDateTabs() {
  const showRolling = isFestivalPeriod();
  document.getElementById("date-tabs").innerHTML = `
    ${showRolling ? `<div class="date-tab rolling-tab ${state.date === "rolling" ? "active" : ""}" data-date="rolling">
      Rolling!!<span class="day-label">NOW</span>
    </div>` : ""}
    <div class="date-tab ${state.date === "2026-03-21" ? "active" : ""}" data-date="2026-03-21">
      3 / 21<span class="day-label">Saturday</span>
    </div>
    <div class="date-tab ${state.date === "2026-03-22" ? "active" : ""}" data-date="2026-03-22">
      3 / 22<span class="day-label">Sunday</span>
    </div>`;
}

function renderViewToggle() {
  const btn = document.getElementById("btn-view-mode");
  if (!btn) return;
  btn.innerHTML = state.viewMode === "stage" ? ICONS.viewTime : ICONS.viewStage;
  btn.title = state.viewMode === "stage" ? "CHRONOLOGICAL" : "BY STAGE";
}

function renderAll() {
  renderDateTabs();
  renderViewToggle();
  if (state.date === "rolling") {
    document.body.classList.add("rolling-view");
    document.getElementById("now-next").innerHTML = "";
    renderRolling();
    return;
  }
  document.body.classList.remove("rolling-view");
  renderFilter();
  renderNowNext();
  renderMain();
}

function renderRolling() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const timeStr = `${h}:${m}`;

  const todayDate = todayStr();
  const todayPerfs = perfsForDate(todayDate);
  const stages = stagesForDate(todayDate);

  const entries = [];
  stages.forEach(stageName => {
    const sp = todayPerfs
      .filter(p => p.stage === stageName)
      .sort((a, b) => toMins(a.start) - toMins(b.start));
    const playing = sp.find(p => perfStatus(p) === "playing");
    const next = sp.find(p => toMins(p.start) > nowMins());
    if (playing || next) {
      const sortTime = playing ? toMins(playing.start) : toMins(next.start);
      entries.push({ stageName, playing, next, sortTime });
    }
  });
  entries.sort((a, b) => a.sortTime - b.sortTime);

  let html = `<div class="rolling-clock">${timeStr}</div>`;

  if (!entries.length) {
    html += `<div class="empty-state">${ICONS.rock}<div style="font-weight:900; margin-top:10px; font-size:1.2rem; color:var(--text-sub)">ALL DONE FOR TODAY</div></div>`;
  } else {
    entries.forEach(({ stageName, playing, next }) => {
      const stg = STAGES[stageName] || {};
      html += `<div class="rolling-card">
        <div class="rolling-card-header" style="border-left: 4px solid ${stg.color || "#888"}">
          <div class="rolling-stage-dot" style="background:${stg.color || "#888"}; box-shadow: 0 0 8px ${stg.color || "#888"}aa"></div>
          <span class="rolling-stage-name">${escHtml(stageName)}</span>
          <span class="rolling-stage-label">${stg.label || ""}</span>
        </div>`;

      if (playing) {
        html += `<div class="rolling-row rolling-now" data-perf="${escHtml(perfId(playing))}">
          <div class="rolling-badge live">${ICONS.bolt} LIVE</div>
          <div class="rolling-perf-info">
            <div class="rolling-perf-name">${escHtml(playing.name)}</div>
            <div class="rolling-perf-time">${fmtTime(playing.start)} – ${fmtTime(playing.end)}</div>
          </div>
        </div>`;
      }

      if (next) {
        html += `<div class="rolling-row rolling-next" data-perf="${escHtml(perfId(next))}">
          <div class="rolling-badge up">${fmtTime(next.start)}</div>
          <div class="rolling-perf-info">
            <div class="rolling-perf-name">${escHtml(next.name)}</div>
            <div class="rolling-perf-time">– ${fmtTime(next.end)}</div>
          </div>
        </div>`;
      }

      html += `</div>`;
    });
  }

  document.getElementById("perf-list").innerHTML = html;
}

// ─── escape helper ────────────────────────────────────────────────
function escHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ─── auto-detect today's date ─────────────────────────────────────
function initDate() {
  const today = todayStr();
  if (today === "2026-03-21" || today === "2026-03-22") {
    state.date = today;
  } else {
    // pre/post festival: default to 3/21
    state.date = "2026-03-21";
  }
}

// ─── live clock refresh (on festival day) ────────────────────────
setInterval(() => {
  if (state.date === "rolling") {
    renderRolling();
    return;
  }
  if (isToday(state.date)) {
    renderNowNext();
    renderMain();
  }
}, 60_000);

// ─── dynamic header height ───────────────────────────────────────
function updateHeaderHeight() {
  const h = document.getElementById("header");
  if (h) {
    const height = h.getBoundingClientRect().height;
    document.documentElement.style.setProperty("--header-h", height + "px");
  }
}

// ─── boot ────────────────────────────────────────────────────────
initDate();
renderAll();
requestAnimationFrame(updateHeaderHeight);

// scroll to first upcoming/playing perf on festival day
window.addEventListener("load", () => {
  if (isToday(state.date)) {
    const firstActive = document.querySelector(".perf-row.playing, .perf-row.upcoming");
    if (firstActive) {
      firstActive.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
});
