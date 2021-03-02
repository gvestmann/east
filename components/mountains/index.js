import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import Click from '../click';

const Mountain = (props) => {

    const {name, location, image} = props.mount;

    return (
        <View style={styles.mountainContainer}>
            <ImageBackground source={image} style={styles.img} />
            <View style={styles.title}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.location}>{location}</Text>
            </View>
        <View style={styles.clickWrapper}>
            <Click 
                content={"Nope"} 
                onPress={() => {
                    console.warn("I was pressed")
                }
                }
                    />
        </View>
    </View>
    );
};

export default Mountain;