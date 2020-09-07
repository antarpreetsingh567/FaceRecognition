import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain1.png';
import './Logo.css'

const Logo = () =>{
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 170, width: 150 }} >
 <div className="Tilt-inner" pa3="true"> <img style={{paddingTop:'0px'}} alt='logo' src={brain}/> </div>
</Tilt>

        </div>

    );
}

export default Logo;