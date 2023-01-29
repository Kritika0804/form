import React, { useState ,useEffect} from 'react'
import data from '../data.json';
import Type1 from './Type1';
import Type2 from './Type2';
import Type3 from './Type3';
import Type4 from './Type4';
import Type5 from './Type5';

const Question = ({ question }) => {
  
  const { question_text, question_type } = question;
  switch (question_type) {
    case 1:
      return <Type1 question={question} />;
    case 2:
      return <Type2 question={question} />;
    case 3:
      return <Type3 question={question} />;
    case 4:
      return <Type4 question={question} />;
    case 5:
      return <Type5 question={question} />;
    default:
      return null;
  }
};

const Navigation = ({ handlePrev, handleNext, handleSubmit, currentIndex, questionsLength }) => {
  return (
    <div>
      <button onClick={handlePrev} disabled={currentIndex === 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentIndex === questionsLength - 1}>
        Next
      </button>
      <button onClick={handleSubmit} disabled={currentIndex !== questionsLength - 1}>
        Submit
      </button>
    </div>
  );
};


function Main() {

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => { 
    fetch('../data.json') 
      .then(questions => {questions.json()
         console.log(questions);
      }) 
      .then(data => setQuestions(data)); 
      
  }, []);
   

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleSubmit = () => {
    // Submit the answers here
  };

  return (
    <>
      <div>
      {questions.length > 0 && (
        <>
          <Question question={questions[currentIndex]} />
          <Navigation
            handlePrev={handlePrev}
            handleNext={handleNext}
            handleSubmit={handleSubmit}
            currentIndex={currentIndex}
            questionsLength={questions.length}
          />
        </>
      )}
    </div>
    </>
  )
}

export default Main
