import { Layout } from 'antd';

import { Header } from '@components/header';
import { Sidebar } from '@components/sidebar';

import classes from './main-page.module.css';

export const MainPage: React.FC = () => {
    return (
        <Layout className={classes.mainLayout}>
            <Sidebar />
            <Layout>
                <Header />
                <Layout.Content>Content</Layout.Content>
                <Layout.Footer>Footer</Layout.Footer>
            </Layout>
        </Layout>
    );
};
