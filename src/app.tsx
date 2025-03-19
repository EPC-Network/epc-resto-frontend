import { useRoutes } from 'react-router-dom';

import { routes } from '@/config';

function App() {
  const appRoutes = useRoutes(routes);

  return <div>{appRoutes}</div>;
}

export default App;
