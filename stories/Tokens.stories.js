const swatch = (name, varName, value) => `
  <div style="display:flex;align-items:center;gap:12px;padding:8px 0;">
    <div style="width:48px;height:48px;border-radius:8px;border:1px solid #e4e7ec;background:var(${varName});flex-shrink:0;"></div>
    <div style="min-width:0;">
      <div style="font-weight:500;color:var(--do-text-strong);font-size:13px;">${name}</div>
      <code style="font-size:11px;color:var(--do-text-passive);">${varName}</code>
      ${value ? `<div style="font-size:11px;color:var(--do-text-deactivated);">${value}</div>` : ''}
    </div>
  </div>`;

const section = (title, items) => `
  <section style="margin-bottom:32px;">
    <h3 style="font-family:var(--do-font-display);font-size:22px;margin:0 0 12px;color:var(--do-text-strong);">${title}</h3>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:8px 24px;">${items}</div>
  </section>`;

export default {
  title: 'Foundations/Tokens',
  parameters: { layout: 'fullscreen' },
};

/* ---------------- Colors ---------------- */
export const Colors = () => `
  <div style="padding:32px;max-width:1200px;">
    ${section('Surfaces', [
      ['Bg', '--do-bg'],
      ['Card Bg', '--do-card-bg'],
      ['Header Bg', '--do-header-bg'],
      ['Product Row Bg', '--do-product-row-bg'],
      ['Subscription Row Bg', '--do-subscription-row-bg'],
    ].map(([n, v]) => swatch(n, v)).join(''))}

    ${section('Text', [
      ['Text', '--do-text'],
      ['Text Passive', '--do-text-passive'],
      ['Text Deactivated', '--do-text-deactivated'],
      ['Text Strong', '--do-text-strong'],
    ].map(([n, v]) => swatch(n, v)).join(''))}

    ${section('Grey scale', [
      ['Grey 25',  '--do-grey-25',  '#fcfcfd'],
      ['Grey 50',  '--do-grey-50',  '#f9fafb'],
      ['Grey 100', '--do-grey-100', '#f2f4f7'],
      ['Grey 200', '--do-grey-200', '#eaecf0'],
      ['Grey 300', '--do-grey-300', '#d0d5dd'],
      ['Grey 400', '--do-grey-400', '#98a2b3'],
      ['Grey 500', '--do-grey-500', '#667085'],
      ['Grey 600', '--do-grey-600', '#475467'],
      ['Grey 700', '--do-grey-700', '#344054'],
      ['Grey 800', '--do-grey-800', '#1d2939'],
      ['Grey 900', '--do-grey-900', '#101828'],
      ['Black',    '--do-black',    '#000000'],
    ].map(([n, v, val]) => swatch(n, v, val)).join(''))}

    ${section('Blush Pink', [
      ['Lightest', '--do-pink-lightest', '#fff0fd'],
      ['Lighter',  '--do-pink-lighter',  '#ffe1fc'],
      ['Light',    '--do-pink-light',    '#ff98f4'],
      ['Base',     '--do-pink',          '#ff6df0'],
      ['Dark',     '--do-pink-dark',     '#cc57c0'],
      ['Darker',   '--do-pink-darker',   '#662b60'],
      ['Darkest',  '--do-pink-darkest',  '#4c2048'],
    ].map(([n, v, val]) => swatch(n, v, val)).join(''))}

    ${section('Aquamarine', [
      ['Lightest', '--do-aqua-lightest', '#f0fffb'],
      ['Lighter',  '--do-aqua-lighter',  '#e1fff8'],
      ['Light',    '--do-aqua-light',    '#97ffe6'],
      ['Base',     '--do-aqua',          '#6bffdc'],
      ['Dark',     '--do-aqua-dark',     '#55ccb0'],
      ['Darker',   '--do-aqua-darker',   '#2a6658'],
      ['Darkest',  '--do-aqua-darkest',  '#204c42'],
    ].map(([n, v, val]) => swatch(n, v, val)).join(''))}

    ${section('Electric Violet', [
      ['Lightest', '--do-violet-lightest', '#f2e5fc'],
      ['Pale',     '--do-violet-pale',     '#e6ccfa'],
      ['Light',    '--do-violet-light',    '#a74cee'],
      ['Base',     '--do-violet',          '#8200e8'],
      ['Dark',     '--do-violet-dark',     '#6800b9'],
      ['Darker',   '--do-violet-darker',   '#34005c'],
      ['Darkest',  '--do-violet-darkest',  '#270045'],
    ].map(([n, v, val]) => swatch(n, v, val)).join(''))}

    ${section('Golden Fizz', [
      ['Lightest', '--do-fizz-lightest', '#feffea'],
      ['Lighter',  '--do-fizz-lighter',  '#feffd6'],
      ['Light',    '--do-fizz-light',    '#feff70'],
      ['Base',     '--do-fizz',          '#feff34'],
      ['Dark',     '--do-fizz-dark',     '#cbcc29'],
      ['Darker',   '--do-fizz-darker',   '#656614'],
      ['Darkest',  '--do-fizz-darkest',  '#4c4c0f'],
    ].map(([n, v, val]) => swatch(n, v, val)).join(''))}

    ${section('Coral', [
      ['Lightest', '--do-coral-lightest', '#fff2ee'],
      ['Lighter',  '--do-coral-lighter',  '#ffe6dd'],
      ['Light',    '--do-coral-light',    '#ffa98a'],
      ['Base',     '--do-coral',          '#ff8559'],
      ['Dark',     '--do-coral-dark',     '#cc6a47'],
      ['Darker',   '--do-coral-darker',   '#663523'],
      ['Darkest',  '--do-coral-darkest',  '#4c271a'],
    ].map(([n, v, val]) => swatch(n, v, val)).join(''))}
  </div>`;

