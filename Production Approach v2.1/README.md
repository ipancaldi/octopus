# Production Approach — v2

**Updated:** 2026-05-26 (was 2026-05-21)
**Status:** Click-through prototype · 16 screens · 3 shared scripts
**Supersedes:** [Production Approach v1](../Production%20Approach/README.md)
**Start here:** [`index.html`](index.html) — clickable screen catalog
**Centerpiece:** [`production-home.html`](production-home.html)

---

## The hybrid in one sentence

v2 merges the **production-first IA** from v1 with Peter Kirkup's **lenses + phases + takes + Aid3n + inventories** model — keeping a Production as the unit of work, but replacing the 9-tab detail page with a phase-aware lens grid driven by a single source of truth, with Octopus owning billing & entitlements externally.

## What this v2 incorporates from the 2026-05-21 sync

Per [`Production-Based Cloud - Vision & UX Sync — Notes by Gemini`](Production-Based%20Cloud%20-%20Vision%20%26%20UX%20Sync%20%E2%80%93%202026_05_21%2010_40%20BST%20%E2%80%93%20Notes%20by%20Gemini.pdf) and [`Productions — Pitch deck`](Productions%20%E2%80%94%20Pitch%20deck.pdf):

| Concept (from the sync) | Where v2 implements it |
|---|---|
| **Unified platform replaces 5 point tools** | `productions-grid.html` → `production-home.html` is the one entry; lenses replace separate apps |
| **Lenses · role-specific views over one dataset** | 3D coverflow of 14 lenses on `production-home.html` + per-lens canvases (`lens-*.html`) |
| **Phases unlock lenses** (Pitch → Wrap) | 6-phase lifecycle bar on `production-home.html`; locked lenses dim/desaturate; phase selection highlights its lenses in the carousel |
| **Takes · capture decision points** | `lens-takes.html` — "run two, commit one", upstream propagation panel · clapperboard icon `assets/products/take_ico.svg` |
| **Aid3n · AI collaborator, not chatbot** | `lens-aid3n.html` — proactive action cards with diff previews · gradient diamond icon `assets/products/Aiden_color_ico.svg` · FAB on every page |
| **Wiki · single source of truth for context** | `lens-wiki.html` — full Confluence-style implementation (tree, page hierarchy, Aid3n drafts, live-binding data chips, link chips, contribute composer) |
| **Mapping Matter + Previz are desktop apps** | No internal page for either — any click triggers `assets/shared/launch-modal.js` showing "Mapping Matter 2 will launch" or "Previz will launch" |
| **Inventory · interact with your assets, not a global library** | `inventories.html` — workspace-level; show-link chips per row |
| **Octopus = single source of truth for entitlements** | Bridge banner on `inventories.html`; side-nav callout; no licence UI inside production platform |
| **Asset-centric metadata** (mesh has scale, materials) | "Driven by" panel on `lens-system-design.html` |

## What this v2 keeps from v1

- **Production as the unit of work** — replaces Spaces
- **Workspace owns the pool; production draws from it for the duration of the show**
- **Light visual debt** — same dark theme, same tokens
- **Production lifecycle** as the spine — but now lifecycle directly drives the visible lens set, not just a Schedule tab
- **Rich Team / Schedule / Settings pages** — restored to v1's depth (member roles + permissions matrix · 7-month Gantt + show list + milestones · 6-section settings with status changer + danger zone) but recoloured to v2 dark + Eurovision context + 6-phase lifecycle

---

## v2 IA · 16 screens + 3 shared scripts

