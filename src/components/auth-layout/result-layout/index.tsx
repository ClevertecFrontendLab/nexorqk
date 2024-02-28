import React from 'react';
import { Outlet } from 'react-router-dom';

export const ResultLayout: React.FC = () => (
    <div>
        <Outlet />
    </div>
);
