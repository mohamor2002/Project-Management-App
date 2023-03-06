import React from 'react';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import { useState } from 'react';
import { useEffect } from 'react';

function Home(props) {
    const [count,setCount] = useState(0)
    function updateNum(){
        setCount(count+1)
    }
    return (
        <div>
            <NavigationBar title="Fadhel"></NavigationBar>
            <button onClick={updateNum}>+1+12°02864730</button>
            <div>{count}</div>
        </div>
    );
}
export default Home;