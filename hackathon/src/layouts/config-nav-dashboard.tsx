import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [

  // {
  //   title: 'Home',
  //   path: '/user',
  //   icon: icon('ic-user'),
  // },
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic-user'),
  },
  
  // {
  //   title: 'About',
  //   path: '/',
  //   icon: icon('ic-blog'),
  // },
  // {
  //   title: 'Features',
  //   path: '',
  //   icon: icon('ic-cart'),
  //   info: (
  //     <Label color="error" variant="inverted">
  //       +3
  //     </Label>
  //   ),
  // },
  
  // {
  //   title: 'Analatics',
  //   path: '/',
  //   icon: icon('ic-analytics'),
  // },
  {
    title: 'Sign in',
    path: '/sign-in',
    icon: icon('ic-lock'),
  },
  
];
