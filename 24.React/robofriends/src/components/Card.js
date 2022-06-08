// This file is called as JSX file.

import React,{ Component } from "react";

// const Card = (props) => {
const Card = ({ name , email , id }) => {
    // let link="https://robohash.org/"+props.id+"?200*200";
    // let { name , email , id } = props    // using this can use name,email , id directly in code as ES6 features.
    return (
        // Using tachyons in class tc=text center ,bg=background,dib=dislay inline block,br=border right,
        // pa=padding, ma-margin,grow-expand on hover , shadow

        <div class="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={ `https://robohash.org/${ id }?200*200` } alt="robot" />        
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>

    );

}

export default Card;