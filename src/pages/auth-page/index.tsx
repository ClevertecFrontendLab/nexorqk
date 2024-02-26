import { Form, Tabs } from 'antd';
import React from 'react';

import LogoIcon from '@assets/icons/logo.svg?react';
import { SignIn } from '@components/sign-in';
import { SignUp } from '@components/sign-up';

import classes from './auth-page.module.css';

export const AuthPage: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onChange = (key: string) => {
        console.log(key);
    };

    return (
        <div className={classes.formWrapper}>
            <div className={classes.logo}>
                <LogoIcon width={309} height={76} />
            </div>
            <Form
                name='auth-form'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete='off'
                className={classes.form}
            >
                <Tabs
                    onChange={onChange}
                    size='large'
                    centered
                    className={classes.tabs}
                    items={[
                        {
                            label: 'Вход',
                            key: 'sign-in',
                            children: <SignIn />,
                        },
                        {
                            label: 'Регистрация',
                            key: 'sign-up',
                            children: <SignUp />,
                        },
                    ]}
                />
            </Form>
        </div>
    );
};
