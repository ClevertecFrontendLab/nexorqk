import { GooglePlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import classes from './registration.module.css';
import { RegistrationFields } from '@shared/types/auth';
import { registration } from '@shared/service/api/auth/registration';
import { routes } from '@constants/paths';

const validationRule = [
    {
        min: 8,
        message: 'Минимальная длина 8 символов!',
    },
    {
        required: true,
        message: 'Please input your password!',
    },
    {
        pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).*$/,
        message: 'Must contain at least 1 uppercase, 1 lowercase letter and 1 special characters!',
    },
];

export const Registration: React.FC = () => {
    const navigate = useNavigate();

    const onFinish = async (values: RegistrationFields) => {
        try {
            await registration(values);
            navigate(routes.resultSuccess);
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
            name='sign-up-form'
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
                help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                name='password'
                // rules={validationRule}
            >
                <Input.Password size='large' />
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
