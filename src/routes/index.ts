import { lazy } from 'react';

const SignIn = lazy(() => import('../pages/Authentication/SignIn'));
const CAS = lazy(() => import('../pages/Authentication/CAS'));

const coreRoutes = [
  {
    path: '/signin',
    title: 'Sign In',
    component: SignIn,
  },
  {
    path: '/cas',
    title: 'CAS',
    component: CAS,
  },
];

const routes = [...coreRoutes];
export default routes;
