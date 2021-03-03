// I import basic stuff from React & React Native + image module and stylesheet. Below is the arrow function which returns the header with the logo as image.

import React from 'react'
import {View, Image} from 'react-native';
import styles from './styles';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/icon.png')} />
        </View>
    );
};

export default Header;