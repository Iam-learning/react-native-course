import React, {useState} from 'react';
import { Text, View, Button, StyleSheet, FlatList } from 'react-native';
import ColorCounter from './components/ColorCounter';

const COLOR_INCREMENT = 20;

const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);


    return (
        <View>
            <Text style={styles.heading}> Color Maker </Text>

            <ColorCounter 
                color='Red' 
                onIncrease = {() => setRed( red + COLOR_INCREMENT )}
                onDecrease = {() => setRed( red - COLOR_INCREMENT )}
            />

            <ColorCounter 
                color='Blue' 
                onIncrease = {() => setBlue( blue + COLOR_INCREMENT )}
                onDecrease = {() => setBlue( blue - COLOR_INCREMENT )}
            />

            <ColorCounter 
                color='Green' 
                onIncrease = {() => setGreen( green + COLOR_INCREMENT )}
                onDecrease = {() => setGreen( green - COLOR_INCREMENT )}
            />

            <Text> Colors: </Text>

        <View style={{ height: 150, width: 500, backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />

        </View>
    );

};


const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
        fontSize: 46,
        textDecorationLine: 'underline',
        margin: 10,
    }
});



export default SquareScreen;