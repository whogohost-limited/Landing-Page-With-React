import React from 'react'

class Questions extends React.Component {

    constructor() {
        super();    
        this.state = { checked: false };
    }

    render() {

        return(

                <ul className="quiz">
                <h4 className="label mb-4">{this.props.question.title}</h4>

                <form>
        
                    <li>
                    <input type="radio" name="answer" value={this.state.answer}/>
                    <label>{this.props.question.optionOne}</label>
                    </li>

                    <li>
                    <input type="radio" name="answer" />
                    <label>{this.props.question.optionTwo}</label>
                    </li>

                    <li><input type="radio" name="answer"/>
                    <label>{this.props.question.optionThree}</label>
                    </li>

                </form>

                </ul>

        ) 
    }
}
export default Questions 