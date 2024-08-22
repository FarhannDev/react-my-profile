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
    name: 'Pengalaman',
    links: '/experience',
  },

  {
    name: 'Portofolio',
    links: '/portofolio',
  },
  {
    name: 'Tentang Saya',
    links: '/about',
  },
  {
    name: 'Hubungi Saya',
    links: '/about',
  },
];

export { menuListItem };
