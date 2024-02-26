import { Typography } from 'antd';
import React from 'react';

import errorImage from '@assets/images/error.png';

export const FailedSignIn: React.FC = () => (
    <div>
        <img src={errorImage} alt='Error' />
        <Typography.Title>Вход не выполнен</Typography.Title>
        <Typography.Text>Что-то пошло не так. Попробуйте еще раз</Typography.Text>
    </div>
);
