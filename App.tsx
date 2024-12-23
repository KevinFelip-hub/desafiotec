import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SearchScreen from './src/views/SearchScreen';
import UserDetailsScreen from './src/views/UserDetailsScreen';
import RepositoriesScreen from './src/views/RepositoriesScreen';
import store from './src/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Search">
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UserDetails"
            component={UserDetailsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RepositoriesScreen"
            component={RepositoriesScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
