import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../components/shared/error-page';
import Home from '../pages/Home';
import Experience from '../pages/Experience';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/experience',
        element: <Experience />,
      },
    ],
  },
]);

export default router;
