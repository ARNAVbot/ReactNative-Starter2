//createStackNavigator automatically shows different screens upon navigation and also
// adds a header to each one of them by default
import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchDetailScreen from './src/screens/SearchDetailScreen';
import SearchResultsScreen from './src/screens/SearchResultsScreen';
import SearchScreen from './src/screens/SearchScreen';
import React from 'react';
// we have imported BlogPRovider in the below line. 
// It is important to mention this in curly bracket as we have not imported the 
// default import on this BlogProvider. Hence ,we need to explicity mention this.
import { BlogProvider} from './src/context/BlogContext';

const navigator = createStackNavigator({
  // we list down all our possible routes here
    Search: SearchScreen,
    SearchResult: SearchResultsScreen,
    SearchDetail: SearchDetailScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    //used to customize the header on each screen
    title: 'Business Search'
  }
});

const App = createAppContainer(navigator);

//App.js is a very special file. Whatever is exported from it is used to show on screen.
// It must also return a react-component only. Since, we dont have a component yet,
// instead we have a navigator. Hence, we pass that to createAppContainer which creates
// a react-component out of the navigator.
export default () => {
  return <BlogProvider>
    <App/>
    </BlogProvider>;
};