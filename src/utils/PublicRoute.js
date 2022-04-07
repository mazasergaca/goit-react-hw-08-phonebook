import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({
  children,
  restricted,
  redirectTo = '/',
}) {
  const token = useSelector(authSelectors.getToken);

  return token && restricted ? <Navigate replace to={redirectTo} /> : children;
}
