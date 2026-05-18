# Disguise Octopus — Storybook

A Storybook component library that mirrors the **Disguise Octopus** design system as implemented across the 04 Subscriptions & Licenses surface in Figma.

Built with [Storybook 10 · @storybook/html-vite](https://storybook.js.org) and vanilla HTML + CSS factories — no framework dependency.

## Stack

- Storybook 10 (`@storybook/html-vite`)
- Vite + native ES modules
- Vanilla DOM factory functions per component
- Design tokens as CSS custom properties

## Run locally

```sh
npm install
npm run storybook        # dev server on :6006
npm run build-storybook  # static build
```

## What's inside

**Foundations**
- `Tokens` — Colors (full grey scale, Blush Pink / Aquamarine / Electric Violet / Coral / Golden Fizz palettes), Typography (H1–H6 + Tagline + body sizes + weights Light → Extra Bold), Radius, Shadows, Opacity, Light/Dark/Dark-alt scheme samples

**Icons**
- Brand Logos (Disguise mark + word + landscape + portrait, light + dark variants)
- Material Symbols (inline SVG approximations: home, person, package, key, sync, etc.)
- Product Icons (Designer Pro / Designer Starter / Renderstream / Mapping Matter / X1 at 32px and 68px)

**Primitives**
- Button (primary / secondary / ghost / accent · sm / md / lg)
- Checkbox, Toggle, NewToggle (the canonical Figma toggle)
- Radio (+ group, filled variant)
- Select, Tabs, Tag, TagsStatus (+ mobile)
- TextInput, TextArea
- Tooltip (top / bottom / left / right)
- SliderArrow

**Components**
- **Nav**: PageTitleCrumbs, TopNav (+ mobile), NavLeft (open + collapsed)
- **Filters**: FilterLicense, Categories
- **Menus**: ElipsesMenu
- **Cards**: ProductCard, Banner Cards (Add / Remove × Product / License), SubscriptionCard, CartItem, Member
- **Rows**: Subscription / Product / License row hybrid + Active / Editing / Edited / Disabled / Mobile / Hierarchy
- **Panels**: LicenseDetail, LicenseModuleActive, LicenseActivity, SubscriptionPanel, AssignLicensePanel, LicenseManagementPanel
- **Modals**: PendingModal (review pending changes), AddProductModal

## Tokens

All design values are exposed as CSS custom properties on `:root` in [`stories/tokens.css`](./stories/tokens.css). Components consume them via `var(--do-*)` so theming can be done globally.

## Project structure

```
.storybook/        Storybook config (main.js, preview.js)
stories/
  tokens.css         Token primitives
  Tokens.stories.js  Foundations/Tokens
  primitives/        Button / Checkbox / Toggle / NewToggle / Select / …
  icons/             Brand + Material + Product icon stories
  components/        Cards, Rows, Panels, Modals, Nav, Filters, Menus
assets/            Brand and product SVG/PNG assets (served via staticDirs)
```
