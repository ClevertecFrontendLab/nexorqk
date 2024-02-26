import { GooglePlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import classes from './sign-in.module.css';

export const SignIn: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div>
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
        </div>
    );
};
