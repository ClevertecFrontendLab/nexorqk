import React from 'react';
import { Card, Layout, Typography } from 'antd';
import { CalendarTwoTone, HeartFilled, IdcardOutlined } from '@ant-design/icons';

import { ContentCard } from './content-card';

import classes from './main-content.module.css';

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
                <Typography.Text>Заполнить профиль</Typography.Text>
            </>
        ),
    },
];

const { Paragraph, Text, Title } = Typography;

export const MainContent: React.FC = () => (
    <Layout.Content className={classes.content}>
        <Card className={classes.opportunitiesCard}>
            <Paragraph className={classes.opportunities}>
                <Text className={classes.opportunitiesTitle}> С CleverFit ты сможешь:</Text>
                <ul className={classes.opportunitiesList}>
                    <li className={classes.opportunitiesItem}>
                        — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
                    </li>
                    <li className={classes.opportunitiesItem}>
                        — отслеживать свои достижения в разделе статистики, сравнивая свои
                        результаты с нормами и рекордами;
                    </li>
                    <li className={classes.opportunitiesItem}>
                        — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы
                        о тренировках;
                    </li>
                    <li className={classes.opportunitiesItem}>
                        — выполнять расписанные тренировки для разных частей тела, следуя подробным
                        инструкциям и советам профессиональных тренеров.
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
        <div className={classes.contentCards}>
            {contentCards.map((card) => (
                <ContentCard key={card.title} title={card.title} label={card.label} />
            ))}
        </div>
    </Layout.Content>
);
