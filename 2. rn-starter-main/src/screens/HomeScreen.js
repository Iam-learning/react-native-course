import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return <View>
  <Text style={styles.text}>lowsensi</Text>
  <Button 
    onPress={() => navigation.navigate('Components')}
    title="Components Demo"
  />
  <Button
    title='List Demo'
    onPress={() => navigation.navigate('List')}
  />

  {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
    <Text>Go to List Demo</Text>
    <Text>Go to List Demo</Text>
    <Text>Go to List Demo</Text>
  </TouchableOpacity> */}

  <Button
    title='Image Demo'
    onPress={() => navigation.navigate('Image')}
  />

  <Button 
    title='Counter'
    onPress={()=> navigation.navigate('Counter')}
  />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
});

export default HomeScreen;
