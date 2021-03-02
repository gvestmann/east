import React from 'react';
// View, Text components like always from React Navite. And also Pressable for clicking buttons!
import {View, Text, Pressable} from 'react-native';
// CSS styles from Click components
import styles from '../click/styles';

// This arrow function is exported below and features stuff - or props - for the button 
const Button = (props) => {

    // Props for the button's text
    const content = props.content;
    // Props for the button's onclick event
    const onPress = props.onPress;

    // Her the button is returned as desired
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