import { Tabs } from 'antd';
import React from 'react';

import LogoIcon from '@assets/icons/logo.svg?react';
import { login, registration } from '@constants/auth';

import classes from './auth-page.module.css';

export const AuthPage: React.FC = () => {
    const onChange = (key: string) => {
        console.log(key);
    };

    return (
        <div className={classes.formWrapper}>
            <div className={classes.logo}>
                <LogoIcon width={309} height={76} />
            </div>
            <Tabs
                onChange={onChange}
                size='large'
                centered
                className={classes.tabs}
                items={[
                    {
                        label: login.label,
                        key: login.key,
                        children: <login.children />,
                    },
                    {
                        label: registration.label,
                        key: registration.key,
                        children: <registration.children />,
                    },
                ]}
            />
        </div>
    );
};
