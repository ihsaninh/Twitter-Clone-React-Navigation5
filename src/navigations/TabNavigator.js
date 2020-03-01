import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import InboxScreen from '../screens/InboxScreen';

const Tab = createBottomTabNavigator();

function TabComponent() {
  return (
    <Tab.Navigator
      tabBarOptions={{ showLabel: false, style: { elevation: 10 } }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="bell" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={InboxScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="mail" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export { TabComponent };