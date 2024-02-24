import { Route, Routes } from 'react-router-dom';

import { Paths } from '@constants/paths';
import { MainPage } from '@pages/main-page';
import { AuthPage } from '@pages/auth-page';

export const routes = (
    <Routes>
        <Route path={Paths.AUTH} element={<AuthPage />} />
        <Route path={Paths.MAIN} element={<MainPage />} />
    </Routes>
);
