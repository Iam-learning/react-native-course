import React, {useState} from 'react';
import { Text, View, Button, StyleSheet, FlatList } from 'react-native';

const ColorScreen = () => {

    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button title='Add a Color' onPress={()=> {
                setColors([...colors, randomRgb()]);
            }}/>
            <FlatList 
                keyExtractor={(item) => item}
                data={colors}
                renderItem={ ({ item }) => {
                 return <View style={ {height: 100, width: 500, backgroundColor: item} }/>
                }}
            />
        </View>
    );

};


const styles = StyleSheet.create({});


const randomRgb = () => {

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;

};

export default ColorScreen;