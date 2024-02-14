import React, { Dispatch, SetStateAction } from 'react';
import { Layout, Menu, Typography } from 'antd';
import {
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyFilled,
} from '@ant-design/icons';
// import { useWindowSize } from 'usehooks-ts';

import LogoIcon from '@assets/icons/logo.svg?react';
import LogoCollapsedIcon from '@assets/icons/logo-collapsed.svg?react';
import ExitIcon from '@assets/icons/exit.svg?react';

import classes from './sidebar.module.css';
import classNames from 'classnames';

const items = [
    {
        key: 'calendar',
        icon: <CalendarTwoTone twoToneColor={['#061178', '#061178']} />,
        label: 'Календарь',
    },
    {
        key: 'training',
        icon: <HeartFilled className={classes.menuIcon} />,
        label: 'Тренировки',
    },
    {
        key: 'achievements',
        icon: <TrophyFilled className={classes.menuIcon} />,
        label: 'Достижения',
    },
    {
        key: 'profile',
        icon: <IdcardOutlined className={classes.menuIcon} />,
        label: 'Профиль',
    },
];

interface SidebarProps {
    collapsed: boolean;
    setCollapsed: Dispatch<SetStateAction<boolean>>;
}

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
    // const { width = 0 } = useWindowSize();

    // width < '576px';

    return (
        <Layout.Sider trigger={null} collapsible collapsed={collapsed} className={classes.sider}>
            <div className={classNames(classes.logo, { [classes.collapsed]: collapsed })}>
                {collapsed ? <LogoCollapsedIcon /> : <LogoIcon />}
            </div>
            <Menu items={items} />
            {collapsed ? (
                <MenuUnfoldOutlined
                    data-test-id='sider-switch'
                    className={classes.trigger}
                    onClick={() => setCollapsed(!collapsed)}
                />
            ) : (
                <MenuFoldOutlined
                    data-test-id='sider-switch'
                    className={classes.trigger}
                    onClick={() => setCollapsed(!collapsed)}
                />
            )}
            <div className={classes.exit}>
                <ExitIcon />
                <Typography.Text>Выход</Typography.Text>
            </div>
        </Layout.Sider>
    );
};
