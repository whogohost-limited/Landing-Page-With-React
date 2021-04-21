import {Link} from 'react-scroll'
import React, { Component } from 'react'
import Questions from './Questions'
import Result from './Result'



class Quiz extends Component {

    constructor(){
        super()
        this.state = {
            showResult: false
        }
    }

    render(){

        return(
    
            <div id="quiz">
    
            <div className="py-4">

                <Link  to="link2" spy={true} smooth={true}>                    
                        <Questions
                        question = {{title: "How many hours do you write code in a week?", optionOne: "2 to 3 hours",  optionTwo: "4 - 6 hours", optionThree: "More than 6 hours"}} />
                </Link>

                <Link  to="link3" spy={true} smooth={true}>
                    <div id="link2">
                        <Questions 
                        question = {{title: "Have you ever attended a code camp?", optionOne: "Never",  optionTwo: "Yes", optionThree: "I hate code camps"}} />
                    </div>
                </Link>

                <Link  to="link4" spy={true} smooth={true}>
                    <div id="link3">
                        <Questions 
                        question = {{title: "Do you have any mentor", optionOne: "Yes",  optionTwo: "No", optionThree: "I don't need a mentor"}} />
                    </div>
                </Link>

                <Link  to="result" spy={true} smooth={true}>
                    <div id="link4">
                        <Questions 
                        question = {{title: "For how long have you been writing code?", optionOne: "Less than 1 year",  optionTwo: "Up to 3 years", optionThree: "More than 3 years"}} />                       
                    </div>
                </Link> 

            </div>

               <div>
                    {
                        this.state.show? <Result />  :null
                    }
                </div>
    
                <div className="container pt-2">
                    <button className="btn blue-dark white-text bold p-4" onClick={()=>{this.setState({show:!this.state.show})}}>See Your Result</button>
                </div>
    
            </div>
    
        )
    }
}


export default Quiz