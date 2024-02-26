import { Route, Routes } from 'react-router-dom';

import { Paths } from '@constants/paths';
import { MainPage } from '@pages/main-page';
import { AuthPage } from '@pages/auth-page';
import { FailedSignIn } from '@components/sign-in/failed-sign-in';
import { AuthLayout } from '@components/auth-layout';
import { RequireAuth } from '@components/require-auth';

export const routes = (
    <Routes>
        <Route path={Paths.AUTH} element={<AuthLayout />}>
            <Route index element={<AuthPage />} />
            <Route></Route>
        </Route>
        {/* <Route path='whatever' element={<RequireAuth><ProtectedComp /></RequireAuth>}> */}
        <Route path='/error' element={<FailedSignIn />} />
        <Route path={Paths.MAIN} element={<MainPage />} />
    </Routes>
);
