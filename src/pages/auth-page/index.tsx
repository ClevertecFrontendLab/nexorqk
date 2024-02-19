import React from 'react';
import { Button, Checkbox, Form, Input, Tabs } from 'antd';
import Lottie from 'lottie-react';

import loaderAnimation from './loader.json';
import LogoIcon from '@assets/icons/logo.svg?react';

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
                    <Form.Item
                        name='username'
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input placeholder='Username' />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input type='password' placeholder='Password' />
                    </Form.Item>
                </>
            ),
        },
        { label: 'Регистрация', key: 'sign-up', children: 'Content 2' },
    ];

    return (
        <div className={classes.wrapper}>
            <div className={classes.formWrapper}>
                <LogoIcon className={classes.logo} />
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
                    <Tabs items={items} />
                    <Form.Item
                        name='username'
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input placeholder='Username' />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input type='password' placeholder='Password' />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name='remember' valuePropName='checked' noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className='login-form-forgot' href=''>
                            Forgot password
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
                </Form>
            </div>
            <div style={{ width: 200, height: 200, margin: '0 auto', display: 'none' }}>
                <Lottie animationData={loaderAnimation} />
            </div>
        </div>
    );
};
