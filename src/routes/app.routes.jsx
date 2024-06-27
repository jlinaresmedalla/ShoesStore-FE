import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';

const PageRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Layout}>
            <Route path={'/'} Component={Dashboard} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PageRoutes;
