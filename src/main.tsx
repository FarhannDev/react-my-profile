import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root.tsx';
import Contact from './routes/contact.tsx';
import ErrorPage from './components/shared/error-page.tsx';
import Home from './routes/home.tsx';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from './routes/Experience.tsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
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
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/project',
          element: <div>Halaman Project</div>,
        },
        {
          path: '/project/:id/read',
          element: <div>Halaman Project Detail</div>,
        },
      ],
    },
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
    },
  }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
