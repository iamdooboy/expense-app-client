import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ children }) => {
    const loggedIn = localStorage.getItem('userId');

    return loggedIn ? children : <Navigate to='/login' />;
};
