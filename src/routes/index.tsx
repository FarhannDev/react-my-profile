import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../components/shared/error-page';
import Home from '../pages/Home';
import Experience from '../pages/Experience';
import About from '../pages/About';
import Project from '../pages/Project';
import DetailProject from '../pages/DetailProject';

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
        path: '/about',
        element: <About />,
      },
      {
        path: '/experience',
        element: <Experience />,
      },
      {
        path: '/portofolio',
        element: <Project />,
      },
      {
        path: '/portofolio/:id/project',
        element: <DetailProject />,
      },
    ],
  },
]);

export default router;
