import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../features/auth/authSlice';

const LogoutButton = ({ style }) => {
  //example of passed prop to change styles style={['btn btn-info']}
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/login');
  };

  return (
    <button
      className={
        !!style && style.length > 0
          ? [...style]
          : 'btn  btn-xs btn-outline btn-error mt-4'
      }
      onClick={handleLogout}>
      Logout
    </button>
  );
};
export default LogoutButton;
