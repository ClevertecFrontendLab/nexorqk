import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HistoryRouter } from 'redux-first-history/rr6';

import { Paths } from '@constants/paths';
import { history, store } from '@redux/configure-store';

import { AuthLayout } from '@components/auth-layout';
import { ResultLayout } from '@components/auth-layout/result-layout';
import { SuccessResult } from '@components/auth-layout/result-layout/success-result';
import { RequireAuth } from '@components/require-auth';
import { AuthPage } from '@pages/auth-page';
import { MainPage } from '@pages/main-page';

import 'antd/dist/antd.css';
import 'normalize.css';
import './index.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HistoryRouter history={history}>
                <Routes>
                    <Route element={<AuthLayout />}>
                        <Route path={Paths.AUTH} element={<AuthPage />} />
                        <Route path='result' element={<ResultLayout />}>
                            <Route path='success' element={<SuccessResult />} />
                        </Route>
                        <Route path='*' element={<Navigate replace to={Paths.AUTH} />} />
                    </Route>
                    <Route element={<RequireAuth />}>
                        <Route path={Paths.MAIN} element={<MainPage />} />
                    </Route>
                </Routes>
            </HistoryRouter>
        </Provider>
    </React.StrictMode>,
);
