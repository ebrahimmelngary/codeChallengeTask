import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {darkColors, lightColors} from '../common/ThemeColors';

export const navigationRef: React.RefObject<NavigationContainerRef> = React.createRef();

const RootStack = createStackNavigator();

const RootNavigation = () => {
  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{animationEnabled: false}}>
      <RootStack.Screen name="DrawerNavigation" component={DrawerNavigation} />
    </RootStack.Navigator>
  );
};

const Navigation: React.FC = () => {
  const scheme = useColorScheme();
  return (
    <AppearanceProvider>
      <NavigationContainer
        ref={navigationRef}
        theme={scheme === 'dark' ? darkColors : lightColors}>
        <RootNavigation />
      </NavigationContainer>
    </AppearanceProvider>
  );
};
export default Navigation;

export const navigate = (name: any, params: object | undefined) => {
  navigationRef.current
    ? navigationRef.current.navigate(name, params)
    : undefined;
};
