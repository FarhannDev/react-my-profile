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
    links: '/ex',
  },

  {
    name: 'Portofolio',
    links: '/porto',
  },
  {
    name: 'Tentang Saya',
    links: '/me',
  },
  {
    name: 'Hubungi Saya',
    links:
      'https://api.whatsapp.com/send/?phone=6282298717364&text&type=phone_number&app_absent=0',
  },
];

export { menuListItem };
