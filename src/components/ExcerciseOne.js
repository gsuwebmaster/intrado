import React, { Component } from 'react';
import './Excercise.css';
import $ from 'jquery';

class ExcerciseOne extends Component {   
    constructor(props) {
        super(props);
      }
    
    componentDidMount(){

        const one = 'Element One';
        const two = 'Element Two';        

        $('#elementOne').unbind("click").click(function(){
         
            $('#elementOne').text() === 'Element One' ?
                $('#elementOne').text(two) &&
                $('#elementOne').removeClass('swapped-color') &&
                $('#elementTwo').text(one) &&
                $('#elementTwo').addClass('swapped-color')
             :
                $('#elementOne').text(one) &&
                $('#elementOne').addClass('swapped-color') &&
                $('#elementTwo').text(two) &&
                $('#elementTwo').removeClass('swapped-color')
        });

        $('#elementTwo').unbind("click").click(function(){
         
            $('#elementOne').text() === 'Element One' ?
                $('#elementOne').text(two) &&
                $('#elementOne').removeClass('swapped-color') &&
                $('#elementTwo').text(one) &&
                $('#elementTwo').addClass('swapped-color')
            :
                $('#elementOne').text(one) &&
                $('#elementOne').addClass('swapped-color') &&
                $('#elementTwo').text(two) &&
                $('#elementTwo').removeClass('swapped-color')
        });
      }

    render(){
        return (
            <div className='container excercise-content'>
                <h1>{this.props.title}</h1>                
                <div id="elementOne" className='div-elements swapped-color'>Element One</div>        
                <div id="elementTwo" className='div-elements'>Element Two</div>        
            </div>
        )
    }
}

export default ExcerciseOne;