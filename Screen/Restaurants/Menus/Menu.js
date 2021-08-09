import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import {Text,View,Image,TextInput, FlatList ,StatusBar,StyleSheet, Button} from 'react-native'

const url='http://192.168.1.108:4000/productos'

import ListaP from '../../Components/ListaP'
import Layout from '../../Components/Layout'

const Menu=(props)=>{


  return(
    <Layout>
    <ListaP/>
  </Layout>
)
}




export default  Menu;