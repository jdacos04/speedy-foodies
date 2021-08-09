import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Alert, RefreshControl } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import RestCard from './RestCard'                  
import { getAllPro,getAllResta} from "../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";



const RestList =({navigation})=>{
const [resta,setResta] =useState([]);
const [refreshing, setRefreshing] = React.useState(false);
const isFocused = useIsFocused();


const getList= async() =>{
    try{
    const resta = await getAllResta();
    setResta(resta);
    }catch(e){
        console.log(e);
    } 
};


const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    // wait(2000).then(() => setRefreshing(false));
    await getList();
    setRefreshing(false);
  }, []);


  

 useEffect(()=>{
     getList();
     
     console.log("se muuestra la lista");
 },[isFocused]);

 const renderItem = ({ item }) => (
    <RestCard resta={item}  />

  );

return(
    <SafeAreaView style={{ flex: 1, width: "90%" }}>
    <FlatList
      data={resta}
      renderItem={renderItem}
      keyExtractor={(item) => item.id_local.toString()}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["#78e08f"]}
          progressBackgroundColor="#0a3d62"
        />
      }
    />
  </SafeAreaView>
    
)







}
export default RestList