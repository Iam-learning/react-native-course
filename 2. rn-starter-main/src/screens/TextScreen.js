import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {

    return <View>
        <TextInput 
            style={styles.input}
            autoCapitalize= 'none'
            autoCorrect={false}
            value= "hi there"
        />
    </View>

};

const styles = StyleSheet.create({
 
    input: {
        margin:20,
        padding:3,
        height: 40,
        borderColor:'black',
        borderWidth: 1,

    },

});

export default TextScreen;