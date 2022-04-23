import React, { Component } from 'react';
import './App.css'
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import ExcerciseOne from './components/ExcerciseOne';
import ExcerciseTwo from './components/ExcerciseTwo';
import ExcerciseThree from './components/ExcerciseThree';

class App extends Component {

  componentDidMount(){

    const h1 = $('h1');
    $('button').unbind('click').click(function(){
      console.log($("h1").hasClass("this-color"))
     if( $("h1").hasClass("this-color") === true){
      h1.removeClass('this-color')
     }else{
      h1.addClass('this-color')
     }
    });

  }

  render (){    
    return (
      <div style={{ textAlign : 'center' }} className='container-fluid'>
        <h1 className='title'>Intrado Exercices</h1>
        <button className='btn btn-primary'>click here</button> 
        <hr />
        <ExcerciseOne title={'Exercise One'} />
        <ExcerciseTwo title={'Exercise Two'} />
        <ExcerciseThree title={'Exercise Three'} />
      </div>
    );
  }
}

export default App;
