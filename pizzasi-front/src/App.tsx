import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Cart from './pages/Cart';
import ProductsList from './pages/ProductsList';
import Home from './pages/Home';
import Product from './pages/Product';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/cart', element: <Cart /> },
      { path: '/products', element: <ProductsList /> },
      { path: '/product/:id', element: <Product /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;