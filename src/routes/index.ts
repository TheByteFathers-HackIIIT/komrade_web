import { lazy } from 'react';

const SignIn = lazy(() => import('../pages/Authentication/SignIn'));
const CAS = lazy(() => import('../pages/Authentication/CAS'));
const Register = lazy(() => import('../pages/Authentication/Register'));

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
  {
    path: '/register',
    title: 'Register',
    component: Register,
  },
];

const routes = [...coreRoutes];
export default routes;
