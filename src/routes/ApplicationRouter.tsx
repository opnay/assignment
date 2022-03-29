import React from 'react';
import { BackHandler, Text } from 'react-native';
import { Route, Routes, useLocation, useNavigate } from 'react-router-native';
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
        <Route path={AppPaths.Favorite.path} element={<Text>TEST</Text>} />
      </Routes>
    </DefaultLayout>
  );
}

export default ApplicationRouter;
