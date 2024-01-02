import { Icons } from '@/icons/icon'

const NavbarData = {
  non_public: {
    main: [
      {
        name: 'Dashboard',
        icon: Icons.Dashboard,
        to: '/dashboard',
        roles: ['startup', 'investor'],
      },
      {
        name: 'Invest',
        icon: Icons.Invest,
        to: '/invest',
        roles: ['investor'],
      },
      {
        name: 'Portfolio',
        icon: Icons.Portfolio,
        to: '/portfolio',
        roles: ['investor'],
      },
    ],
    user_menu: [],
  },
  accelerator: {
    name: 'Referral',
    icon: Icons.Referral,
    to: '/referral',
    roles: ['investor'],
  },
  public: {
    main: [
      {
        name: 'Invest',
        icon: null,
        to: '/invest',
      },
      {
        name: 'Raise Funds',
        icon: null,
        to: '/raise',
      },
      {
        name: 'Dashboard',
        icon: null,
        to: '/dashboard',
      },
      {
        name: 'Learn',
        icon: null,
        to: '/learn',
      },
    ],
  },
}

export default { NavbarData }