/* ---------------- Typography ---------------- */
const headingRow = (label, varName, size, lh) => `
  <div style="display:flex;align-items:baseline;gap:24px;padding:14px 0;border-bottom:1px solid var(--do-card-stroke);">
    <code style="min-width:120px;color:var(--do-text-passive);font-size:11px;">${varName}</code>
    <div style="font-family:var(--do-font-display);font-weight:400;color:var(--do-text-strong);font-size:${size}px;line-height:${lh};letter-spacing:-1px;">${label}</div>
    <code style="margin-left:auto;color:var(--do-text-deactivated);font-size:11px;">${size}px / lh ${lh}</code>
  </div>`;

const bodyRow = (label, weightName, weight, size) => `
  <div style="display:flex;align-items:baseline;gap:24px;padding:10px 0;border-bottom:1px solid var(--do-card-stroke);">
    <code style="min-width:120px;color:var(--do-text-passive);font-size:11px;">${weightName}</code>
    <div style="font-family:var(--do-font-body);font-weight:${weight};font-size:${size}px;line-height:1.5;color:var(--do-text);">${label}</div>
    <code style="margin-left:auto;color:var(--do-text-deactivated);font-size:11px;">${size}px / ${weight}</code>
  </div>`;

export const Typography = () => `
  <div style="padding:32px;max-width:1000px;">
    <h3 style="font-family:var(--do-font-display);font-size:22px;margin:0 0 12px;color:var(--do-text-strong);">Headings (Aeonik)</h3>
    ${headingRow('Heading 1 / Aeonik', 'Heading/H1', 72, 1.2)}
    ${headingRow('Heading 2 / Aeonik', 'Heading/H2', 52, 1.2)}
    ${headingRow('Heading 3 / Aeonik', 'Heading/H3', 44, 1.2)}
    ${headingRow('Heading 4 / Aeonik', 'Heading/H4', 36, 1.3)}
    ${headingRow('Heading 5 / Aeonik', 'Heading/H5', 28, 1.2)}
    ${headingRow('Heading 6 / Aeonik', 'Heading/H6', 22, 1.4)}
    ${headingRow('Tagline / Aeonik',    'Heading/Tagline', 16, 1.5)}

    <h3 style="font-family:var(--do-font-display);font-size:22px;margin:40px 0 12px;color:var(--do-text-strong);">Body (Inter) — sizes</h3>
    ${bodyRow('Text Large — pack my box with five dozen liquor jugs',   'Text/Large',   400, 22)}
    ${bodyRow('Text Medium — pack my box with five dozen liquor jugs',  'Text/Medium',  400, 18)}
    ${bodyRow('Text Regular — pack my box with five dozen liquor jugs', 'Text/Regular', 400, 16)}
    ${bodyRow('Text Small — pack my box with five dozen liquor jugs',   'Text/Small',   400, 14)}
    ${bodyRow('Text Tiny — pack my box with five dozen liquor jugs',    'Text/Tiny',    400, 12)}
    ${bodyRow('Text Super Tiny — pack my box with five dozen liquor jugs', 'Text/Super Tiny', 400, 10)}

    <h3 style="font-family:var(--do-font-display);font-size:22px;margin:40px 0 12px;color:var(--do-text-strong);">Body weights @ 16px</h3>
    ${bodyRow('Light — the quick brown fox jumps over the lazy dog',     'Light',     300, 16)}
    ${bodyRow('Regular — the quick brown fox jumps over the lazy dog',   'Regular',   400, 16)}
    ${bodyRow('Medium — the quick brown fox jumps over the lazy dog',    'Medium',    500, 16)}
    ${bodyRow('Semi Bold — the quick brown fox jumps over the lazy dog', 'Semi Bold', 600, 16)}
    ${bodyRow('Bold — the quick brown fox jumps over the lazy dog',      'Bold',      700, 16)}
    ${bodyRow('Extra Bold — the quick brown fox jumps over the lazy dog','Extra Bold',800, 16)}
  </div>`;

/* ---------------- Radius ---------------- */
const radiusCell = (name, varName, px) => `
  <div style="display:flex;flex-direction:column;align-items:flex-start;gap:8px;">
    <div style="width:120px;height:80px;background:var(--do-card-bg);border:1px solid var(--do-card-stroke);border-radius:var(${varName});"></div>
    <div>
      <div style="font-weight:500;color:var(--do-text-strong);font-size:13px;">${name}</div>
      <code style="font-size:11px;color:var(--do-text-passive);">${varName} · ${px}</code>
    </div>
  </div>`;

