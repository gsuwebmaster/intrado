import React, { Component } from 'react';
import './Excercise.css';
import $ from 'jquery';

class ExcerciseTwo extends Component {
    constructor(props) {
        super(props);
      }    
    
    componentDidMount(){

      const div = $('#thisDiv');
      let widthNumber = div.width();
      div.text(widthNumber + " px")

        div.unbind('cilck').click(function(){
          div.width(widthNumber /= 2)
          div.text(widthNumber + " px")
        });

      }

    render(){
        return (
            <div className='container excercise-content'>
                <h1>{this.props.title}</h1>   
                <div id="thisDiv" className='this-div-divide'></div>
            </div>
          )
    }
}

export default ExcerciseTwo;