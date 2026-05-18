import { icons } from '../primitives/icons.js';

const cell = (name) => `
  <figure style="margin:0;display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px;border:1px solid var(--do-card-stroke);border-radius:6px;background:var(--do-bg);">
    <span style="width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;color:var(--do-text);">${icons[name]}</span>
    <figcaption style="font-family:var(--do-font-body);font-size:10px;color:var(--do-text-passive);text-align:center;">${name}</figcaption>
  </figure>`;

export default {
  title: 'Icons/Material Symbols',
  parameters: { layout: 'fullscreen' },
};

export const All = () => `
  <div style="padding:32px;">
    <p style="font-family:var(--do-font-body);color:var(--do-text-passive);font-size:13px;margin:0 0 16px;max-width:640px;">
      Inline-SVG approximations of the Material Symbols glyphs referenced in the Figma file (sync, autorenew, calendar_today, delete, visibility, vpn_key, etc.).
      They use <code>currentColor</code> so they inherit the parent text color.
    </p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px;max-width:1000px;">
      ${Object.keys(icons).map(cell).join('')}
    </div>
  </div>`;

export const Colored = () => {
  const colors = ['var(--do-text)', 'var(--do-text-passive)', 'var(--do-accent-pink)', 'var(--do-grey-900)'];
  return `
    <div style="padding:32px;display:flex;flex-direction:column;gap:24px;">
      ${colors.map((c) => `
        <div style="color:${c};display:flex;gap:10px;flex-wrap:wrap;align-items:center;">
          <strong style="font-family:var(--do-font-body);min-width:160px;font-size:12px;">${c}</strong>
          ${Object.keys(icons).slice(0, 12).map((n) => `<span style="width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;">${icons[n]}</span>`).join('')}
        </div>`).join('')}
    </div>`;
};
