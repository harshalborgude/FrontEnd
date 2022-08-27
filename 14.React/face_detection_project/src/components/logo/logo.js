import React from "react";
import Tilt from 'react-tilt';
import './logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        // margine - 4 , margin-top = 0 
        <div className="ma4 mt0">
            {/* This titl related all things have copied from react tilt site  , 
                https://www.npmjs.com/package/react-tilt */}
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> 
                    <img style={{paddingTop:'7px'}} src={brain} alt="logo"/>
                </div>
            </Tilt>
        </div>
    );

}

export default Logo;