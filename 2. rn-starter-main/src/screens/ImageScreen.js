import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from './components/ImageDetails';

const ImageScreen = () => {

    return( <View>

        <ImageDetail 
            imageSrc={require('../../assets/forest.jpg')} 
            imageName='Forest' 
            imageScore={9}
            />

        <ImageDetail 
            imageSrc={require('../../assets/beach.jpg')} 
            imageName='Beach' 
            imageScore={7}
            />

        <ImageDetail 
            imageSrc={require('../../assets/mountain.jpg')} 
            imageName='Mountain' 
            imageScore={23}
            />

    </View>
    );

}

const styles = StyleSheet.create({});

export default ImageScreen;