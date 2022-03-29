import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NativeRouter } from 'react-router-native';
import ApplicationRouter from './routes/ApplicationRouter';
import AppPaths from './routes/paths';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 500,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
      refetchOnMount: false,
    },
  },
});

const INIT_ENTIRES = [AppPaths.Favorite.path];
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <QueryClientProvider client={client}>
      <NativeRouter initialEntries={INIT_ENTIRES}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ApplicationRouter />
      </NativeRouter>
    </QueryClientProvider>
  );
}

export default App;
