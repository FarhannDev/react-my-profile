export interface MenuItem {
  name: string;
  links: string;
}

const menuListItem: MenuItem[] = [
  {
    name: 'Beranda',
    links: '/',
  },
  {
    name: 'Tentang Saya',
    links: '/about',
  },
  {
    name: 'Pengalaman',
    links: '/experience',
  },

  {
    name: 'Portofolio',
    links: '/project',
  },
];

export { menuListItem };