export const Radius = () => `
  <div style="padding:32px;display:flex;gap:24px;flex-wrap:wrap;">
    ${radiusCell('Small', '--do-radius-sm', '4px')}
    ${radiusCell('Medium', '--do-radius-md', '8px')}
    ${radiusCell('Large', '--do-radius-lg', '12px')}
    ${radiusCell('Pill', '--do-radius-pill', '999px')}
  </div>`;

/* ---------------- Shadows ---------------- */
const shadowCell = (name, varName) => `
  <div style="display:flex;flex-direction:column;align-items:flex-start;gap:8px;">
    <div style="width:160px;height:120px;background:var(--do-bg);border-radius:12px;box-shadow:var(${varName});"></div>
    <div>
      <div style="font-weight:500;color:var(--do-text-strong);font-size:13px;">${name}</div>
      <code style="font-size:11px;color:var(--do-text-passive);">${varName}</code>
    </div>
  </div>`;

export const Shadows = () => `
  <div style="padding:48px;background:var(--do-card-bg);display:flex;gap:32px;flex-wrap:wrap;">
    ${shadowCell('xxsmall', '--do-shadow-xxsmall')}
    ${shadowCell('xsmall',  '--do-shadow-xsmall')}
    ${shadowCell('small',   '--do-shadow-small')}
    ${shadowCell('medium',  '--do-shadow-medium')}
    ${shadowCell('large',   '--do-shadow-large')}
    ${shadowCell('xlarge',  '--do-shadow-xlarge')}
    ${shadowCell('xxlarge', '--do-shadow-xxlarge')}
  </div>`;

/* ---------------- Opacity ---------------- */
export const Opacity = () => `
  <div style="padding:32px;display:flex;gap:24px;flex-wrap:wrap;">
    ${[
      ['White 60', '--do-opacity-white-60', 'rgba(255,255,255,0.6)', '#1d2939'],
      ['White 20', '--do-opacity-white-20', 'rgba(255,255,255,0.2)', '#1d2939'],
      ['Black 60', '--do-opacity-black-60', 'rgba(13,7,4,0.6)',      '#fcfcfd'],
    ].map(([n, v, val, bg]) => `
      <div style="display:flex;flex-direction:column;gap:8px;">
        <div style="width:160px;height:96px;background:${bg};border-radius:8px;position:relative;border:1px solid var(--do-card-stroke);">
          <div style="position:absolute;inset:12px;border-radius:6px;background:var(${v});"></div>
        </div>
        <div>
          <div style="font-weight:500;color:var(--do-text-strong);font-size:13px;">${n}</div>
          <code style="font-size:11px;color:var(--do-text-passive);">${v}</code>
          <div style="font-size:11px;color:var(--do-text-deactivated);">${val}</div>
        </div>
      </div>`).join('')}
  </div>`;

/* ---------------- Theme schemes ---------------- */
const schemeCard = (label, { bg, fg, text, border, accent }) => `
  <div style="background:${bg};color:${text};border:1px solid ${border};border-radius:12px;padding:24px;min-width:280px;font-family:var(--do-font-body);">
    <p style="font-family:var(--do-font-display);font-size:24px;margin:0 0 8px;color:${text};">${label}</p>
    <p style="margin:0 0 16px;color:${text};opacity:0.8;font-size:14px;">Body text on this scheme.</p>
    <div style="background:${fg};padding:12px;border-radius:8px;border:1px solid ${border};">
      <span style="font-size:12px;color:${text};">Foreground surface</span>
    </div>
    <button style="margin-top:16px;border:0;padding:8px 16px;border-radius:8px;background:${accent};color:#101828;font-weight:500;font-size:12px;">Accent CTA</button>
  </div>`;

export const Schemes = () => `
  <div style="padding:32px;display:flex;gap:16px;flex-wrap:wrap;background:#7f7f7f;">
    ${schemeCard('Light Scheme', {
      bg: 'var(--do-scheme-light-bg)',
      fg: 'var(--do-scheme-light-fg)',
      text: 'var(--do-scheme-light-text)',
      border: 'var(--do-scheme-light-border)',
      accent: 'var(--do-scheme-light-accent)',
    })}
    ${schemeCard('Dark Scheme', {
      bg: 'var(--do-scheme-dark-bg)',
      fg: 'var(--do-scheme-dark-fg)',
      text: 'var(--do-scheme-dark-text)',
      border: 'var(--do-scheme-dark-border)',
      accent: 'var(--do-scheme-dark-accent)',
    })}
    ${schemeCard('Dark Scheme (alt)', {
      bg: 'var(--do-scheme-dark-alt-bg)',
      fg: 'var(--do-scheme-dark-alt-fg)',
      text: 'var(--do-scheme-dark-alt-text)',
      border: 'var(--do-scheme-dark-alt-border)',
      accent: 'var(--do-scheme-dark-alt-accent)',
    })}
  </div>`;
