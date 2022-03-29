import React from 'react';
import { BackHandler, Text } from 'react-native';
import { Route, Routes, useLocation, useNavigate } from 'react-router-native';
import AppPaths from './paths';

function ApplicationRouter() {
  const location = useLocation();
  const navigate = useNavigate();

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
    <Routes>
      <Route path={AppPaths.Favorite.path} element={<Text>TEST</Text>} />
    </Routes>
  );
}

export default ApplicationRouter;
