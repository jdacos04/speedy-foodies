import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { savePro, updatePro } from "../../../api";
import Layout from "../../Components/Layout";



const Additem =({navigator,route})=>{
const [pro, setPro]=useState({
  des:"",
  nombre:"",
  precio:"",
  local:""
})

const [editing, setEditing] = useState(false);

useEffect(() => {
  help()
    
}, []);






const handleSubmit = async () => {
  try {
    if (!editing) {
      await savePro(pro);
    } else {
      console.log(route.params.id, pro)
      await updatePro(route.params.id, {...pro});
    }
    navigator.navigate("Menu");
  } catch (error) {
    console.log(error);
  }
};

const handleChange = (name, value) => setPro({ ...pro, [name]: value })

const help =async()=>{
  const marcos=await AsyncStorage.getItem('local_id')
  console.log(parseInt(marcos))
  handleChange("local", marcos)
  
}


return(
  <Layout>
  <TextInput
    style={styles.input}
    placeholder="insertar  nombre"
    placeholderTextColor="#576574"
    value={pro.title}
    onChangeText={(text) => handleChange("nombre", text)}
  />

  <TextInput
    style={styles.input}
    placeholder="insertar descripcion "
    placeholderTextColor="#576574"
    value={pro.description}
    onChangeText={(text) => handleChange("des", text)}
  />
  <TextInput
    style={styles.input}
    placeholder="insertar precio "
    placeholderTextColor="#576574"
    value={pro.description}
    onChangeText={(text) => handleChange("precio", text)}
  />


  {!editing ? (
    <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
      <Text style={styles.buttonText}>guardar Porducto</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.buttonUpdate} onPress={handleSubmit}>
      <Text style={styles.buttonText}>Actualizar porducto</Text>
    </TouchableOpacity>
  )}
</Layout>
)



}

export default Additem

const styles = StyleSheet.create({
  input: {
    width: "90%",
    marginBottom: 7,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#10ac84",
    height: 30,
    color: "#ffffff",
    textAlign: "center",
    padding: 4,
    borderRadius: 5,
  },
  buttonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#10ac84",
    width: "90%",
  },
  buttonUpdate: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#e58e26",
    width: "90%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});