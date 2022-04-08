import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PrivateRoute } from './components/navigation/PrivateRoute';
import { Transactions } from './components/transaction/Transactions';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './theme';

function App() {
    const theme = useSelector((state) => state.theme);

    return (
        <ThemeProvider theme={theme.isDarkMode ? darkTheme : lightTheme}>
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
                                <Transactions />
                            </PrivateRoute>
                        }></Route>
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
