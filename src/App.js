import React from 'react';
import './style/App.css';
import { GameDex } from './components/GameDex.js';
import { Footer } from './components/Footer';
import { Create } from './components/Create';
import {Header} from "./components/Header";
import {Notepad} from "./components/Notepad";



export default class App extends React.Component {
  constructor() {
    super()
    console.log("test")
  }
  
  render() {

    return (
      <div className="App">
          <Header />
          <Create />
          <GameDex />
          <Footer />
      </div>
    )
  }
}
