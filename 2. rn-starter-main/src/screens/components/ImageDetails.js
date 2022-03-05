import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = ( { imageName, imageSrc, imageScore } ) => {
    return (<View>
        <Text>{imageName}</Text>
        <Image source={imageSrc}/>
        <Text>Image Score : {imageScore}</Text>
        <Text>--------------------------------</Text>
    </View>
    );

}

const styles = StyleSheet.create({});

export default ImageDetail;

// ------------------------------------OLD CODE-------------------------------------------
// import React from 'react';
// import { Text, View, StyleSheet, Image } from 'react-native';

// const ImageDetail = (props) => {
//     return (<View>
//         <Text>{props.imageName}</Text>
//         <Image source={props.imageSrc}/>
//         <Text>Image Score : {props.imageScore}</Text>
//         <Text>--------------------------------</Text>
//     </View>
//     );

// }

// const styles = StyleSheet.create({});

// export default ImageDetail;
