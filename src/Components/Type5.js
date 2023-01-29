import React from 'react'

function Type5({ question }) {
  return (
    <div className='type1'>
        <div className='ques-no'>Question 5</div>
        <div className='ques-name'>Upload file</div>
        <div className='option'>
            <input type="file" />
            <button type="submit">Upload</button>
        </div>
    </div>
  )
}

export default Type5
