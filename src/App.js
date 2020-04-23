import React, { Component } from 'react';
import './index.css';
import AppHeader from './components/AppHeader';
import AppMenu from './components/AppMenu';
import MainChart from './components/MainChart';
import PersonalChart from './components/PersonalChart';


class App extends Component {
    constructor(){
      super()
      this.state = 
      {
        students:[
          {name: 'Melvin Verzaal', assignment:'W1D1', difficulty:'1', likeability:'1'},
          {name: 'Melvin Verzaal', assignment:'W1D2', difficulty:'1', likeability:'5'},
          {name: 'Melvin Verzaal', assignment:'W1D3', difficulty:'1', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W1D4', difficulty:'2', likeability:'3'},
          {name: 'Melvin Verzaal', assignment:'W1D5', difficulty:'3', likeability:'3'},
          {name: 'Melvin Verzaal', assignment:'W2D1', difficulty:'2', likeability:'3'},
          {name: 'Melvin Verzaal', assignment:'W2D2', difficulty:'5', likeability:'3'},
          {name: 'Melvin Verzaal', assignment:'W2D3', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W2D4', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W2D5', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W2D1', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W2D2', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W2D3', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W2D4', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W2D5', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W3D1', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W3D2', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W3D3', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W3D4', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W3D5', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W4D1', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W4D2', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W4D3', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W4D4', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W4D5', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W5D1', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W5D2', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W5D3', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W5D4', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W5D5', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W6D1', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W6D2', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W6D3', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W6D4', difficulty:'4', likeability:'4'},
          {name: 'Melvin Verzaal', assignment:'W6D5', difficulty:'4', likeability:'4'},
          ]      
        }
  
    }
    
    
    
    render(){
        return (
            <div>
            <AppHeader/>
            <AppMenu data={this.state}/>
            <MainChart data={this.state}/>
            <PersonalChart data={this.state}/>
            </div>
        )
    }
}
    export default App;