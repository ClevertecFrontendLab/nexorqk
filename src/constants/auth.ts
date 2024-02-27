import { Login } from '@components/auth-layout/login';
import { Registration } from '@components/auth-layout/registration';

export const login = {
    label: 'Вход',
    key: 'login',
    children: Login,
};

export const registration = {
    label: 'Регистрация',
    key: 'registration',
    children: Registration,
};
