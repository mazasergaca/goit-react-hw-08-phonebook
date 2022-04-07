import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, redirectTo }) {
  const token = useSelector(authSelectors.getToken);

  return token ? children : <Navigate to={redirectTo} />;
}
