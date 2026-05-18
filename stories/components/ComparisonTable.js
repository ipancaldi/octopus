import './domain.css';
import { icons } from '../primitives/icons.js';

const DEFAULT_PRODUCTS = [
  { product: 'Designer Starter', tier: 'Free',     productSlug: 'Designer Starter' },
  { product: 'Designer Pro',     tier: 'Pro',      productSlug: 'Designer Pro' },
  { product: 'D3 X Range',       tier: '$400/mo',  productSlug: 'X1' },
  { product: 'Designer Server',  tier: 'Contact',  productSlug: 'Renderstream' },
];

const DEFAULT_ROWS = [
  { feature: 'Real-time Renderstream integration',           values: [false, true,  true,  true]  },
  { feature: 'Serve as "writer" for live edit of show files', values: [false, true,  true,  true]  },
  { feature: 'Mesh / UV warp re-mapping',                    values: [false, false, true,  true]  },
  { feature: 'Cue-action automation timeline preview',       values: [false, true,  true,  true]  },
  { feature: 'Serve as Notch host for centralized output',   values: [false, true,  true,  true]  },
  { feature: 'Camera + Tracking pre-roll, simulated triggers', values: [false, true,  true,  true]  },
  { feature: 'On-stage live "click" path system trigger',     values: [false, false, true,  true]  },
  { feature: 'Director Multitouch hardware support',          values: [false, false, true,  true]  },
  { feature: 'Premium Assignment Console',                   values: [false, false, true,  true]  },
];

const check = `<span class="do-compare__check">${icons.chevronDown.replace('viewBox="0 0 16 16"', 'viewBox="0 0 12 12"').replace('d="M4 6l4 4 4-4"', 'd="M3 6l2 2 4-4"')}</span>`;
const dash = `<span class="do-compare__dash" aria-hidden="true"></span>`;

export const createComparisonTable = ({
  products = DEFAULT_PRODUCTS,
  rows = DEFAULT_ROWS,
  title = 'Features',
} = {}) => {
  const table = document.createElement('table');
  table.className = 'do-compare';
  const headProducts = products.map((p) => `
    <th>
      <span class="do-compare__product">
        <img src="${encodeURI(p.productSlug)}_32.svg" alt="" />
        <span>${p.product}</span>
        <span style="font-size:11px;color:var(--do-text-passive);font-weight:400;">${p.tier ?? ''}</span>
      </span>
    </th>`).join('');
  const bodyRows = rows.map((r) => `
    <tr>
      <td>${r.feature}</td>
      ${r.values.map((v) => `<td>${v ? check : dash}</td>`).join('')}
    </tr>`).join('');
  table.innerHTML = `
    <thead>
      <tr>
        <th>${title}</th>
        ${headProducts}
      </tr>
    </thead>
    <tbody>${bodyRows}</tbody>`;
  return table;
};
