import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Stock from './pages/Stock';
import Delivery from './pages/Delivery';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/cart"
                    element={<Cart />}
                />
                <Route
                    path="/stock"
                    element={<Stock />}
                />
                <Route
                    path="/delivery"
                    element={<Delivery />}
                />
                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
        </>
    );
}

export default App;
