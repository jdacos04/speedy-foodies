import React from 'react'
import {StyleSheet,Text,View} from 'react-native'


const ItemP =(props)=>(
    <View style={styles.cardView}>
    <Text style={{textTransform: 'uppercase', fontWeight:'bold'}}>
          {props.nombre}
    </Text>
    <Text style={{textTransform: 'uppercase'}} >
         {props.des}
    </Text> 
    <Text style={{textTransform: 'uppercase', color:'green'}} >
         {props.percio}
    </Text> 
    <View style={{flexDirection:'row-reverse'}}>
   </View>

</View>
);

const styles = StyleSheet.create({
 cardView: {
     backgroundColor: "white",
     borderRadius: 20,
     marginVertical:5,
     padding: 35,
     shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 2
     },
     shadowOpacity: 0.25,
     shadowRadius: 3.84,
     elevation: 5
   }

});

export default ItemP;
