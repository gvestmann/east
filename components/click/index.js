import React from 'react';
// View, Text components like always from React Navite. And also Pressable for clicking buttons!
import {View, Text, Pressable} from 'react-native';
// CSS styles from Click components
import styles from '../click/styles';

// This arrow function is exported below and features stuff for the button
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