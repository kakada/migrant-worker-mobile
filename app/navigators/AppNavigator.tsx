import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { Color, FontFamily } from '../assets/stylesheets/base_style';

// screens
import HomeScreen from '../screens/Home';
import RegisterScreen from '../screens/Register';
import Contact1280Screen from '../screens/Contact1280';
import OtherInfoScreen from '../screens/OtherInfo';
import AboutScreen from '../screens/About';

const Stack = createStackNavigator();

export default class AppNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor={Color.primary} />
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerStyle: {
              backgroundColor: Color.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: FontFamily.title,
            },
          }}>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{ title: 'ចុះឈ្មោះ' }}
          />
          <Stack.Screen
            name="Contact1280Screen"
            component={Contact1280Screen}
            options={{ title: 'ទាក់ទងទៅលេខជំនួយ១២៨០' }}
          />
          <Stack.Screen
            name="OtherInfoScreen"
            component={OtherInfoScreen}
            options={{ title: 'ចំណាកស្រុកសុវត្ថិភាព' }}
          />
          <Stack.Screen
            name="AboutScreen"
            component={AboutScreen}
            options={{ title: 'អំពីកម្មវិធី' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
