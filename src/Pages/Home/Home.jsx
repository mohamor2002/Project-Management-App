import React from 'react';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import { useState } from 'react';
import { useEffect } from 'react';

function Home(props) {
    const i=1
    const [name,setName] = useState(true)
    function updateNum(){
        setName(!name)
    }
    return (
        <div>
            <NavigationBar title="Fadhel"></NavigationBar>
            <button onClick={updateNum}>{name?'moh':'fadhel'}</button>
        </div>
    );
}
export default Home;