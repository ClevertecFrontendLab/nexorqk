import React from 'react';
import { Col, Layout, Row, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { useWindowSize } from 'usehooks-ts';

import SettingsRoundedIcon from '@assets/icons/settings-rounded.svg?react';

import classes from './header.module.css';

const { Link, Title, Text } = Typography;

export const Header: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
    const { width } = useWindowSize();

    return (
        <Layout.Header className={classNames(classes.header, { [classes.collapsed]: collapsed })}>
            <Link className={classes.mainLink}>Главная</Link>
            <Row className={classes.row}>
                <Col span={20}>
                    <Title className={classes.title}>
                        Приветствуем тебя в CleverFit — приложении,
                        <Text className={classes.titleSpan}>
                            которое поможет тебе добиться своей мечты!
                        </Text>
                    </Title>
                </Col>
                <Col className={classes.settings}>
                    {width <= 576 ? <SettingsRoundedIcon /> : null}
                    <Link className={classes.settingsLink}>
                        <SettingOutlined className={classes.settingsIcon} />
                        Настройки
                    </Link>
                </Col>
            </Row>
        </Layout.Header>
    );
};
