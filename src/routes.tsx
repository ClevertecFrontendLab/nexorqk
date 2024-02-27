import { Route, Routes } from 'react-router-dom';

import { Paths } from '@constants/paths';
import { MainPage } from '@pages/main-page';
import { AuthPage } from '@pages/auth-page';
import { AuthLayout } from '@components/auth-layout';
import { RequireAuth } from '@components/require-auth';

export const routes = (
    <Routes>
        <Route path={Paths.AUTH} element={<AuthLayout />}>
            <Route index element={<AuthPage />} />
            {/* <Route path='result' element={<ResultLayout />}> */}
            {/* <Route path='success' element={</>} /> */}
            {/* </Route> */}
        </Route>
        <Route element={<RequireAuth />}>
            <Route path={Paths.MAIN} element={<MainPage />} />
        </Route>
    </Routes>
);
