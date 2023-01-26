import React from 'react'

function Type2() {
  return (
    <div className='type1'>
        <div className='ques-no'>Question 2</div>
        <div className='ques-name'>MCQ-One-Answer</div>
        <div className='option'>
        <select name="bad_day">
            <option value="Sunday">Sunday</option>
            <option value="Monday" selected>Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
        </select>

        </div>
    </div>
  )
}

export default Type2
