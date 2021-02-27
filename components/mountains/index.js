import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import Click from '../click';

const Mountain = (props) => {
    return (
        <View style={styles.mountainContainer}>
            <ImageBackground source={require('../../assets/images/dyrfjoll2.jpg')} style={styles.img} />
            <View style={styles.title}>
                <Text style={styles.name}>DYRFJÖLL</Text>
                <Text style={styles.location}>Borgarfjörður Eystri</Text>

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