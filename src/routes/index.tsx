import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../components/ui/shared/error-page';
import Home from '../pages/Home';
import About from '../pages/About';
import Project from '../pages/Project';
import DetailProject from '../pages/DetailProject';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import ResumeOnline from '../pages/ResumeOnline';

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
        path: '/resume',
        element: <Resume />,
      },
      {
        path: '/portfolio',
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
      {
        path: '/resume-online',
        element: <ResumeOnline />,
      },
    ],
  },
]);

export default router;
