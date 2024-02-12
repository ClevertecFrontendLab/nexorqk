import { Col, Layout, Row, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import classes from './header.module.css';

const { Link, Title } = Typography;

export const Header = () => {
    return (
        <Layout.Header className={classes.header}>
            <Link>Главная</Link>
            <Row className={classes.row}>
                <Col span={20}>
                    <Title className={classes.title}>
                        Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться
                        своей мечты!
                    </Title>
                </Col>
                <Col>
                    <Link>
                        <SettingOutlined />
                        Настройки
                    </Link>
                </Col>
            </Row>
        </Layout.Header>
    );
};
