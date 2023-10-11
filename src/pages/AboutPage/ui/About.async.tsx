import { lazy } from 'react';

export const AboutPageASync = lazy(() => new Promise(resolve => {
    //@ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));






