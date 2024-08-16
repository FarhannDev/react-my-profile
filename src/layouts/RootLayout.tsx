import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { TopNavigation } from '../components/LoadableMyComponent';
import BottomNavigation from '../components/ui/navbar/BottomNavigation';

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

      <BottomNavigation />
    </>
  );
};

export default RootLayout;
