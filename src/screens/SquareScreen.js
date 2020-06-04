import React, {useState} from 'react';
import {Text, View,Button, StyleSheet, FlatList} from 'react-native';
import ColorCounter from './components/ColorCounter';
const SquareScreen = () =>{

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);



    return <View >
        <ColorCounter 
        onIncrease = {()=>{
            if((red+1) <= 255){
            setRed(red+10)
            }
        }}
        onDecrease = {()=>{
            if((red-1) >= 0){
            setRed(red-1)
            }
        }}
        color="red" /> 
        <ColorCounter 
        color="green"

        onIncrease = {()=>{
            setGreen(green+1)
        }}
        onDecrease = {()=>{
            setGreen(green-1)
        }}
        /> 
        <ColorCounter 
        color="blue"
        onIncrease = {()=>{
            setBlue(blue+1)
        }}
        onDecrease = {()=>{
            setBlue(blue-1)
        }}
        /> 
        <View 
        style={{ height:100, width:100, backgroundColor: `rgb(${red},${green},${blue})` }} />
    </View>
}

 

var styles = StyleSheet.create({});

export default SquareScreen;