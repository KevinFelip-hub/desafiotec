import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserDetailsScreen from '../views/UserDetailsScreen';
import RepositoriesScreen from '../views/RepositoriesScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="UserDetailsScreen">
      <Stack.Screen
        name="UserDetailsScreen"
        component={UserDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RepositoriesScreen"
        component={RepositoriesScreen}
        options={{ title: 'Repositories' }}
      />
    </Stack.Navigator>
  );
}
