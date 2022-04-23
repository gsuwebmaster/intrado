import React, { Component } from 'react';
import './Excercise.css';
import $ from 'jquery';

class ExcerciseThree extends Component {
    constructor(props) {
        super(props);
      }    
    
    render(){
        return (
            <div className='container excercise-content'>
                <h1>{this.props.title}</h1>
                <div className='row-fluid d-flex justify-content-between square-content'>
                    <div className='col-2 squares'></div>
                    <div className='col-2 squares'></div>
                    <div className='col-2 squares'></div>
                    <div className='col-2 squares'></div>
                    <div className='col-2 squares'></div>
                </div>
            </div>
          )
    }
}

export default ExcerciseThree;