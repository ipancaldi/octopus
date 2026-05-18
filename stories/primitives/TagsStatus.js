import './primitives.css';

export const createTagsStatus = ({
  status = 'active',
  label,
  mobile = false,
} = {}) => {
  const labels = {
    active: 'Active',
    pending: 'Pending',
    trial: 'Trial',
    expired: 'Expired',
    inactive: 'Inactive',
  };
  const span = document.createElement('span');
  span.className = 'do-tags-status' + (mobile ? ' do-tags-status--mobile' : '');
  span.dataset.status = status;
  span.textContent = label ?? labels[status] ?? status;
  return span;
};
