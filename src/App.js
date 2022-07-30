import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import {
    PrivateRoute,
    BudgetRoute,
} from './components/navigation/PrivateRoute';
import { Transactions } from './pages/Transactions';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { useCreateTheme } from './custom hooks/useCreateTheme';
import { TableContent } from './components/transaction/TableContent';

function App() {
    const { mode } = useSelector((state) => state.theme);

    const theme = useCreateTheme(mode);

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }></Route>
                    <Route
                        path='/transactions'
                        element={
                            <PrivateRoute>
                                <BudgetRoute>
                                    <Transactions />
                                </BudgetRoute>
                            </PrivateRoute>
                        }
                    />
                    <Route path='/table' element={<TableContent />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
