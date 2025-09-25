
import Router from './router/Router';
import publicRoutes from './router/routes/publicRoutes';
import { Suspense, useEffect, useState } from 'react';
import { getRoutes } from './router/routes';

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes(prev => [...prev, ...routes]);
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router allRoutes={allRoutes} />
    </Suspense>
  );
}

export default App;

