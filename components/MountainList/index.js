// The FlatList is used to render the data provided from data.js. It usually both takes in an array of objects and a function. the keyExtractor gives each item a unique key. The last four in attribues in the FlatList are for making scrolling and fitting nice!
import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import data from './data';
import Mountains from '../mountains';

const MountainList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
            data={data}
            renderItem={({item}) => <Mountains mount={item} />}
            keyExtractor={(item, index) => index.toString()}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default MountainList