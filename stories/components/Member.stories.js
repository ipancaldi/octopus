import { createMember } from './Member.js';

export default {
  title: 'Components/Cards/Member',
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    email: { control: 'text' },
    role: { control: 'text' },
    variant: { control: 'select', options: ['inline', 'chip'] },
    avatarColor: { control: 'color' },
  },
  args: { name: 'Arun Aryal', email: 'arun.aryal@disguise.one', variant: 'inline' },
  render: (args) => createMember(args),
  parameters: { layout: 'centered' },
};

export const Inline = {};
export const Chip = { args: { variant: 'chip', role: 'Admin' } };
export const NoEmail = { args: { email: '' } };

export const Team = {
  render: () => {
    const w = document.createElement('div');
    w.style.cssText = 'display:flex;flex-direction:column;gap:8px;';
    [
      { name: 'Arun Aryal', email: 'arun.aryal@disguise.one' },
      { name: 'Emilie LeBlanc', email: 'emilie.leblanc@disguise.one' },
      { name: 'Roberto Cavazos', email: 'roberto@disguise.one' },
      { name: 'Yui Tanaka', email: 'yui.tanaka@disguise.one' },
    ].forEach((p) => w.appendChild(createMember(p)));
    return w;
  },
};
