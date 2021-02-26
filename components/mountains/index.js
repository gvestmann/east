import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';

const Mountain = (props) => {
    return (
        <View style={styles.MountainContainer}>
            <ImageBackground source={require('../../assets/images/dyrfjoll2.jpg')} style={styles.img}></ImageBackground>
            <View style={styles.title}>
                <Text style={styles.name}>DYRFJÖLL</Text>
                <Text style={styles.location}>Borgarfjörður Eystri</Text>
            </View>
      </View>
    );
};

export default Mountain;