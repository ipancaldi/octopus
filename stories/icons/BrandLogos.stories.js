// Brand logos served from the project /assets folder via Storybook staticDirs

const logos = [
  { name: 'Disguise Logo (Mark)', src: 'brand/Disguise_Logo_Mark.svg', dark: false },
  { name: 'Disguise Logo (Word)', src: 'brand/Disguise_Logo_Word.svg', dark: false },
  { name: 'Disguise Logo (Landscape)', src: 'brand/Disguise_Logo_Landscape.svg', dark: false },
  { name: 'Disguise Logo (Portrait)', src: 'brand/Disguise_Logo_Portrait.svg', dark: false },
];

const card = ({ name, src, dark }) => `
  <figure style="margin:0;border:1px solid ${dark ? 'var(--do-grey-800)' : 'var(--do-card-stroke)'};border-radius:8px;padding:24px;display:flex;flex-direction:column;align-items:center;gap:12px;background:${dark ? 'var(--do-grey-900)' : 'var(--do-bg)'};">
    <img src="${src}" alt="${name}" style="max-height:80px;max-width:200px;${dark ? 'filter:brightness(0) invert(1);' : ''}" />
    <figcaption style="font-family:var(--do-font-body);font-size:12px;color:${dark ? 'var(--do-grey-400)' : 'var(--do-text-passive)'};">${name}</figcaption>
  </figure>`;

export default {
  title: 'Icons/Brand Logos',
  parameters: { layout: 'fullscreen' },
};

export const Light = () => `
  <div style="padding:32px;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;">
    ${logos.map(card).join('')}
  </div>`;

export const Dark = () => `
  <div style="padding:32px;background:var(--do-grey-900);display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;">
    ${logos.map((l) => card({ ...l, dark: true })).join('')}
  </div>`;
