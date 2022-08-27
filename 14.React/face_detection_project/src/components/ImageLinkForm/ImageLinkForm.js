import React from "react";
import { render } from "react-dom";
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange,onButtonSubmit}) => {
    return (
        <div>
            <p className="f3">
                {'This magic brain will detect faces in your pictures , give it a try.'}
            </p>
            <div  className="center">
                {/* padding 4 , border radious 3 , shaodow 3 */}
                <div className="form center pa4 br3 shadow-4">
                    {/* font size 4 , padiing 2 , width 70 per , center allign */}
                    <input className="f4 pa2 w-70 center" type='text' onChange={onInputChange}/>
                    {/* width 30 per , grow upon hover , font size 4 ,text clr white,  link , light purple background  */}
                    <button 
                        className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
                        onClick={onButtonSubmit}
                        >Detect</button>
                </div>
                
            </div>
        </div>
    );
}

export default ImageLinkForm;