// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, SafeAreaView} from 'react-native';
import React, { useEffect, useState } from "react";
import { addCard } from '../../api';
import Mapita from '../Components/Mapita'

const TuCarrito = () => {
 
const [carro,setCarro]=useState({
  id_local:"",
  id_item:"",
  id_user:"",

})

useEffect(() => {
  
}, [])


const handleSubmit= async ()=>{

try {
  
} catch (error) {
console.log(error)  
}

const handleChange = (name, value) => setPro({ ...pro, [name]: value })


const addCard= async(item_id)=>{
   handleChange('id_item',item_id)
   const marcos =await AsyncStorage.getItem('user_id')
   handleChange('id_user',marcos)
   const negocio=getLocalByItem()
   handleChange('id_local',negocio)

}
}


  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Proximamente
            {'\n\n'}
            Carrito de compras con mapa 
            
          </Text>
        </View>
        <Mapita></Mapita>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          se ve el mapita XD
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default TuCarrito;
