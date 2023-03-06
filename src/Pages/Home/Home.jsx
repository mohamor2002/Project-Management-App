import React from 'react';
import { useState } from 'react';
function Home(props) {
    const [count,setCount]=useState(0)
    function updateNum(){
        setCount(count+1)


    }
    return (
        <div>
            <button onClick={updateNum}>3abez</button>
            <div>{count}</div>
        </div>
    );
}

export default Home;