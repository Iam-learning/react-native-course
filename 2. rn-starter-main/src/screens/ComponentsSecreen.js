import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

const name = 'Skidee';

const ComponentsScreen = () => {

    return <View>
        <Text style={styles.textStyle}>Getting started with react native!</Text>
        <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>

};

const styles = StyleSheet.create({

    textStyle: {
        fontSize: 45
    },

    
    subHeaderStyle: {
        fontSize: 20
    }

});



export default ComponentsScreen;