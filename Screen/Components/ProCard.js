
import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";



const ProCard=({pro, handleAdd})=>{
  console.log(pro)

 return (

<View style={styles.itemContainer}>
     <TouchableOpacity     onPress={() => navigation.navigate("HomeScreean", { id: pro })}
     >
     <Text style={styles.itemTitle}>{pro.tem_nombre}</Text>
     
     <Text style={{ color: "white" }}>{pro.iten_descripcion}</Text>
     <Text style={{ color: "green" }}>{pro.item_precio} $</Text>
     </TouchableOpacity>
     <TouchableOpacity
       style={{ backgroundColor: "green", padding: 7, borderRadius: 5 }}
       onPress={() => handleAdd(pro.id_item)}
     >
       <Text style={{ color: "white" }}> [+]</Text>
     </TouchableOpacity>
 </View>
)  ;
};
export default ProCard;


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