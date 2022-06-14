import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ children }) => {
    const loggedIn = useSelector((state) => state?.users.userData);
    return loggedIn ? children : <Navigate to='/login' />;
};

// export const TransactionRoute = ({ children }) => {
//     //const loggedIn = useSelector((state) => state?.users.userData);
//     const budget = useSelector((state) => state?.transactions.budgetData);
//     console.log(budget);
//     return budget ? children : <Navigate to='/' />;
// };
