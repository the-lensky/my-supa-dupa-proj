import React, { Suspense } from 'react';
import '../index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage/AboutPage';
import MainPage from '../pages/MainPage/MainPage';
import { AboutPageASync } from '../pages/AboutPage/About.async';
import { MainPageAsync } from '../pages/MainPage/MainPage.async';

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageASync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;