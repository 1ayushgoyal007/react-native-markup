import React, {useState} from 'react';
import {Text, View,Button, StyleSheet, FlatList} from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) =>{
    return <View >
        <Text>{color}</Text>
        <Button 
        title = {`increase ${color} `}
        onPress= {()=> onIncrease()}
        />
        <Button 
        title = {`Decrease ${color}`} 
        onPress = {()=>onDecrease()}
        />
    </View>
}



var styles = StyleSheet.create({});

export default ColorCounter;