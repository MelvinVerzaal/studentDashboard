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
          {id:1, name: 'Storm', assignment:'W1D1', difficulty:'2', likeability:'3'},
          {id:1, name: 'h8ans', assignment:'W1D2', difficulty:'2', likeability:'3'},
          {id:1, name: 'h8ans', assignment:'W1D3', difficulty:'2', likeability:'3'},
          {id:1, name: 'h8ans', assignment:'W1D4', difficulty:'2', likeability:'3'},
          {id:1, name: 'h8ans', assignment:'W1D5', difficulty:'2', likeability:'3'},
          {id:1, name: 'h8ans', assignment:'W1D6', difficulty:'2', likeability:'3'},
          {id:1, name: 'h8ans', assignment:'W1D7', difficulty:'2', likeability:'3'},
          {id:1, name: 'h8ans', assignment:'W1D8', difficulty:'2', likeability:'3'},
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