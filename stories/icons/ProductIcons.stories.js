// Disguise product icons at 32px and 68px (assets served from /assets via staticDirs)

const products = [
  { name: 'Designer Pro', slug: 'Designer Pro' },
  { name: 'Designer Starter', slug: 'Designer Starter' },
  { name: 'Renderstream', slug: 'Renderstream' },
  { name: 'Mapping Matter', slug: 'Mapping_Matter' },
  { name: 'X1', slug: 'X1' },
];

const cell = ({ name, slug }, size) => `
  <figure style="margin:0;display:flex;flex-direction:column;align-items:center;gap:8px;padding:16px;border:1px solid var(--do-card-stroke);border-radius:8px;background:var(--do-card-bg);">
    <img src="${encodeURI(slug + '_' + size + '.svg')}" alt="${name} ${size}" style="width:${size}px;height:${size}px;display:block;" />
    <figcaption style="font-family:var(--do-font-body);font-size:11px;color:var(--do-text-passive);text-align:center;">${name}<br><code>${size}px</code></figcaption>
  </figure>`;

export default {
  title: 'Icons/Product Icons',
  parameters: { layout: 'fullscreen' },
};

export const Size32 = () => `
  <div style="padding:32px;display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px;max-width:900px;">
    ${products.map((p) => cell(p, 32)).join('')}
  </div>`;

export const Size68 = () => `
  <div style="padding:32px;display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;max-width:900px;">
    ${products.map((p) => cell(p, 68)).join('')}
  </div>`;

export const BothSizes = () => `
  <div style="padding:32px;display:grid;grid-template-columns:repeat(${products.length},auto);gap:16px;justify-content:start;">
    ${products.map((p) => cell(p, 68)).join('')}
    ${products.map((p) => cell(p, 32)).join('')}
  </div>`;
