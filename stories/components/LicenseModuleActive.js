import './domain.css';

export const createLicenseModuleActive = ({
  product = 'Designer Pro',
  meta = 'License LLC-f7ea8112 · r31+',
} = {}) => {
  const root = document.createElement('div');
  root.className = 'do-module-active';
  root.innerHTML = `
    <span class="do-module-active__indicator" aria-hidden="true"></span>
    <div style="display:flex;flex-direction:column;gap:2px;">
      <span class="do-module-active__name">${product}</span>
      <span class="do-module-active__meta">${meta}</span>
    </div>`;
  return root;
};
