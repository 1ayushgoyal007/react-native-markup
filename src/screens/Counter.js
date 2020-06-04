import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return <View>
        <Button title="increase" onPress={()=>setCounter(counter+1)} />
        <Button title="decrease" onPress={()=> setCounter(counter-1)} />
        <Text>Current Counter:{counter}</Text>

    </View>
}

var styles = StyleSheet.create({});

export default Counter;