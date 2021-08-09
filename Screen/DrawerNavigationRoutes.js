// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import HomeScreen from './DrawerScreens/HomeScreen';
import SettingsScreen from './DrawerScreens/SettingScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import Perfil from './Users/Perfil'
import Editperfil from './Users/Editperfil';
import Recargasaldo from './Users/Recargasaldo';
import Menu from './Restaurants/Menus/Menu'
import Rlogin from './Restaurants/Auth/Rlogin';
import Rregister from './Restaurants/Auth/Rregister';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#EEB76B', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Local"
        component={Menu}
        options={{
          title: 'Local', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const settingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#EEB76B', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};



const PerfilStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Perfil"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#EEB76B', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{
          title: 'Perfil', //Set Header Title
        }}
      />
      <Stack.Screen
        name="Editperfil"
        component={Editperfil}
        options={{
          title: 'Editperfil', //Set Header Title
        }}
      />
      <Stack.Screen
        name="Recargasaldo"
        component={Recargasaldo}
        options={{
          title: 'Recargasaldo', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const AuthRestaurantStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Inicia sesion en tu negocio"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#EEB76B', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Inicia sesion en tu negocio"
        component={Rlogin}
        options={{
          title: 'Inicia sesion en tu negocio', //Set Header Title
        }}
      />
      <Stack.Screen
        name="Registra tu Negocio"
        component={Rregister}
        options={{
          title: 'Registra tu Negocio', //Set Header Title
        }}
      />

    </Stack.Navigator>
  );
};





const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home Screen'}}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Setting Screen'}}
        component={settingScreenStack}
      />
      <Drawer.Screen
      name="perfil"
      options={{drawerLabel: 'perfil'}}
        component={PerfilStack}
      />
      <Drawer.Screen
        name=" TU Negocio"
        options={{drawerLabel: 'Tu Negocio'}}
        component={AuthRestaurantStack}
      />

    </Drawer.Navigator>
  );
};


export default DrawerNavigatorRoutes;
