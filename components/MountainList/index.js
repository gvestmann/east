// Standard components + FlatList
import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import data from './data';
import Mountains from '../mountains';

const MountainList = (props) => {
    return (
        <View style={styles.container}>
            {/* FlatList requires attribute data + renderItem which requires a function  */}
            <FlatList
            data={data}
            renderItem={({item}) => <Mountains mount={item} />}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default MountainList