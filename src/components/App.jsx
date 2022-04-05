import { lazy, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useFetchCurrentUserMutation } from 'redux/auth/auth-api';
import AppBar from './AppBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import PrivateRoute from 'utils/PrivateRoute';
import PublicRoute from 'utils/PublicRoute';

const HomePage = lazy(() => import('views/HomePage'));
const AuthPage = lazy(() => import('views/AuthPage'));
const RegisterPage = lazy(() => import('views/RegisterPage'));
const ContactsPage = lazy(() => import('views/ContactsPage'));

export const App = () => {
  const [fetchCurrentUser] = useFetchCurrentUserMutation();

  const token = useSelector(authSelectors.getToken);
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  const location = useLocation();

  useEffect(() => {
    if (token) {
      fetchCurrentUser();
    }
  }, [token, fetchCurrentUser]);
  return (
    <>
      {isFetchingCurrentUser && <h1>SKELETON</h1>}

      {!isFetchingCurrentUser && (
        <>
          {location.pathname !== '/login' &&
            location.pathname !== '/register' && <AppBar />}

          <Suspense fallback={<span>wait</span>}>
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
                  // <PrivateRoute redirectTo={'/login'}>
                  <ContactsPage />
                  /* </PrivateRoute> */
                }
              />
            </Routes>
          </Suspense>
          <ToastContainer />
        </>
      )}
    </>
  );
};
