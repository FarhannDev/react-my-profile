export interface MenuItem {
  name: string;
  links: string;
}

const menuListItem: MenuItem[] = [
  {
    name: 'Home',
    links: '/',
  },
  {
    name: 'About Me',
    links: '/about',
  },
  {
    name: 'Experience',
    links: '/experience',
  },

  {
    name: 'Project',
    links: '/project',
  },
];

export { menuListItem };
