import React from 'react'

function Type1({ question }) {
  return (
    <div className='type1'>
        <div className='ques-no'>Question 1</div>
        <div className='ques-name'>{question.question_text}</div>
        {/* <div className='option'>
          <input type="radio" name="opt" value="opt-1"/>opt-1<br/>
          <input type="radio" name="opt" value="opt-2" checked/>opt-2<br/>
          <input type="radio" name="opt" value="opt-3"/>opt-3<br/>
          <input type="radio" name="opt" value="opt-4"/>opt-4<br/>
        </div> */}
        <div>
            {question.choices.map((choice) => (
              <div key={choice.id}>
                <input type="radio" name={question.id} value={choice.id} />
                <label>{choice.choice_text}</label>
              </div>
            ))}
          </div>
    </div>
  )
}

export default Type1
