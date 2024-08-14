import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import TopNavigation from '../components/shared/TopNavigation';

const RootLayout: React.FC = () => {
  return (
    <>
      <TopNavigation />

      {/* Rendered Content Start */}
      <main className="main-content">
        <Container className="main-content-container">
          <Outlet />
        </Container>
      </main>
      {/* Rendered Content End */}
    </>
  );
};

export default RootLayout;
