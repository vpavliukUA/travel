import React from 'react';
import './App.scss';
import { Layout } from 'antd';

import TopNavBar from './common/components/TopNavBar/TopNavBar';

const { Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <TopNavBar />
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2022 Created by vpavliuk</Footer>
      </Layout>
    </div>
  );
}

export default App;
