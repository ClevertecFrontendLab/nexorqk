import { GooglePlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Paths } from '@constants/paths';
import { login } from '@shared/service/api/auth/login';
import { LoginFormFields } from '@shared/types/auth';

import classes from './login.module.css';

export const Login: React.FC = () => {
    const navigate = useNavigate();

    const onFinish = async (values: LoginFormFields) => {
        try {
            await login(values);
            navigate(Paths.MAIN);
        } catch (error) {
            console.log(error);
        }
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name='login-form'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
            className={classes.form}
        >
            <Form.Item className={classes.email} name='email' rules={[]}>
                <Input size='large' addonBefore='email' type='email' />
            </Form.Item>
            <Form.Item
                className={classes.password}
                name='password'
                rules={[
                    {
                        // validator: '',
                    },
                ]}
            >
                <Input.Password size='large' />
            </Form.Item>
            <Form.Item className={classes.rememberForgot}>
                <Form.Item
                    className={classes.remember}
                    name='remember'
                    valuePropName='checked'
                    noStyle
                >
                    <Checkbox className={classes.checkbox}>Запомнить меня</Checkbox>
                </Form.Item>
                <Link to='' className={classes.forgotLink}>
                    Забыли пароль?
                </Link>
            </Form.Item>
            <Form.Item className={classes.formButtonItem}>
                <Button
                    size='large'
                    type='primary'
                    htmlType='submit'
                    className={classes.formButton}
                >
                    Войти
                </Button>
            </Form.Item>
            <Form.Item>
                <Button size='large' htmlType='button' className={classes.googleButton}>
                    <GooglePlusOutlined />
                    Войти через Google
                </Button>
            </Form.Item>
        </Form>
    );
};
