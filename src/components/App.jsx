import { lazy, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from 'utils/PrivateRoute';
import PublicRoute from 'utils/PublicRoute';
import { Global } from 'styles/global';
import authSelectors from 'redux/auth/auth-selectors';
import { useFetchCurrentUserMutation } from 'redux/auth/auth-api';
import AppBar from './AppBar';

const HomePage = lazy(() => import('views/Home'));
const AuthPage = lazy(() => import('views/Login'));
const RegisterPage = lazy(() => import('views/Register'));
const ContactsPage = lazy(() => import('views/Contacts'));
const NotFound = lazy(() => import('views/NotFound'));

export const App = () => {
  const [fetchCurrentUser] = useFetchCurrentUserMutation();

  const token = useSelector(authSelectors.getToken);

  const location = useLocation();

  useEffect(() => {
    if (token) {
      fetchCurrentUser();
    }
  }, [token, fetchCurrentUser]);

  return (
    <>
      <Global />
      {location.pathname !== '/login' && location.pathname !== '/register' && (
        <AppBar />
      )}

      <Suspense fallback={null}>
        <Routes>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <AuthPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo={'/login'}>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};
