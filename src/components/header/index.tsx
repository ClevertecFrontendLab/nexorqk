import { Layout, Space, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import classes from './header.module.css';

const { Link, Title } = Typography;

export const Header = () => {
    return (
        <Layout.Header className={classes.header}>
            <Link>Главная</Link>
            <Space align='start'>
                <Title className={classes.title}>
                    Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей
                    мечты!
                </Title>
                <Link>
                    <SettingOutlined />
                    Настройки
                </Link>
            </Space>
        </Layout.Header>
    );
};
