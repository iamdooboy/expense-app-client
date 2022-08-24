import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ children }) => {
    const loggedIn = useSelector((state) => state?.users.userData);
    return loggedIn ? children : <Navigate to='/login' />;
};

export const BudgetRoute = ({ children }) => {
    const budgetId = localStorage.getItem('budgetId')
        ? JSON.parse(localStorage.getItem('budgetId'))
        : undefined;

    return budgetId ? children : <Navigate to='/' />;
};
