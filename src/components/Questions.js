import React from 'react'

class Questions extends React.Component {

    constructor() {
        super()    
        this.state = { checked: false }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {

        const result = this.state.checked ? '' : 'hidden'

        return(
            <div className="container">

                <h4 className="label mb-4">{this.props.question.title}</h4>

                <ul className="quiz pl-0">

                    <form>
                        <div>
                            <label>
                                <input type="radio" name="answer" />
                                {this.props.question.optionOne}
                            </label>
                        </div>
            
                        <div>
                            <label>
                                <input type="radio" name="answer" />                            
                                {this.props.question.optionTwo}
                            </label>
                        </div>

                        <div>
                            <label>
                            <input type="radio" name="answer"/>
                            {this.props.question.optionThree}
                            </label>
                        </div>


                    </form>

                </ul>

            </div>

        ) 
    }
}
export default Questions 