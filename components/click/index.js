// Pressable module is for making the button. It takes in props from data.js: the buttons content and a function to open up the external link.
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from '../click/styles';

// This arrow function is exported below and features stuff - or props - for the button 
const Button = (props) => {

    const content = props.content;
    const onPress = props.onPress;

    return (
    <View style={styles.container}>
        <Pressable
        style={styles.button}
        onPress={() => onPress()}
            >
                <Text style={styles.text}>{content}</Text>
        </Pressable>
    </View>
    );
};

export default Button