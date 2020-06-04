import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const Screen = () => {
    return <View>
        <Text style={styles.text} >Hi Ho</Text>
        <Text>Hi Ho</Text>
        <Text>Hi Ho</Text>
    </View>
}

const styles = StyleSheet.create({
    text:{
        fontSize:20
    }
})

export default Screen;