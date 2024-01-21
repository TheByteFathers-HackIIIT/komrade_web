import { lazy } from 'react';

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));
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
