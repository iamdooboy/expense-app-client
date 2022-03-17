import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
