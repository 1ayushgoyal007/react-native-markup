import React from 'react';
import {View, Text, StyleSheet}  from 'react-native';

const ImageDetail = (props) =>{
    console.log(props);
    return <View>
        <Text>{props.title} hi</Text>
    </View>
}

const styles = StyleSheet.create({});

export default ImageDetail;

