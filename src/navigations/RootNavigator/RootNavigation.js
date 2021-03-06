import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { TabComponent } from '../BottomTabNavigator/TabNavigator';
import { DrawerContent } from '../../components/DrawerContent';

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="TabComponent" component={TabComponent} />
    </Drawer.Navigator>
  );
};

export { RootNavigator };
