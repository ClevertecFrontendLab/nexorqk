import { Button, Checkbox, Form, Input, Tabs } from 'antd';
import Lottie from 'lottie-react';
import React from 'react';

import LogoIcon from '@assets/icons/logo.svg?react';
import loaderAnimation from './loader.json';

import classes from './auth-page.module.css';

export const AuthPage: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const items = [
        {
            label: 'Вход',
            key: 'sign-in',
            children: (
                <>
                    <Form.Item name='username' rules={[]}>
                        <Input addonBefore='email' type='email' />
                    </Form.Item>
                    <Form.Item
                        // help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                        name='password'
                        rules={[
                            {
                                // validator: '',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name='remember' valuePropName='checked' noStyle>
                            <Checkbox>Запомнить меня</Checkbox>
                        </Form.Item>

                        <a className='login-form-forgot' href=''>
                            Забыли пароль?
                        </a>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            style={{ width: '100%' }}
                            type='primary'
                            htmlType='submit'
                            className='login-form-button'
                        >
                            Log in
                        </Button>
                    </Form.Item>
                </>
            ),
        },
        {
            label: 'Регистрация',
            key: 'sign-up',
            children: (
                <>
                    <Form.Item>
                        <Button
                            style={{ width: '100%' }}
                            type='primary'
                            htmlType='submit'
                            className='login-form-button'
                        >
                            Log in
                        </Button>
                    </Form.Item>
                </>
            ),
        },
    ];

    return (
        <div className={classes.wrapper}>
            <div className={classes.image}></div>
            <div className={classes.formWrapper}>
                <div>
                    <LogoIcon width={309} height={76} />
                </div>
                <Form
                    name='basic'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='off'
                    className={classes.form}
                >
                    <Tabs className={classes.tabs} items={items} />
                </Form>
            </div>
            <div style={{ width: 200, height: 200, margin: '0 auto', display: 'none' }}>
                <Lottie animationData={loaderAnimation} />
            </div>
        </div>
    );
};
