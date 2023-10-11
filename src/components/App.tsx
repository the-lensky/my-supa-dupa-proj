import React, { Suspense } from 'react';
import '../styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageASync } from '../pages/AboutPage/About.async';
import { MainPageAsync } from '../pages/MainPage/MainPage.async';
import { useTheme } from '../theme/useTheme';


const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggler</button>
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