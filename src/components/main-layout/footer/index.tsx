import React from 'react';
import { Card, Layout, Typography } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

import classes from './footer.module.css';

const { Link, Text } = Typography;

export const Footer: React.FC = () => (
    <Layout.Footer className={classes.footer}>
        <Link className={classes.reviewsLink}>Смотреть отзывы</Link>
        <Card
            className={classes.downloadCard}
            title={
                <>
                    <Link className={classes.cardLink}>Скачать на телефон</Link>
                    <Text className={classes.cardPro}>Доступно в PRO-тарифе</Text>
                </>
            }
            headStyle={{ padding: '4px 24px', fontWeight: 400, lineHeight: '18.2px' }}
            size='small'
            bordered={false}
        >
            <div className={classes.osLinks}>
                <div className={classes.osLink}>
                    <AndroidFilled />
                    Android OS
                </div>
                <Text className={classes.osLink}>
                    <AppleFilled />
                    Apple iOS
                </Text>
            </div>
        </Card>
    </Layout.Footer>
);
