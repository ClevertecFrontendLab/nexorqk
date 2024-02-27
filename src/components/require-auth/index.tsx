import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { getLocalStorageToken } from '@shared/utils/local-storage';

export const RequireAuth: React.FC = () => {
    return !getLocalStorageToken ? <Outlet /> : <Navigate to='/auth' replace />;
};
