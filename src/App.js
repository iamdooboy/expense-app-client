import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PrivateRoute } from './components/navigation/PrivateRoute';
import { Transactions } from './components/transaction/Transactions';

function App() {
    return (
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
    );
}

export default App;
