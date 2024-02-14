import React from 'react';
import { Card, Layout, Typography } from 'antd';
import { CalendarTwoTone, HeartFilled, IdcardOutlined } from '@ant-design/icons';

import { ContentCard } from './content-card';

import classes from './main-content.module.css';
import classNames from 'classnames';

const contentCards = [
    {
        title: 'Расписать тренировки',
        label: (
            <>
                <HeartFilled />
                <Typography.Text>Тренировки</Typography.Text>
            </>
        ),
    },
    {
        title: 'Назначить календарь',
        label: (
            <>
                <CalendarTwoTone twoToneColor={['#2F54EB', '#2F54EB']} />
                <Typography.Text>Календарь</Typography.Text>
            </>
        ),
    },
    {
        title: 'Заполнить профиль',
        label: (
            <>
                <IdcardOutlined />
                <Typography.Text>Профиль</Typography.Text>
            </>
        ),
    },
];

const { Paragraph, Text, Title } = Typography;

export const MainContent: React.FC<{ collapsed: boolean }> = ({ collapsed }) => (
    <Layout.Content className={classes.content}>
        <div className={classes.wrapper}>
            <Card className={classes.opportunitiesCard}>
                <Paragraph className={classes.opportunities}>
                    <Text className={classes.opportunitiesTitle}> С CleverFit ты сможешь:</Text>
                    <ul className={classes.opportunitiesList}>
                        <li className={classes.opportunitiesItem}>
                            — планировать свои тренировки на календаре, выбирая тип и уровень
                            нагрузки;
                        </li>
                        <li className={classes.opportunitiesItem}>
                            — отслеживать свои достижения в разделе статистики, сравнивая свои
                            результаты с нормами и рекордами;
                        </li>
                        <li className={classes.opportunitiesItem}>
                            — создавать свой профиль, где ты можешь загружать свои фото, видео и
                            отзывы о тренировках;
                        </li>
                        <li className={classes.opportunitiesItem}>
                            — выполнять расписанные тренировки для разных частей тела, следуя
                            подробным инструкциям и советам профессиональных тренеров.
                        </li>
                    </ul>
                </Paragraph>
            </Card>
            <Card className={classes.aboutCard}>
                <Title level={4} className={classes.about}>
                    CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
                    откладывай на завтра — начни тренироваться уже сегодня!
                </Title>
            </Card>
            <div className={classNames(classes.contentCards, { [classes.collapsed]: collapsed })}>
                {contentCards.map((card) => (
                    <ContentCard key={card.title} title={card.title} label={card.label} />
                ))}
            </div>
        </div>
    </Layout.Content>
);
