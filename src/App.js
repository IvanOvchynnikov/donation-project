import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import ScrollToTop from './hooks/useScrollToTop';
import Donation from './pages/Donation';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/donation" element={<Donation />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
