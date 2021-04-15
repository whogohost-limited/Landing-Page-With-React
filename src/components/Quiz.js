import React from 'react'
import Questions from './Questions'



function Quiz() {
    return(
        
            <div className="py-4">
                <Questions 
                question = {{title: "How many hours do you write code in a week?", optionOne: "2 to 3 hours",  optionTwo: "4 - 6 hours", optionThree: "More than 6 hours"}} />
                <Questions 
                question = {{title: "Have you ever attended a code camp?", optionOne: "Never",  optionTwo: "Yes", optionThree: "I hate code camps"}} />
                <Questions 
                question = {{title: "Do you have any mentor", optionOne: "Yes",  optionTwo: "No", optionThree: "I don't need a mentor"}} />
                <Questions 
                question = {{title: "For how long have you been writing code?", optionOne: "Less than 1 year",  optionTwo: "Up to 3 years", optionThree: "More than 3 years"}} />        
            </div>
    )
}


export default Quiz 