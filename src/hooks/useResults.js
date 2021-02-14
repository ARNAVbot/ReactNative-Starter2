// import { useEffect } from "react";
import {useEffect, useState } from 'react';

// how to 'hooks' example ! 
export default () => {
    const [results, setResults] = useState('');

    const sampleFunction = searchTerm => {
        setResults(`hi ${searchTerm}`);
    }

    // ----------this works just like useState
    // useEffect(() => {
    //     sampleFunction('Arnav');
    // });

    // this works in a similar fashion to useState
    // difference being that this re-renders just 1 time and then forgets.
    useEffect(() => {
        sampleFunction('Arnav');
    },[]);

    // ------this works in a similar fashion to useState
    // -------difference being that this re-renders only when sampleVariable changes
    // useEffect(() => {
    //     sampleFunction('Arnav');
    // },[$sampleVariable]);

    return [results, sampleFunction];
}