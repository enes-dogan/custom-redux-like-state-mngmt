import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './Root.tsx';
import ProductsPage from './containers/Products.tsx';
import FavoritesPage from './containers/Favorites.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <ProductsPage /> },
      { path: 'favorites', element: <FavoritesPage /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
