import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

// Checking the auth token
//The users and user's token will persist since the user is set to localStorage
const RequireAuth = () => {
  const { user } = useAuth();
  const location = useLocation();
  return user && user.token ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default RequireAuth;
