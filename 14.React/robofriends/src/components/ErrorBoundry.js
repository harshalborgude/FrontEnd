import React,{ Children, Component } from "react";

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    // Similar like try catch block
    componentDidCatch(error,info){
        this.setState({hasError:true});
    }

    render(){
        if( this.state.hasError ){
            return <h1>Oooops... Something went wrong !</h1>
        }
        // Children is anything that is withing ErrorBoundry.
        return this.props.children;

    }


}

export default ErrorBoundry;