```
Workspace (entry surfaces)
├── index.html                       Entry catalog · v2 sitemap with diff vs v1
├── productions-grid.html            All productions · v1-style left workspace nav
├── inventories.html                 Cross-show devices · people · Octopus billing bridge
└── create-production.html           4-step lightbox wizard

Production spine (Eurovision 2026)
├── production-home.html ★           3D coverflow over 14 lenses · 6-phase lifecycle bar
└── production-home-isometric.html   Alternative iso "lens stack" view

Lenses (focused canvases — Brand OS accent per card)
├── lens-aid3n.html ★                AI collaborator · permission boundary · action cards w/ diff
├── lens-wiki.html ★ NEW             Confluence-style 2-col · tree on right · merged breadcrumb · contribute composer
├── lens-previz.html                 Stub — every Previz link is intercepted by the launch modal (desktop pre-vis app)
├── lens-mapping-matter.html         Stub — every MM link is intercepted by the launch modal (desktop app)
├── lens-system-design.html          Schematic · devices · route table · IP plan
├── lens-takes.html ★                Decision branches · upstream propagation panel
└── lens-support.html                Production-scoped tickets · Aid3n diag bundle + suggestions

Production admin
├── prod-team.html                   4 role groups · 9 members · permissions matrix
├── prod-schedule.html               6-phase lifecycle · 7-month Gantt · 5-broadcast show list · milestones
└── prod-settings.html               6 sections incl. lifecycle changer + danger zone

Shared scripts (mounted on every page that needs them)
├── assets/shared/sidebar.js         Production sidebar (per-phase lens groups, active state auto-detect)
├── assets/shared/launch-modal.js    Mapping Matter "will launch" modal — intercepts all MM clicks app-wide
└── assets/shared/side-toggle.js     Sidebar collapse chevron + ⌘B shortcut + dark scrollbars (globally)
```

★ = centerpieces (lenses that materially change the mental model)

---

## What's killed from v1

| v1 tab | v1 file | v2 status | Replacement |
|---|---|---|---|
| 06-2-1 Overview | `production-overview.html` | **Replaced** | `production-home.html` — coverflow + lifecycle |
| 06-2-2 Files | `production-detail.html` | **Killed** | Designer + MM surface as lenses; cross-refs travel with production |
| 06-2-3 Media | `production-media.html` | Deferred | Folded into MM lens (which itself is now a launch modal) |
| 06-2-4 Templates applied | `production-templates.html` | **Killed** | Phases dictate template application |
| 06-2-5 Team | `production-team.html` | **Restored** | `prod-team.html` — v1 content, v2 dark + Eurovision context |
| 06-2-6 Hardware | `production-hardware.html` | **Killed** | `inventories.html` (workspace) + Octopus (entitlements) |
| 06-2-7 Schedule | `production-schedule.html` | **Restored** | `prod-schedule.html` — Gantt + show list + milestones |
| 06-2-8 Notes & activity | `production-notes.html` | Folded | Activity feed lives on `production-home.html` |
| 06-2-9 Settings | `production-settings.html` | **Restored** | `prod-settings.html` — 6 panels incl. danger zone |
| 06-3 Templates Library | `templates-library.html` | Deferred | Workspace-level, unchanged conceptually |
| 06-4 Archived Productions | `archived-productions.html` | Deferred | Unchanged |

---

## Architecture decisions baked into v2

1. **Octopus is external** — every page that touches billing/licences (`inventories.html`, the production-home hero) defers to it. No subscription management lives inside the production platform.
2. **Aid3n has a permission boundary** — `lens-aid3n.html` left rail: *acts in* MM + System Design, *proposes in* Takes, *reads/comments in* Wiki, *read-only in* Octopus billing. Every action card has Reject / Apply / Open path.
3. **Takes capture exploration without forking** — the "what ripples on commit" panel on `lens-takes.html` makes the single-source-of-truth promise concrete.
4. **Phases are the lifecycle AND the billing meter** — phase rail on `production-home.html` carries "billing follows phase" as a hint.
5. **Asset-centric model** — projector rows in `lens-system-design.html` carry IP, VFC, route status as intrinsic metadata.
6. **Mapping Matter and Previz are desktop apps** — anywhere you click an MM or Previz card/launcher/chip, the launch modal fires. The internal `lens-mapping-matter.html` and `lens-previz.html` survive only as auto-firing fallbacks for direct URL access. The modal is product-aware (configured in `assets/shared/launch-modal.js`); adding a new external app is one entry in the `PRODUCTS` map.
7. **Wiki is the canonical record** — anything that doesn't fit inside a lens (briefs, decisions, runbooks, crew briefings) lives in `lens-wiki.html`. Live-binding data chips bind read-only to production data; Aid3n drafts inline; comment composer at the bottom of every page.

