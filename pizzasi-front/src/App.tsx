import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Cart from './pages/Cart';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;