import { createAddProductCard, createRemoveProductCard, createAddLicenseCard, createRemoveLicenseCard } from './BannerCards.js';

export default {
  title: 'Components/Cards/Banner Cards',
  parameters: { layout: 'padded' },
};

export const AddProduct = { render: () => createAddProductCard() };
export const RemoveProduct = { render: () => createRemoveProductCard() };
export const AddLicense = { render: () => createAddLicenseCard() };
export const RemoveLicense = { render: () => createRemoveLicenseCard() };

export const AllFour = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;flex-direction:column;gap:12px;max-width:800px;';
    wrap.appendChild(createAddProductCard());
    wrap.appendChild(createRemoveProductCard());
    wrap.appendChild(createAddLicenseCard());
    wrap.appendChild(createRemoveLicenseCard());
    return wrap;
  },
};
