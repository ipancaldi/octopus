# HANDOFF — Production Approach v2

**Last touched:** 2026-05-26
**Working dir:** `~/.../Claude_Vault/Projects/Claude - Octopus/Production Approach v2/`
**Read first:** This file, then [`README.md`](README.md). The README is the long-form spec; this is the short orientation for the next agent.

---

## Goal

Build a hybrid Disguise Octopus prototype merging Igor's production-first IA (v1) with Peter Kirkup's lenses + phases + takes + Aid3n + inventories pitch (per the 2026-05-21 Vision & UX Sync). Octopus stays the single source of truth for billing/entitlements; the production platform reads from it.

Current scope: a 16-screen + 3-shared-scripts click-through prototype, Eurovision 2026 as the canonical worked example. Stakeholder-review fidelity, not production code.

---

## Current Progress (where we are right now)

**All major asks from this session landed.** No outstanding bugs reported.

The session expanded v2 from the original 8-screen sketch (2026-05-21) into:

### Pages (16)
- Workspace: `index.html`, `productions-grid.html`, `inventories.html`, `create-production.html`
- Production spine: `production-home.html` ★, `production-home-isometric.html`
- Lenses: `lens-aid3n.html` ★, `lens-wiki.html` ★ (NEW · Confluence-style), `lens-previz.html` (NEW · launch-modal fallback), `lens-mapping-matter.html` (launch-modal fallback), `lens-system-design.html`, `lens-takes.html` ★, `lens-support.html`
- Production admin: `prod-team.html`, `prod-schedule.html`, `prod-settings.html`

### Shared scripts (3)
All in `assets/shared/`. Drop the tags on any new page that needs them.

| Script | Purpose |
|---|---|
| `sidebar.js` | Injects production sidebar into `<aside class="side" data-prod-sidebar>` · per-phase lens groups · active state auto-detect via `PAGE_TO_LENS` map |
| `launch-modal.js` | Desktop-app "will launch" modal · product-aware (`PRODUCTS` map keyed by `mm`, `previz`) · intercepts clicks on `lens-mapping-matter.html` / `lens-previz.html` / `data-launch="mm"` / `data-launch="previz"` · auto-fires on direct URL access |
| `side-toggle.js` | Sidebar collapse chevron (⌘B) · `body.side-collapsed` state in localStorage `octopus-side-collapsed` · **also injects dark scrollbars globally + 56px main-top left padding** to clear the toggle |

### Major UX patterns built
1. **3D lens coverflow** on `production-home.html` — all 14 lenses, glass card treatment, ← / → keyboard nav, centring auto-syncs the lifecycle tab, phase emphasis dims out-of-phase + greyscales locked lenses.
2. **6-phase lifecycle** above the coverflow: Pitch · **Design (NOW)** · Procurement · Rehearsal · Show · Wrap.
3. **Octopus minimised rail** — 14-slot icon column (Brand · Index · gap · Home · Venues · Software · Subscriptions · Imports · **Productions (overlapping pink circles, active)** · Knowledge · Support · divider · MM · Designer · Porta · RenderStream · spacer · Notifications · Subscription · `0.8%` storage). Propagated to all 16 pages.
4. **Confluence-style wiki** — 9 pages, tree on right, merged topbar breadcrumb (`Productions / Eurovision 2026 / Wiki / [parent] / [current]`), default lands on Show overview, Aid3n summary callouts with gradient diamond, live-binding green data chips, in-page link chips that route via launch modal for MM, contribute composer at the bottom.
5. **Desktop-app launch modal** — MM + Previz both intercepted; direct URL access auto-fires.
6. **Collapsible production sidebar** + dark scrollbars + 56px main-top padding for chevron clearance — all delivered via `side-toggle.js`.
7. **Restored v1 depth** for Team / Schedule / Settings (role groups + permissions matrix; 7-month Gantt + show list + milestones; 6 settings panels + danger zone) — but recoloured to v2 dark + Eurovision context + 6-phase lifecycle.

