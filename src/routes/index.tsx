import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../components/ui/shared/error-page';
import Home from '../pages/Home';
import Experience from '../pages/Experience';
import About from '../pages/About';
import Project from '../pages/Project';
import DetailProject from '../pages/DetailProject';
import Contact from '../pages/Contact';

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
        path: '/me',
        element: <About />,
      },
      {
        path: '/ex',
        element: <Experience />,
      },
      {
        path: '/porto',
        element: <Project />,
      },
      {
        path: '/porto/:id/project',
        element: <DetailProject />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;
