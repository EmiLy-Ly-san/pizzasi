import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Cart from './pages/Cart';
import Product from './pages/Product';
import ProductsList from './pages/ProductsList';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Product /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/cart', element: <Cart /> },
      { path: '/products', element: <ProductsList /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;