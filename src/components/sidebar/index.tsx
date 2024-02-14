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
import { useWindowSize } from 'usehooks-ts';
import classNames from 'classnames';

import LogoIcon from '@assets/icons/logo.svg?react';
import LogoCollapsedIcon from '@assets/icons/logo-collapsed.svg?react';
import ExitIcon from '@assets/icons/exit.svg?react';

import classes from './sidebar.module.css';

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

const itemsNoIcon = [
    {
        key: 'calendar',
        label: 'Календарь',
    },
    {
        key: 'training',
        label: 'Тренировки',
    },
    {
        key: 'achievements',
        label: 'Достижения',
    },
    {
        key: 'profile',
        label: 'Профиль',
    },
];

interface SidebarProps {
    collapsed: boolean;
    setCollapsed: Dispatch<SetStateAction<boolean>>;
}

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
    const { width } = useWindowSize();

    const isDesktopWidth = width > 576;

    return (
        <Layout.Sider
            width={isDesktopWidth ? 208 : 106}
            trigger={null}
            collapsible
            collapsed={collapsed}
            className={classes.sider}
        >
            <div className={classNames(classes.logo, { [classes.collapsed]: collapsed })}>
                {collapsed ? <LogoCollapsedIcon /> : <LogoIcon width={isDesktopWidth ? 133 : 72} />}
            </div>
            <Menu className={classes.menu} items={isDesktopWidth ? items : itemsNoIcon} />
            {collapsed ? (
                <MenuUnfoldOutlined
                    data-test-id={isDesktopWidth ? 'sider-switch' : 'sider-switch-mobile'}
                    className={classes.trigger}
                    onClick={() => setCollapsed(!collapsed)}
                />
            ) : (
                <MenuFoldOutlined
                    data-test-id={isDesktopWidth ? 'sider-switch' : 'sider-switch-mobile'}
                    className={classes.trigger}
                    onClick={() => setCollapsed(!collapsed)}
                />
            )}
            <div className={classes.exit}>
                <ExitIcon display={isDesktopWidth ? 'block' : 'none'} />
                <Typography.Text>Выход</Typography.Text>
            </div>
        </Layout.Sider>
    );
};
