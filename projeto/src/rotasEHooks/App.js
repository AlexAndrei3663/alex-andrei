import '../App.css';
import { Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import Jogo from './Jogo';
import React from 'react';

function App() {

    return (
        <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/jogo' element={<Jogo />} />
        </Routes>
    );
}

export default App;