import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import Menu from './Restaurants/Menus/Menu'
import Additem from './Restaurants/Menus/Additem';
import Updateitem from './Restaurants/Menus/Updateitem';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RestaurasnStack = ({navigation}) => {
    return (
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}>
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            title: 'Menu', //Set Header Title
          }}
        />
      </Stack.Navigator>
    );
  };

  
  const UpdateitemStack = ({navigation}) => {
    return (
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}>
        <Stack.Screen
          name="Actualizar Producto"
          component={Updateitem}
          options={{
            title: 'Atualizar Producto', //Set Header Title
          }}
        />
      </Stack.Navigator>
    );
  };
  const AdditemStack = ({navigation}) => {
    return (
      <Stack.Navigator
        initialRouteName="Additem"
        screenOptions={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}>
        <Stack.Screen
          name="Agregar producto"
          component={Additem}
          options={{
            title: 'Agregar producto', //Set Header Title
          }}
        />
      </Stack.Navigator>
    );
  };


  const DrawerNavigatorRestaurantsRoutes = (props) => {
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
          name="Restaurat"
          options={{drawerLabel: 'restaurant'}}
          component={Menu}
        />
        <Drawer.Screen
          name="Agregar Producto"
          options={{drawerLabel: 'Agregar Producto'}}
          component={AdditemStack}
        />
        <Drawer.Screen
          name="Actualizar Producto"
          options={{drawerLabel: 'AActualizar  Producto'}}
          component={UpdateitemStack}
        />
  
      </Drawer.Navigator>
    );
  };

  export default DrawerNavigatorRestaurantsRoutes