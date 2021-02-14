import React from 'react';
import {View , Text, StyleSheet} from 'react-native';

const SearchDetailScreen = ({navigation}) => {
    return (
        <View>
            <Text>
                This is detail screen {navigation.getParam('id')}.
            </Text>
        </View>
    )
}

export default SearchDetailScreen;