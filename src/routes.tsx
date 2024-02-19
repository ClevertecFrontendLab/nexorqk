import { Route, Routes } from 'react-router-dom';
import { MainPage } from '@pages/main-page';

export const routes = (
    <Routes>
        <Route path={Paths.AUTH} element={<Layout />}>
            <Route path={Paths.MainPage} element={<MainPage />} />
        </Route>
    </Routes>
);
