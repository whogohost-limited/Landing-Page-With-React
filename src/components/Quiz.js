import React from 'react'
import QuestionOne from './Q1'
import QuestionTwo from './Q2'
import QuestionThree from './Q3'
import QuestionFour from './Q4'
import QuestionFive from './Q5'


function Quiz() {
    return(
        <div className="py-4">
            <QuestionOne /> 
            <QuestionTwo />
            <QuestionThree />
            <QuestionFour />
            <QuestionFive />           
        </div>
    )
}


export default Quiz 