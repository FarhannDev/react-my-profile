import { Outlet } from 'react-router-dom';
import TopNavigation from '../components/shared/TopNavigation';
import { Container } from 'react-bootstrap';

const Root = () => (
  <>
    <TopNavigation />

    <main className="main-content">
      <Container className="main-content-container">
        <Outlet />
      </Container>
    </main>
  </>
);

export default Root;
