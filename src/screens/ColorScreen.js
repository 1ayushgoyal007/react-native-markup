import React, {useState} from 'react';
import {Text, View,Button, StyleSheet, FlatList} from 'react-native';

const ColorScreen = () => {

const [colors,setColors] = useState([]);
console.log("color",colors);
return <View>
    <Button
    title="Add a Color" 
    onPress={()=>{
        setColors([...colors, random()])
    }} />

    <FlatList
    data = {colors}
    keyExtractor={(item)=>item}
    renderItem={({ item })=>{
        return <View style={{ height:100, width:200, backgroundColor: item }} />
    }}

    />
</View>
}

const random = () =>{
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return `rgb( ${red}, ${green} , ${blue} )` ;
}

const styles = StyleSheet.create({});

export default ColorScreen;