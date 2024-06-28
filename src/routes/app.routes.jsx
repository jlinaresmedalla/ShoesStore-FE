import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@/components/Layout';
import Dashboard from '@/pages/Dashboard';
import LoginPage from '@/pages/Login';
import Store from '@/pages/Store';

const PageRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Layout}>
            <Route path="/" Component={Dashboard} />
            <Route path="/tienda" Component={Store} />
          </Route>
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/sign-in" Component={LoginPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PageRoutes;
