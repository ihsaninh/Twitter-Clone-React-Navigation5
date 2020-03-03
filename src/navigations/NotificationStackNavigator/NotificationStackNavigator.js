import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NotificationScreen } from '../../screens/NotificationScreen';
import { HeaderNotification } from '../../components/HeaderNotification';

const Stack = createStackNavigator();

function NotificationStackNavigator() {
  return (
    <Stack.Navigator headerMode="screen" initialRouteName="Feed">
      <Stack.Screen
        name="Home"
        component={NotificationScreen}
        options={{
          header: props => (
            <HeaderNotification title="Notifications" {...props} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export { NotificationStackNavigator };