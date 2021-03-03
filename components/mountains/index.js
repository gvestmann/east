// Basic stuff, styles + ImageBackground for moutain images, Linking to open up URL in browser. Also the click components is imported.
import React from 'react';
import {View, Text, ImageBackground, Linking} from 'react-native';
import styles from './styles';
import Click from '../click';

const Mountain = (props) => {

    const {name, location, image, url} = props.mount;

    return (
        <View style={styles.mountainContainer}>
            <ImageBackground source={image} style={styles.img} />
            <View style={styles.title}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.location}>{location}</Text>
            </View>
        <View style={styles.clickWrapper}>
            <Click 
                content={"VISIT ME"} 
                onPress={() => {
                   Linking.openURL(url);
                }}
                    />
        </View>
    </View>
    );
};

export default Mountain;