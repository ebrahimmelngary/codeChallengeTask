import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../../screens/Home';
import Favorite from '../../../screens/Favorite';
import MovieDetails from '../../../screens/MovieDetails';
import { common_options } from '../options';

const MainStackNav = createStackNavigator();

const MainStack: React.FC = () => (
  <MainStackNav.Navigator
    initialRouteName="Home"
    screenOptions={{...common_options}}>
    <MainStackNav.Screen
      name={'Home'}
      component={Home}
      options={{headerTitle: ''}}
    />
    <MainStackNav.Screen
      name={'Favorite'}
      component={Favorite}
      options={{headerTitle: ''}}
    />
     <MainStackNav.Screen
      name={'MovieDetails'}
      component={MovieDetails}
      options={{headerTitle: ''}}
    />
  </MainStackNav.Navigator>
);

export default MainStack;
