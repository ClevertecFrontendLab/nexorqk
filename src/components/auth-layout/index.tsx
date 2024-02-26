import React from 'react';
import { Outlet } from 'react-router-dom';

import classes from './auth-layout.module.css';

export const AuthLayout: React.FC = () => (
    <div className={classes.wrapper}>
        <div className={classes.blur}>
            <Outlet />
        </div>
    </div>
);
