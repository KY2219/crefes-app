import React, { Component } from 'react';
import './App.css';

//import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
//import Typography from '@material-ui/core/Typography';
//import Modal from '@material-ui/core/Modal';
//import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <header className="App-header">
          <p class="login">
            人狼ゲーム（仮）
          </p>
          
          <a
            className="start-link"
            href="https://ruru-jinro.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ゲームを始める
          </a>
          <a
            className="rule-link"
            href="file:///C:/crefes/crefes-app/info01.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            人狼の遊び方
          </a>

        </header>

  
      </div>
      
      
    );
  }
}

export default App;
