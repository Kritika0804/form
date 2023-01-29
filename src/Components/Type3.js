import React from 'react'

function Type3({ question }) {
  return (
    <div className='type1'>
        <div className='ques-no'>Question 3</div>
        <div className='ques-name'> MCQ-Multiple-Answer(html checkbox)</div>
        <div className='option'>
        <input type="checkbox" name="pets" value="Dog"/> Dog<br/>
        <input type="checkbox" name="pets" value="Cat"/> Cat<br/>
        <input type="checkbox" name="pets" value="Bird"/> Bird<br/>
        <input type="checkbox" name="pets" value="Mouse"/> Mouse<br/>
        <input type="checkbox" name="pets" value="Hamster"/> Hamster<br/>
        <input type="checkbox" name="pets" value="Alligator"/> Alligator<br/>
        <input type="checkbox" name="pets" value="Other"/> Other<br/>

        </div>
    </div>
  )
}

export default Type3
