import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from '../screens/HomePage';
import SearchPage from '../screens/SearchPage';
//import ProfilePage from '../screens/ProfilePage';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="News"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: route.name,
        tabBarIcon: ({ color, size }) => {
          let iconName = 'newspaper-outline';
          if (route.name === 'News') {
            iconName = 'newspaper-outline';
          } else if (route.name === 'Search') {
            iconName = 'search-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
      })}
    >
      <Tab.Screen name="News" component={HomePage} options={{ title: 'News' }} />
      <Tab.Screen name="Search" component={SearchPage} options={{ title: 'Search' }} />
      {/* <Tab.Screen name="Profile" component={ProfilePage} options={{ title: 'Profile' }} /> */}
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
