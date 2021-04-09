import React from 'react'

function Questions(props) {
    return(
        <ul className="quiz">
        <h4 className="label mb-4">{props.question.title}</h4>

        <li>
            <input type="radio" id="q1" name="q1" />
            <label for="q1">{props.question.optionOne}</label>
        </li>
        <li>
            <input type="radio" id="q2" name="q2" />
            <label for="q2">{props.question.optionTwo}</label>
        </li>
        <li>
            <input type="radio" id="q3" name="q3" />
            <label for="q3">{props.question.optionThree}</label>
        </li>
    </ul>
    )    
}
export default Questions 