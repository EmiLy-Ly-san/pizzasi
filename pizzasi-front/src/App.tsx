import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Cart from './pages/Cart';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;