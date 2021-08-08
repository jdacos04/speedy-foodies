import React from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet, Button} from 'react-native';

const st=StyleSheet.create({
    text:{
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 16,

    }
})

const Perfil = (props) => {
    return (
      <SafeAreaView style={{flex: 1,}}>
        <View style={{flex: 1, padding: 16}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              
            }}>

            <Image
            style={{width:100, height: 100,borderRadius:50}}
            source={require('../../assets/img/logo.png')}/>
            <Text
              style={st.text}>
              UserName
            </Text>
            <Text
            style={st.text}>Email</Text>
            <Text
            style={st.text}>telf</Text>
             <Text
            style={st.text}>saldo</Text>
            </View>

            <View style={{
                      flexDirection : 'row',
                      alignItems:'center',
                      marginHorizontal:50,
                      borderWidth:2,
                      marginTop:100,
                      justifyContent:"center",
                      backgroundColor:"#C9B6E4",
                      borderRadius:23,
                      paddingVertical:2
                }}>
        <Text onPress={() => props.navigation.navigate('Recargasaldo')}>Recarga saldo</Text>

        
       
      </View>
      <View style={{
                      flexDirection : 'row',
                      alignItems:'center',
                      marginHorizontal:50,
                      borderWidth:2,
                      marginTop:100,
                      justifyContent:"center",
                      backgroundColor:"#C9B6E4",
                      borderRadius:23,
                      paddingVertical:2
                }}>
        <Text onPress={() => props.navigation.navigate('Editperfil')}>Editar Perfil</Text>

        
       
      </View>
      <View style={{
                      flexDirection : 'row',
                      alignItems:'center',
                      marginHorizontal:50,
                      borderWidth:2,
                      marginTop:100,
                      justifyContent:"center",
                      backgroundColor:"red",
                      borderRadius:23,
                      paddingVertical:2
                }}>
      <Text
          title="LogOut"
          onPress={() => Alert.alert('Right button pressed')}
>LOGOUT</Text>
      </View >
          
        </View>
      </SafeAreaView>
    );
  };
  
  export default Perfil;
  