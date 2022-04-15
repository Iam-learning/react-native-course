import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';



const TextScreen = () => {

    const [password, setPassword] = useState('');

    return <View style={styles.container}>
        <Text>Enter Password:</Text>
        <TextInput 
            style={styles.input}
            autoCapitalize= 'none'
            autoCorrect={false}
            value= {password}
            onChangeText={(newValue) => setPassword(newValue)}
        />

    {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}

    </View>

};

const styles = StyleSheet.create({
    


    input: {
        margin:20,
        padding:6,
        height: 40,
        borderColor:'black',
        borderWidth: 1.5,
        color: 'black'

    },

});

export default TextScreen;