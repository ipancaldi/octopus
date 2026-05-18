import './domain.css';

const COLORS = ['#ffa98a', '#ff6df0', '#6bffdc', '#8200e8', '#ffb800', '#3b82f6'];

const initials = (name) => name
  .split(/\s+/)
  .map((p) => p[0])
  .slice(0, 2)
  .join('')
  .toUpperCase();

const hash = (s) => s.split('').reduce((a, c) => a + c.charCodeAt(0), 0);

export const createMember = ({
  name = 'Arun Aryal',
  email = 'arun.aryal@disguise.one',
  role,
  avatarColor,
  variant = 'inline', // 'inline' | 'chip'
} = {}) => {
  const color = avatarColor ?? COLORS[hash(name) % COLORS.length];
  const root = document.createElement('div');
  root.style.cssText = 'display:inline-flex;align-items:center;gap:8px;font-family:var(--do-font-body);';
  const avatar = `
    <span style="
      display:inline-flex;align-items:center;justify-content:center;
      width:${variant === 'chip' ? 24 : 28}px;
      height:${variant === 'chip' ? 24 : 28}px;
      border-radius:50%;background:${color};color:#fff;
      font-weight:500;font-size:12px;line-height:1;flex-shrink:0;
    ">${initials(name)}</span>`;

  if (variant === 'chip') {
    root.className = 'do-member';
    root.innerHTML = `
      ${avatar}
      <span class="do-member__name">${name}</span>
      ${role ? `<span class="do-member__role">· ${role}</span>` : ''}`;
  } else {
    root.innerHTML = `
      ${avatar}
      <div style="display:flex;flex-direction:column;">
        <span style="font:500 14px/1.4 var(--do-font-body);color:var(--do-text-strong);letter-spacing:-0.15px;">${name}</span>
        ${email ? `<span style="font-size:12px;color:var(--do-text-passive);">${email}</span>` : ''}
      </div>`;
  }
  return root;
};
