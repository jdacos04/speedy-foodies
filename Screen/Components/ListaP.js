import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Alert, RefreshControl } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import ProCard from './ProCard'                  
import { getAllPro,addCard } from "../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";



const ListaP =({navigation})=>{
const [pro,setPro] =useState([]);
const [refreshing, setRefreshing] = React.useState(false);
const isFocused = useIsFocused();



const getList= async() =>{
    try{
    const pro = await getAllPro();
    setPro(pro);
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


  const handleAdd = (id) => {
    Alert.alert("seguro que lo quiere anadir ", "estas seguro?", [
      {
        text: "NO",
        style: "cancel",
      },
      {
        text: "SI",
        onPress: async () => {()=>navigation.navigate('TuCarrito')
         await addCard(id);
        },
      },
    ]);
  };

 useEffect(()=>{
     getList();
     
     console.log("se muuestra la lista");
 },[isFocused]);

 const renderItem = ({ item }) => (
    <ProCard pro={item} handleAdd={handleAdd} />

  );

return(
    <SafeAreaView style={{ flex: 1, width: "90%" }}>
    <FlatList
      data={pro}
      renderItem={renderItem}
      keyExtractor={(item) => toString(item.id_item)}
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
export default ListaP