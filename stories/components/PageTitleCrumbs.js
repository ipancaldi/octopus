import './domain.css';

export const createPageTitleCrumbs = ({
  crumbs = ['Subscriptions'],
  current = 'My Subscriptions',
} = {}) => {
  const root = document.createElement('div');
  root.className = 'do-pagetitle';
  root.innerHTML = `
    <h1>${crumbs.map((c) => `<span class="do-crumb">${c} /</span>`).join('')} ${current}</h1>
  `;
  return root;
};
