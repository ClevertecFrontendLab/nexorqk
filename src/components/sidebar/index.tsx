import { Layout, Menu, Typography } from 'antd';
import { CalendarTwoTone, HeartFilled, IdcardOutlined, TrophyFilled } from '@ant-design/icons';

import LogoIcon from '@assets/icons/logo.svg?react';
import ExitIcon from '@assets/icons/exit.svg?react';

import classes from './sidebar.module.css';

export const Sidebar = () => {
    const items = [
        {
            label: (
                <>
                    <CalendarTwoTone />
                    <Typography.Text>Календарь</Typography.Text>
                </>
            ),
            key: 'calendar',
        },
        {
            label: (
                <>
                    <HeartFilled />
                    <Typography.Text>Тренировки</Typography.Text>
                </>
            ),
            key: 'training',
        },
        {
            label: (
                <>
                    <TrophyFilled />
                    <Typography.Text>Достижения</Typography.Text>
                </>
            ),
            key: 'achievements',
        },
        {
            label: (
                <>
                    <IdcardOutlined />
                    <Typography.Text>Профиль</Typography.Text>
                </>
            ),
            key: 'profile',
        },
    ];

    return (
        <Layout.Sider className={classes.sider}>
            <LogoIcon />
            <Menu items={items} />
            <div className={classes.exit}>
                <ExitIcon />
                <Typography.Text>Выход</Typography.Text>
            </div>
        </Layout.Sider>
    );
};
