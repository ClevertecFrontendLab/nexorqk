import { Layout } from 'antd';
import { Header } from '@components/header';

import classes from './main-page.module.css';

const { Footer, Sider, Content } = Layout;

export const MainPage: React.FC = () => {
    return (
        <Layout className={classes.mainLayout}>
            <Sider>Sider</Sider>
            <Layout>
                <Header />
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    );
};
