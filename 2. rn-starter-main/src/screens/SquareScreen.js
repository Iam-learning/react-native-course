import React, {useState} from 'react';
import { Text, View, Button, StyleSheet, FlatList } from 'react-native';
import ColorCounter from './components/ColorCounter';

const SquareScreen = () => {

    return (
        <View>
            <ColorCounter color='Red' />
            <ColorCounter color='Blue' />
            <ColorCounter color='Green' />
        </View>
    );

};


const styles = StyleSheet.create({});



export default SquareScreen;