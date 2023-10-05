import { Navigation } from 'components/Navigation/Navigation';
import css from './layout.module.css';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/appbar/AppBar';

export const Layout = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
