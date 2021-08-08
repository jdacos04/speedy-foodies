import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import {Text,View,Image,TextInput, FlatList ,StatusBar,StyleSheet, Button} from 'react-native'
import ItemP from '../../Components/ItemP'

const url='http://192.168.1.108:4000/productos'

const Menu=(props)=>{


  return(
 
 <View>
   {/* <Text>Bienbenido a x restaurant</Text>
    <Text
  onPress={() => props.navigation.navigate('Menu')}
   >
      productos xd
  </Text> */}
  <View style={{ flex: 0.1, marginTop:20}}>
<Text>holi</Text>
  
  
  
  </View>
  </View>
)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default  Menu;