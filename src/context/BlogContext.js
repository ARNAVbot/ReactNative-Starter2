import React from 'react';

// example of sharing a common data provider for the entire app
const BlogContext = React.createContext();

// this children property below just means that this component will receive another
// component as a prop and this BlogProvider will just display as it is. 
// This BlogProvider is basically used in App.js

// Also, to note is that this BlogProvider is wrapped around all the components that will 
// be displayed. 

// Provider object on BlogContext basically helps in moving information around to the children
// also, note that the below export does not have default keyword.
export const BlogProvider = ({children}) => {
    const blogPosts = [
        {title: 'Blog Post #1'},
        {title: 'Blog Post #2'}
    ]
    return <BlogContext.Provider value={blogPosts}>
        {children}
    </BlogContext.Provider>;
};

export default BlogContext;