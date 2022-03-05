import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text style={styles.heading}>Current Count: {counter}</Text>

      <Button
        title="Increase"
        onPress={() => {
          // Don't do this!
          // counter++;
          // counter = counter + 1;
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    fontSize: 50,
  },

});

export default CounterScreen;