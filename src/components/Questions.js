const Questions = ({question}) => {
    return (
        <div className="container">

                <h4 className="label mb-4">{question.title}</h4>

                <ul className="quiz pl-0">

                    <form>
                        <div>
                            <label>
                                <input type="radio" name="answer" />
                                {question.optionOne}
                            </label>
                        </div>
        
                        <div>
                            <label>
                                <input type="radio" name="answer" />                            
                                {question.optionTwo}
                            </label>
                        </div>

                        <div>
                            <label>
                            <input type="radio" name="answer"/>
                            {question.optionThree}
                            </label>
                        </div>


                    </form>

                </ul>

            </div>
    )
}

export default Questions
