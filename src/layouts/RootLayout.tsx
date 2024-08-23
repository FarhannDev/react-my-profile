import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';

const RootLayout: React.FC = () => {
  return (
    <>
      <MyComponentInstance.TopMenuNavigation />

      {/* Rendered Content Start */}
      <main className="main-content">
        <Container className="main-content-container">
          <Outlet />
        </Container>
      </main>
      {/* Rendered Content End */}

      <MyComponentInstance.BottomNavigation />
    </>
  );
};

export default RootLayout;
