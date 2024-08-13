export interface MenuItem {
  name: string;
  links: string;
}

const menuListItem: MenuItem[] = [
  {
    name: 'About Me',
    links: '/about',
  },
  {
    name: 'Experience',
    links: '/experience',
  },
  {
    name: 'Skills',
    links: '/skills',
  },
  {
    name: 'Project',
    links: '/project',
  },
];

export { menuListItem };
