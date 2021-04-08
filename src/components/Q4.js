import React from 'react'

function Q4() {
    return(
        <ul className="quiz">
                <h4 className="label mb-4">How many hours do you write code in a week?</h4>
                <li>
                    <input type="radio" id="q1" name="q1" />
                    <label for="q1">2 to 3 hours</label>
                </li>
                <li>
                    <input type="radio" id="q2" name="q2" />
                    <label for="q2">4 - 6 hours</label>
                </li>
                <li>
                    <input type="radio" id="q3" name="q3" />
                    <label for="q3">More than 6 hours</label>
                </li>
            </ul>
    )
}

export default Q4