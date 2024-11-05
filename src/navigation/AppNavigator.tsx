import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#65adf1',
          },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen 
          name="One" 
          component={ScreenOne}
          options={{ title: 'Fun Screen' }}
        />
        <Stack.Screen 
          name="Two" 
          component={ScreenTwo}
          options={{ title: 'Magic Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}