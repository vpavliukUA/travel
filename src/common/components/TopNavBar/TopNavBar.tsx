import React, { memo, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { performBrowseRoutes } from '../../../flights/services/skyscanner/perform-browse-routes';

const { Header } = Layout;
const menuItems = [
  'Подорожі',
  'Автомобілі',
  'Помешкання',
  'Stories',
  'Пропозиції',
  'Активне дозвілля',
];

const TopNavBar = () => {
  // useEffect(() => {
  //   performBrowseRoutes({
  //     country: 'UA',
  //     currency: 'USD',
  //     locale: 'en-US',
  //     originPlace: 'KIEV-sky',
  //     destinationPlace: 'anywhere',
  //     outboundPartialDate: '2022-03-14',
  //     inboundPartialDate: '2022-03-17',
  //   });
  // }, []);
  return (
    <Header className="top-nav-bar__header">
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
        {menuItems.map(menuItem => {
          return <Menu.Item key={menuItem}>{menuItem}</Menu.Item>;
        })}
      </Menu>
    </Header>
  );
};

export default memo(TopNavBar);
