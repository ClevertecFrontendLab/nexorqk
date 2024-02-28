import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import classes from './auth-layout.module.css';
import { Loader } from '@components/loader';

export const AuthLayout: React.FC = () => {
    const [loading, setLoading] = useState(false);

    return (
        <div className={classes.wrapper}>
            <Loader loading={loading} />
            <div className={classes.blur}>
                <Outlet />
            </div>
        </div>
    );
};
