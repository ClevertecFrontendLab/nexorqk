import React from 'react';
import { Card } from 'antd';

import classes from './content-card.module.css';

interface ContentCardProps {
    title: string;
    label: React.ReactElement;
}

export const ContentCard: React.FC<ContentCardProps> = ({ title, label }) => (
    <Card
        className={classes.card}
        title={title}
        size='small'
        headStyle={{ padding: 4, lineHeight: '20.8px' }}
        bodyStyle={{ padding: 19 }}
        bordered={false}
    >
        <div className={classes.label}>{label}</div>
    </Card>
);