---

## Session update · 2026-05-26 (what changed since the May 21 snapshot)

### Production home — total rebuild (`production-home.html`)
- Replaced the static lens grid with a **3D coverflow** showing **all 14 lenses** in canonical phase order.
- **Glass card treatment**: heavily transparent (`rgba(255,255,255,0.025)`), `backdrop-filter: blur(24px) saturate(180%)`, top-edge specular highlight, bottom-edge shadow, decorative outer aperture-ring suggesting a camera-lens iris. Each card uses its lens accent for the radial bloom + outer ring.
- Centred card pops forward; side cards rotate ~55° on Y, recede in Z; opacity falls off past 2 cards out.
- **Phase emphasis**: the lifecycle bar (above the coverflow) drives which lenses are highlighted. In-phase lenses stay full brightness; out-of-phase lenses desaturate (`filter: saturate(0.18) brightness(0.78)`). Locked lenses (Procurement→Wrap) are always greyscale.
- Coverflow nav: prev/next arrows, clickable progress ticks, pagination (`04 / 14`), keyboard ← / → walk through every lens. Centring a lens auto-syncs the phase tab.
- **Card back face**: removed bullet list, replaced with a description paragraph and a small primary "Open lens →" button. Locked cards flip too — back face shows the same description plus a dashed "Unlocks at [phase]" note.

### Productions grid (`productions-grid.html`)
- Restored v1's workspace-level secondary nav (All Productions · Shared with me · By Status group with status dots · Templates Library · Archived Productions · Deleted).
- Replaced the auto-injected production sidebar with the v1 workspace nav since this page is workspace-level, not production-context.

### Team / Schedule / Settings — restored from v1 to v2
- `prod-team.html`: toolbar (search + role filter + invite) · amber pending-invites strip · 4 role groups (Owner / Designer / Operator / Viewer) with 9 Eurovision members across them · 11-row permissions matrix.
- `prod-schedule.html`: 6-phase lifecycle chip bar with NOW flag on Design · Day/Week/Month/Quarter segment + +Milestone primary · 7-month Gantt (Nov 2025 → May 2026) with phase bars in Brand OS lens accents · today marker on Apr 29 · show-day dots · milestone diamonds with hover tooltips · 5-row team-assignment block · 5-broadcast schedule + milestones list at the bottom.
- `prod-settings.html`: General · Lifecycle & status (6-phase changer) · Permissions & sharing · Notifications · Backups & export · Danger zone (duplicate / transfer / archive / delete).
- All three carry a horizontal **tabs row** under the prod header — Overview · Team · Schedule · Settings — for cross-navigation.

### Octopus minimised nav (rail) — across every page
14-slot icon rail in `--grey-1`:
- Brand · Index (sidebar toggle w/ chevron)
- gap
- Home · Venues · Software (cube) · Subscriptions · Imports
- **Productions (two overlapping pink/magenta circles) — ACTIVE on every production-context page** · Knowledge (book + A) · Support (?)
- divider
- **Product launchers** — Mapping Matter · Designer · Porta · RenderStream (using `assets/products/*.svg`, rendered as 36×36 rounded chips with tiny hover scale)
- spacer (pushes to bottom)
- Notifications · My subscription · `0.8%` storage

