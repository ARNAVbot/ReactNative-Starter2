import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {withNavigation} from 'react-navigation';

// example to show how to get navigation in props without being passed from parent
// this is useful in cases , where we have a child at a very deep level and 
// we want to pass navigation from top to bottom
// see `export default withNavigation(SearchResultsScreen);` at bottom . This does all the work
const SearchResultsScreen = ({navigation}) => {
    return (
        <View>
            <Text>This is Search results Screen.</Text>
            <Button
                title= "Go to Counter screen"
                // navigatin to SearchDetailScreen and simultaneously passing in a param
                onPress={() => navigation.navigate('SearchDetail', {id: 1})}
            />
        </View>
    )
}

const styles = StyleSheet.create({});

export default withNavigation(SearchResultsScreen);