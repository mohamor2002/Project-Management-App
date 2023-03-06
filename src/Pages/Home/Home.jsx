import React from 'react';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import { useState } from 'react';
import { useEffect } from 'react';

function Home(props) {
    const [count,setCount] = useState(0)
    function updateNum(){
        setCount(count+1)
    }

    const [name,setName]=useState(true)
    function updateName(){
        setName(!name)
    }
    function print(){
    if(name) {
        return 'fadhel'
    }
    else{
        return 'mkhkhkhkhk'
    }}
    return (
        <div>
            <NavigationBar title="Fadhel"></NavigationBar>
            <button onClick={updateName}>{print()}</button>
        </div>
    );
}
export default Home;