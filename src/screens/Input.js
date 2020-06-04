import React,{useState} from 'react';
import {View, StyleSheet, Button,Text ,TextInput} from "react-native";


const Input = () =>{

    const [name,setName] = useState("");

    return <View>
        <TextInput
        style={styles.text}
        value={name}
        autoCapitalize = "none"
        autoCorrect = {false}
        onChangeText={(item)=>setName(item)}
        />

        <Text>Your Name is: {name}</Text>


        {name.length > 5 ? null : <Text>Should be greater than 5</Text>}
    </View>
}


var styles = StyleSheet.create({
    text:{
        margin:15,
        borderColor:"black",
        borderWidth:2
        
    }
})

export default Input;