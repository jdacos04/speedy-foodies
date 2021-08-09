import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";



const RestCard=({resta, handleAdd})=>{
    const navigation = useNavigation();

 return (

<View style={styles.itemContainer}>
     <TouchableOpacity     onPress={() => navigation.navigate("Menu", { id: resta })}
     >
     <Text style={styles.itemTitle}>{resta.local_nombre}</Text>
     
     
     </TouchableOpacity>
     
 </View>
)  ;
};
export default RestCard;


const styles = StyleSheet.create({
     itemContainer: {
       
       backgroundColor: "#C9B6E4",
       padding: 20,
       marginVertical: 8,
       flexDirection: "row",
       justifyContent: "space-between",
       alignItems: "center",
       borderRadius: 5,
     },
     itemTitle: {
      fontSize:24,
       color: "#000000",
     },
   });