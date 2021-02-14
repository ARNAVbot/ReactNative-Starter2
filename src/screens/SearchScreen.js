// useContext basically helps in finding a context object and getting value form it.
import React , {useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Feather} from '@expo/vector-icons';
import useResults from '../hooks/useResults';
import SearchResultsScreen from './SearchResultsScreen';
import BlogContext from '../context/BlogContext';

const SearchScreen = () => {
    const [results, sampleFunction] = useResults();
    // this is how we retrieve the value from a contextProvider
    const blogPosts = useContext(BlogContext);
    // console.log(blogPosts);
    
    return (
        <View style={style.parentStyle}>
            {/* the below line is to show icon */}
            <Feather name="search" size={30}/>
            <Text>{blogPosts[0].title}</Text>
            {/* <FlatList 
                data={blogPosts}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    console.log(item.title)
                    return <Text>{item.title}</Text>;
                }}
            /> */}
            <Text> {results}</Text>
            <SearchResultsScreen/>
        </View>
    )
}

const style = StyleSheet.create({
    parentStyle: {
        height: 50,
        flexDirection:'column'
    }
});

export default SearchScreen;