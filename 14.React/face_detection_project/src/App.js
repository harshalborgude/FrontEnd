import React ,{Component} from 'react';
// import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js'
import Logo from './components/logo/logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';

// import { render } from 'react-dom';

// const app = new Clarifai.App({
//   apiKey : '330514646ac54d7982ddc607cf701275'
// });

const pariclesOptions = {
    particles: {
      number: {
        value : 30,
        density:{
          enable:true,
          value_area: 800
        }
      }
    }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      input : "",
      imageUrl : "",
      box : {},
      route : 'signIn',
      isSignedIn : false
    }
  }

  onInputChange = (event) => {
      // console.log(event.target.value);
      // this.state.input=event.target.value;
      this.setState({input: event.target.value});
  }

  onButtonSubmit = (event) => {
    // console.log('click');
    this.setState({imageUrl: this.state.input})
    // console.log(this.state.imageUrl);
    // app.models.predict("330514646ac54d7982ddc607cf701275","https://samples.clarifai.com/face-det.jpg").then(
    // app.models.predict(Clarifai.FACE_DETECT_MODEL,"https://samples.clarifai.com/face-det.jpg").then(
    //   function(response){
    //     console.log(response);
    //   },
    //   function(err){

    //   }
    // );
  }

  onRouteChange = (route) => {
    console.log("pre route :"+this.state.route+" isSignedIn :"+this.state.isSignedIn+ " ,route :"+route);
    if(route === 'signIn'){
      this.setState({isSignedIn : false});
    } else if(route === 'home'){
      this.setState({isSignedIn : true});
    }
    this.setState({ route : route});
    console.log("after route :"+this.state.route+" isSignedIn :"+this.state.isSignedIn);
  }

  render(){
    // const {imageUrl,box,route ,isSignedIn} = this.state;     // destucturing vars to avoid this.state everywhere.
    return (
      <div className="App">
        {/* This particles is taken from react particles library , will act as a background for project */}
        {/* <Particles className='particles'
          // particles need props params , particlesOptions is a object with required params , being passed.
          params={pariclesOptions} 
        /> */}
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        {
          this.state.route === 'home' 
          ? <div>
              {/* The below empty braces are called react fragment. */}
              <Logo />
              <Rank />
              {/* Passing OnInputChange method to imageLinkForm */}
              <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition imageUrl={this.state.imageUrl}/>

            </div>
          : ( 
              this.state.route === 'signIn' 
              ? <SignIn onRouteChange={this.onRouteChange}/> 
              : <Register onRouteChange={this.onRouteChange}/> 
              
            )
          }
      </div>
    );
 }
}

export default App;