### Icon swaps
- **Takes** — old "three circles + branching paths" replaced with a **clapperboard** sourced from `assets/products/take_ico.svg`, inlined with `fill="currentColor"` so it picks up the Takes yellow `#feff70` on lens cards, sidebar, anywhere it appears.
- **Aid3n** — old "sun + rays" replaced with a **4-pointed diamond/star** sourced from `assets/products/Aiden_ico.svg` (mono `currentColor` for inline contexts) and `assets/products/Aiden_color_ico.svg` (aqua → magenta → coral gradient for the wiki Aid3n callout's hero treatment). 29 replacements across 17 files.

### Wiki lens (`lens-wiki.html`) — full implementation
Confluence-style:
- 2-column layout: **content (left, flex)** + **page tree (right, 280px)**. Earlier 3-column layout (with a meta panel) was simplified down.
- **Page hierarchy of 9 pages** with Brand OS line icons (no emojis): `document`, `cube`, `bolt`, `lan`, `groups`, `broadcast`, `play`, `branch`, `projector`.
- **Default lands on Show overview** when the wiki is first opened.
- **Page chrome** — large icon badge in wiki violet, title, byline (`avatar · author · edited · word count · read time · ● N live bindings · ● N AI suggestions`). No cover banner.
- **Aid3n summary callout** on the Stage page — purple-violet gradient panel with the diamond glyph, AI · 4s ago badge, italic quoted draft, **Use as page summary / Dismiss / Regenerate** actions.
- **Live-binding data chips** (`● 12 m`, `● 142.4 m²`) — green-tinted pills that mark data bound to the production database (CAD, Mapping Matter, Inventory, schedule). Read-only, hoverable for source.
- **Link chips** to other lenses (System Design, Takes, Mapping Matter) — clicking the MM chip fires the launch modal; the others navigate to their lens pages.
- **Callouts** (info / warn / success) · **tables** · **at-a-glance panels** · **page-link tiles**.
- **Search lives in the topbar** (`⌘K` to focus), no longer in the tree column.
- **Single merged topbar breadcrumb** — `Productions / Eurovision 2026 / Wiki / [parent…] / [current page]`. The earlier in-page breadcrumb strip is gone. All segments clickable except the current page.
- **Contribute composer at the bottom of every page** — auto-growing textarea, "Posting as [user]" line, tool row (Attach · Mention · Propose Take · Aid3n draft · Comment).

### Desktop-app launch modal (`assets/shared/launch-modal.js`)
- Product-aware: intercepts links to `lens-mapping-matter.html` AND `lens-previz.html`, plus any element carrying `data-launch="mm"` or `data-launch="previz"`.
- Renders the matching product chip + name + body copy:
  - **Mapping Matter 2 will launch** — "...hand off your production context — projector layout, surfaces, brand pack — and open the scene on your machine."
  - **Previz will launch** — "...hand off your production context — stage, cameras, scene layout, content cues — and open the simulation on your machine."
- Both pages auto-fire the modal on direct URL access, so the experience is identical whether you click in from the rail / coverflow / sidebar or hit the URL.
- Esc-to-dismiss, backdrop blur, Cancel / Launch app → buttons.
- Public JS API: `window.showLaunchModal('mm' | 'previz')`, plus aliases `showMappingMatterModal()` and `showPrevizModal()`.

### Sidebar collapse + global UX shims (`assets/shared/side-toggle.js`)
- Single floating chevron at the right edge of the production sidebar; click → side column slides to `0px`, chevron flips 180°. State persists in `localStorage` (`octopus-side-collapsed`).
- Keyboard shortcut: **⌘ / Ctrl + B**.
- Also injects globally: **dark scrollbars** (`#344054` thumb on transparent track) for both Webkit + Firefox, and a `padding-left: 56px` on `.main-top` so the breadcrumb clears the chevron in both expanded and collapsed states.

---

## Happy path · Eurovision 2026 designing the projection

1. Land on **Productions** ([`productions-grid.html`](productions-grid.html)) — workspace-level
2. Open **Eurovision 2026** → land on the 3D lens coverflow ([`production-home.html`](production-home.html)) — Design phase highlighted
3. Walk the coverflow with ← / →; phase tabs auto-sync
4. Centre **Mapping Matter** → click "Open lens" → **launch modal** fires ("Mapping Matter 2 will launch")
5. After adding 4 projectors on truss C in the desktop app, **Aid3n** flags the missing routes on the FAB ([`lens-aid3n.html`](lens-aid3n.html))
6. Compare projector vendors in **Takes** ([`lens-takes.html`](lens-takes.html)) — clapperboard branches
7. Commit — ripple into **System Design** ([`lens-system-design.html`](lens-system-design.html))
8. Update **Wiki** ([`lens-wiki.html`](lens-wiki.html)) → the "dec-projectors" page auto-generates from the committed Take
9. When the VX 4+ freezes during rehearsal, open **Support** ([`lens-support.html`](lens-support.html)) — Aid3n has already attached the diag bundle

---

## Resolved since 2026-05-21

| 2026-05-21 open question | 2026-05-26 status |
|---|---|
| **People as a lens** | Not a lens — restored as `prod-team.html` admin page, accessed via tabs row. Reconsider in v2.1. |
| **Schedule as a lens** | Same — restored as `prod-schedule.html` with full Gantt + show list. |
| **Wiki** | **Done** — `lens-wiki.html` is fully implemented. |
| **Aid3n permission UX** | Still hinted at on `lens-aid3n.html` — not yet a dedicated diff viewer. |
| **Cross-production Aid3n** | Still hinted at on `inventories.html` — unchanged. |
| **Octopus → production sync** | Still asserted, not visualised. |

## Still open for v2.1

1. **Phases as a billing meter** — spike with Camilla.
2. **Aid3n diff viewer** — dedicated viewer for cross-lens action acceptance.
3. **Cross-production Aid3n** — does it reach across productions for Inventories-level decisions?
4. **Octopus → production sync** — mock the handshake on a settings-level page.
5. **Mapping Matter handoff** — the launch modal currently just fires; what does the actual handoff payload look like (production context, scene state, license check)?
6. **Wiki Aid3n drafts** — accepting an Aid3n draft (the "Use as page summary" button) currently has no UI for the merge. Needs a diff-style review.

---

## Visual language

Same dark base as v1; lens accents from the Disguise Brand OS palette:

- **Pink accent** `#FF98F4` — primary actions, active phase indicator
- **Aid3n violet** `#a74cee` / `--aid3n-bg rgba(167,76,238,0.18)` — Aid3n's voice across every lens
- **Mapping Matter pink** `#ff98f4` — projection study
- **System Design aqua** `#6bffdc` — routing, IP
- **Takes yellow** `#feff70` — decision branches
- **Wiki violet pale** `#e6ccfa` — knowledge base
- **Support coral** `#ff8559` — incidents
- **Designer coral-light** `#ffa98a` / **Porta aqua-light** `#97ffe6` — rehearsal-phase apps
- **Canvas** `#0A1020` page bg + `#344054` 1px dot pattern at 40px grid
- **Sidebar** `#131D2E` (between rail and canvas)
- **Rail** `#1D2939`

Inter for UI, JetBrains Mono for IP addresses, VFC labels, scopes, phase timestamps, file paths.

---

## File reference

| File | Purpose |
|---|---|
| `index.html` | Catalog of every page in v2 with diff annotations vs v1 |
| `productions-grid.html` | Workspace-level all-productions view |
| `inventories.html` | Cross-show hardware + people + Octopus billing bridge |
| `create-production.html` | 4-step wizard (lightbox style) |
| `production-home.html` | Production centerpiece · 3D lens coverflow |
| `production-home-isometric.html` | Iso lens-stack variant |
| `lens-aid3n.html` | AI collaborator canvas |
| `lens-mapping-matter.html` | Launch-modal fallback for the MM desktop app (auto-fires modal on load) |
| `lens-system-design.html` | Auto-laid-out signal graph |
| `lens-takes.html` | Decision branches |
| `lens-support.html` | Production-scoped support tickets |
| `lens-wiki.html` | **NEW** · Confluence-style wiki (tree · merged breadcrumb · Aid3n drafts · live bindings · contribute composer) |
| `lens-previz.html` | Launch-modal fallback for the Previz desktop app (auto-fires modal on load) |
| `prod-team.html` | Role groups + permissions matrix |
| `prod-schedule.html` | 6-phase Gantt + show list + milestones |
| `prod-settings.html` | 6 panels incl. danger zone |
| `assets/shared/sidebar.js` | Production sidebar injection (per-phase lens groups) |
| `assets/shared/launch-modal.js` | Mapping Matter launch modal — global click interceptor |
| `assets/shared/side-toggle.js` | Sidebar collapse + dark scrollbars + main-top padding |
| `assets/products/*.svg` | Product chips · `take_ico.svg` (Takes clapperboard) · `Aiden_ico.svg` + `Aiden_color_ico.svg` (Aid3n diamond) |
