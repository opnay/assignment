import React from 'react';
import { BackHandler } from 'react-native';
import { Route, Routes, useLocation, useNavigate } from 'react-router-native';
import FavoritePage from '../components/pages/Favorite';
import SearchPage from '../components/pages/SearchPage';
import DefaultLayout from '../components/templates/DefaultLayout';
import AppPaths from './paths';

function ApplicationRouter() {
  const location = useLocation();
  const navigate = useNavigate();
  const title = React.useMemo(
    () => Object.values(AppPaths).find((it) => it.path === location.pathname)?.title || '',
    [location.pathname]
  );

  // listen back button handler
  React.useEffect(() => {
    const remove = BackHandler.addEventListener('hardwareBackPress', () => {
      if (location.pathname === AppPaths.Favorite.path) {
        return false;
      }

      navigate(-1);
      return true;
    });

    return () => remove.remove();
  }, [location.pathname, navigate]);

  return (
    <DefaultLayout title={title}>
      <Routes>
        <Route path={AppPaths.Favorite.path} element={<FavoritePage />} />
        <Route path={AppPaths.Search.path} element={<SearchPage />} />
      </Routes>
    </DefaultLayout>
  );
}

export default ApplicationRouter;
