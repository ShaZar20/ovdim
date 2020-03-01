import React from 'react';
import Type1 from './Type1';
import Type2 from './Type2';
import Type3 from './Type3';
import Type4 from './Type4';
import Type5 from './Type5';

const Main = () => {
    switch(props.type) {
        case 1: return <Type1 />
        case 2: return <Type2 /> 
        case 3: return <Type3 />
        case 4: return <Type4 />
        case 5: return <Type5 />
    }
};