### Iconography (current canonical set)
- **Aid3n** = 4-pointed diamond/star. `assets/products/Aiden_ico.svg` (mono, currentColor) and `Aiden_color_ico.svg` (aqua → magenta → coral gradient). Inlined ~29 places across 17 files.
- **Takes** = clapperboard. `assets/products/take_ico.svg`. Inlined ~8 places — fills with `currentColor` to pick up Takes yellow `--takes: #feff70` on cards/sidebar.
- **Previz** lens = `assets/products/Previz.svg` (the dark rounded-square tile with the violet/aqua/magenta I-and-iris glyph) and `Previz_ico.svg` (mono bare glyph, currentColor — not yet used inline anywhere).
- **Productions** glyph in rail = two overlapping circles (`#FF98F4` 72% behind, `#FF6DF0` 92% front), hand-coded inline SVG.

### Vault docs updated
- `Production Approach v2/README.md` — comprehensive rewrite reflecting the 16-screen state, session-update section, resolved-vs-open questions, visual language, per-file reference table.
- `~/.claude/.../memory/project_production_approach_v2.md` — new memory file with canonical facts (file paths, shared script mounts, lens accent palette, Eurovision context). MEMORY.md indexes it.

---

## What Worked

- **Python scripts via Bash for bulk changes** — much faster and safer than per-file Edits when the same change applied to ~15 pages. Used for:
  - Propagating the Octopus rail HTML + CSS overrides to every page (`/tmp/update_rail.py`)
  - Adding `launch-modal.js` and `side-toggle.js` script tags (`/tmp/add_launch_modal.py`, `/tmp/add_side_toggle.py`)
  - Swapping the old Takes "three-circles" SVG for the clapperboard (`/tmp/update_takes_icon.py`)
  - Swapping the old Aid3n "sun" SVG for the diamond — two-pass (mono + gradient), `/tmp/update_aid3n_icon.py` + `/tmp/update_aid3n_icon_round2.py`
  - Bulk Previs→Previz text rename via `sed -i ''` on the macOS path
- **Shared `<script>`s in `assets/shared/`** — three small self-contained files (sidebar, launch-modal, side-toggle) inject their own CSS into `<head>` so individual pages stay clean. New pages just drop the three script tags.
- **`data-prod-sidebar` attribute as a mount point** — `sidebar.js` only injects when it sees the attribute, so workspace-level pages like `productions-grid.html` opt out cleanly.
- **Click interception over file deletion** — instead of removing `lens-mapping-matter.html` and `lens-previz.html`, the global click handler in `launch-modal.js` walks ancestors looking for either an `href` match or `data-launch="…"` attribute and substitutes the modal. Direct URL access still works via the auto-fire snippet in the fallback pages. Adding a new external app is a one-entry edit to the `PRODUCTS` map.
- **Brand OS accent palette as CSS variables** in every page's `:root` — meant icon swaps could use `fill="currentColor"` and pick up the right accent in context (Takes yellow, Aid3n violet, etc.) without per-context customization.
- **Wiki.zip from the user contained `wiki.jsx`** with the exact Confluence pattern needed — I just translated React → vanilla JS, kept the same data shape, used the supplied screenshots to verify the visual.

---

## What Didn't Work / Backtracks

- **Initial coverflow was for phases, not lenses.** First pass built a 3D phase carousel (Pitch → Wrap). User clarified the carousel was meant for the **lenses**, not the phases. Tore down + rebuilt with lenses as the cards and the phase bar as a thin selector above. (See git blame / iteration history.)
- **Icon swap regexes missed inline-style variants.** First pass of Aid3n sun → diamond regex only matched `<svg viewBox="..." fill="none" stroke="currentColor">…</svg>`. Some FAB instances had an extra `style="width:14px;..."` attribute on the `<svg>` tag and were skipped. Caught in round 2 with a relaxed regex (`stroke="currentColor" style="[^"]*"`). When swapping inline SVGs, **assume there will be attribute variants and either widen the regex or do multiple passes**.
- **First wiki layout was 3-column (tree · content · meta).** User asked for it to be simplified — meta column killed, tree moved from left to right. Lesson: don't introduce a third sidebar in v2; the chrome already has rail + production sidebar.
- **Wiki had two redundant breadcrumbs** initially (app-level in `.main-top` + page-hierarchy in `.wiki__breadcrumbs`). User wanted them merged. Now single merged topbar breadcrumb shows `Productions / Eurovision 2026 / Wiki / [parent…] / [current page]`. Lesson: don't duplicate nav levels; combine.
- **The sidebar collapse chevron overlapped the breadcrumb.** First version had the breadcrumb sitting ~6px from the toggle button. Added `.main-top { padding-left: 56px }` globally via `side-toggle.js` to give the breadcrumb breathing room.
- **`/tmp/update_rail.py` failed silently on `index.html` and `create-production.html`** — those pages don't have an app shell (`index.html` is a flat card grid; `create-production.html` is a modal lightbox). Confirmed they're intentionally rail-less; no follow-up needed.

