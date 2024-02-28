import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { Paths } from '@constants/paths';
import { getLocalStorageToken } from '@shared/utils/local-storage';

export const RequireAuth: React.FC = () => {
    return !getLocalStorageToken ? <Outlet /> : <Navigate to={Paths.AUTH} replace />;
};
