import React from 'react';
import { Col, Layout, Row, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import classes from './header.module.css';

const { Link, Title } = Typography;

export const Header: React.FC = () => (
    <Layout.Header className={classes.header}>
        <Link className={classes.mainLink}>Главная</Link>
        <Row className={classes.row}>
            <Col span={20}>
                <Title className={classes.title}>
                    Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей
                    мечты!
                </Title>
            </Col>
            <Col className={classes.settings}>
                <Link className={classes.settingsLink}>
                    <SettingOutlined className={classes.settingsIcon} />
                    Настройки
                </Link>
            </Col>
        </Row>
    </Layout.Header>
);
