import React, { useState } from 'react';
import { Layout } from 'antd';
import classNames from 'classnames';

import { Header } from '@components/header';
import { Sidebar } from '@components/sidebar';
import { MainContent } from '@components/main-content';
import { Footer } from '@components/footer';

import classes from './main-page.module.css';

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout hasSider className={classes.mainLayout}>
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            <Layout className={classNames(classes.siteLayout, { [classes.collapsed]: collapsed })}>
                <Header collapsed={collapsed} />
                <div className={classes.bgWrapper}>
                    <MainContent collapsed={collapsed} />
                    <Footer />
                </div>
            </Layout>
        </Layout>
    );
};
