import React,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/signin/signin';
import Register from './components/register/register';


class App extends Component {
  constructor(){
    super();
    this.state ={
      input: '',
      imageurl:'',
      route: 'signin',
      isSignedIn:false
    }
  }

  onInputChange = (event) =>{
     this.setState({input: event.target.value})
  }
  OnButtonSubmit = ()=>{
    this.setState({imageurl: this.state.input})
    console.log('click')
  }
  onButtonDelete = () =>{
    this.setState({input:'',imageurl:''})
  }
  onRouteChange = (route) =>{
    if (route === 'signout'){
      this.setState({isSignedIn:false})
    }else if(route === 'home'){
      this.setState({isSignedIn:'true'})
    }
    this.setState({route:route})
  }

  render(){
    const {isSignedIn,imageurl,route} = this.state
    return(
          <div className="App">
            <Navigation isSignedin={isSignedIn} onRouteChange={this.onRouteChange} />
            { route === 'home'?
            <div><Logo/>
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} OnButtonSubmit={this.OnButtonSubmit} onButtonDelete={this.onButtonDelete} />
            <FaceRecognition imageurl = {imageurl} /></div>
             
             :(
               route === 'signin'?<Signin onRouteChange={this.onRouteChange} />
               :<Register onRouteChange={this.onRouteChange} />
             )
            }

           </div>
    )
  }
} 


export default App;