---

## Architecture decisions to preserve

(If a future agent considers changing these, **flag with the user first** — they were each deliberate.)

1. **Octopus is external.** No subscription/billing UI inside the production platform. Bridge banner on `inventories.html` references it.
2. **Aid3n has a permission boundary.** Side rail on `lens-aid3n.html` enumerates *acts in* / *proposes in* / *reads* / *read-only*.
3. **Mapping Matter + Previz are desktop apps.** They MUST stay as launch-modal-only. Adding pages for them would contradict the model.
4. **Wiki is the canonical record.** Anything that doesn't fit inside a lens (briefs, decisions, runbooks) lives in `lens-wiki.html`.
5. **Phases as a billing meter is hinted at but not built.** Don't build it without checking with Camilla first.
6. **The Octopus minimised rail order is canonical.** Workspace nav up top, product launchers below the divider, footer utilities pinned to bottom. Don't reorder without user input.
7. **Production sidebar lives in `assets/shared/sidebar.js`.** Don't inline production-sidebar HTML in pages — use the `data-prod-sidebar` mount.

---

## Next Steps (open work for the next session)

### From the README's "Still open for v2.1" list
1. **Phases as a billing meter** — spike with Camilla on what the actual Octopus invoice breakdown would look like.
2. **Aid3n diff viewer** — currently `lens-aid3n.html` shows action cards with diff previews; the actual cross-lens acceptance UX needs a dedicated viewer.
3. **Cross-production Aid3n** — does it reach across productions for Inventories-level decisions? Hinted at on `inventories.html`; not built.
4. **Octopus → production sync** — the role-based permissions sync is asserted but not visualised. Needs a mock handshake on a settings-level page.
5. **Mapping Matter / Previz launch handoff payload** — the modal currently just fires; what's the actual handoff (production context, scene state, license check)?
6. **Wiki Aid3n drafts acceptance UI** — clicking "Use as page summary" in the wiki's Aid3n callout has no merge UI yet.

### Easy extensions if asked
- **Add Designer / Porta / RenderStream as desktop-app launch modals** — the `PRODUCTS` map in `assets/shared/launch-modal.js` is ready. One new entry per product: `name`, `icon`, `hrefs: []`, `body`. The intercept handles the rest.
- **Wiki: more page templates** — currently 9 pages; "+ New page" button in the tree column doesn't yet open a template chooser.
- **Sidebar collapsed-state width** — the sidebar fully disappears at width 0 when collapsed. Could be made a 48px icon-only rail instead.
- **Storage indicator at rail footer** — `0.8%` is hardcoded; could become dynamic per production.

### Possibly do this
- Delete `lens-mapping-matter.html` and `lens-previz.html`? Their content is now dead — they only exist as auto-firing modal fallbacks. Could be replaced with tiny redirect-style pages that just include the launch-modal script and call `showLaunchModal('mm' | 'previz')` immediately. Smaller, clearer intent.

---

## Quick orientation for a fresh agent

1. **Open `production-home.html`** to see the coverflow centerpiece.
2. **Open `lens-wiki.html`** to see the Confluence-style wiki + the contribute composer + Aid3n drafts inline.
3. **Click the Mapping Matter card in the coverflow** or **the MM product launcher in the rail** → the launch modal fires. Same for Previz.
4. **Click the chevron at the sidebar's right edge** (or press ⌘B) → sidebar collapses; state persists across pages.
5. **Read [`README.md`](README.md)** for the full spec, IA listing, architecture decisions, visual language.
6. **Read the memory file** at `~/.claude/projects/-Users-igorpancaldi-…/memory/project_production_approach_v2.md` for the short canonical-facts version.

If the user says "make a change to v2," default to reading the README first, then deciding whether the change is a one-file Edit, a Python-script propagation, or a shared-script addition. The three shared scripts are the leverage points for app-wide behavior.
