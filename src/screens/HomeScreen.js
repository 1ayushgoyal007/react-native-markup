import React from "react";
import { Text, StyleSheet, View, Button,TouchableOpacity } from "react-native";


const HomeScreen = ({navigation}) => {

  
  return <View>
  <Text style={styles.text}>Hi there </Text>
  <Button 
  title="Go to Components Demoe"
  onPress={()=>navigation.navigate("Screen")}
    />

  <Button title="Go to List (Does not Exist)" />

  <Button 
  title="Go to Image Screen"
  onPress={()=>navigation.navigate("ImageScreen")}
  />

  <Button 
  title = "Go to Counter"
  onPress={()=>navigation.navigate("Counter")}
  />

  <Button 
  title="Go to Color Screen"
  onPress={()=>navigation.navigate("ColorScreen")}
  />
  <Button
  title="Go to SquareScreen"
  onPress = {()=>navigation.navigate("SquareScreen")}
  />
  <Button 
  title = "Try Input"
  onPress = {()=>navigation.navigate("Input")}
  />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
});

export default HomeScreen;

