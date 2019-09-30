import { createAppContainer } from 'react-navigation';
import React, {Component} from 'react';
import {Platform} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator,createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import BusinessDetailsScreen from '../components/tabs/BusinessDetailsPage';
import TechnologyTabDetailComponent from './TechnologyPostsContainer';
import Marketpage from '../components/tabs/MarketPage';
import BusinessPostsContainer from './BusinessPostsContainer';



  const TabScreen = createBottomTabNavigator(
    {
      Business: {
          screen:BusinessPostsContainer,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Ionicons name="ios-business" size={30} color={tintColor} />
            )
        },
      },
      Technology:{
          screen:TechnologyTabDetailComponent,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Ionicons name="ios-apps" size={30} color={tintColor} />
            )
        },
      },
      Market:{
        screen:Marketpage,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Ionicons name="ios-aperture" size={30} color={tintColor} />
            )
        },
    }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({

        }),
        tabBarOptions: {
          activeTintColor: '#673ab7',
          inactiveTintColor: 'gray',
          showIcon:true
        },
      }
  );

  TabScreen.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
  
    // You can do whatever you like here to pick the title based on the route name
    const headerTitle = routeName;
    
    return {
      headerTitle,
    };
  };

  const AppNavigatorContainer = createStackNavigator({
    TabScreen: TabScreen,
    Details:BusinessDetailsScreen
  },{
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#673ab7'
      },
      headerTitleStyle: { color: 'white' },
    }
  }); 
const AppNavigationContainer = createAppContainer(AppNavigatorContainer);

export default AppNavigationContainer;