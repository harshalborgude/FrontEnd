import React, {Component} from "react";
import './HelloTemp.css';

// Component always have render method , its a standard
class HelloTemp extends Component {
    render(){
        return (
            // tc means text center is a class of tachyons, will center the text and font will be f1. 
            <div className='f1 tc'>
                <h1>Hello World!</h1>
                <p>{this.props.greeting}</p>

            </div>
        
        )
    }
}



// Another way of writting a function
// const Hello = (props) => {

//     return (
//         // tc means text center is a class of tachyons, will center the text and font will be f1. 
//         <div className='f1 tc'>
//             <h1>Hello World!</h1>
//             <p>{props.greeting}</p>

//         </div>

//     )

// }

export default Hello;