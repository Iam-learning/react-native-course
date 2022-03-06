import React, {useState} from 'react';
import { Text, View, Button, StyleSheet, FlatList } from 'react-native';

const ColorCounter = ( {color, onIncrease, onDecrease} ) => {
    
    return (
        <View>
            <Text>{color}</Text>
            <Button 
                onPress={ () => onIncrease() }
             // its like writing
              //onPress={ () => setRed( red+1 ) }
                title= {`Increase ${color}`} 
            />

            <Button 
                onPress={ () => onDecrease() }
                title= {`Decrease ${color}`}
            />

        </View>
    );

};


const styles = StyleSheet.create({});



export default ColorCounter;