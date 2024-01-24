import { Outlet } from 'react-router-dom';

import Navigation from './components/Nav/Navigation.tsx';

export default function RootLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
