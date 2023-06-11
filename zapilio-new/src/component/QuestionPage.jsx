import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import assessmentData from './assessment.json';
import { useNavigate } from 'react-router-dom';
import { storeUserAnswers } from '../redux/actions';
import '../style/questions-page.css';

const QuestionPage = () => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNextQuestion = (type) => {
    if(isQuestionAnswered(questions?.question) && isAnswered){handleUpdateAnswer(questions.question, selectedOption.optionName); varifyUserAnswer();}
    else if(isAnswered){setUserAnswers(prevAnswers => [...prevAnswers, selectedOption]); varifyUserAnswer();};
    if(type === 'N')setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    else setCurrentQuestionIndex(prevIndex => prevIndex === 0? prevIndex : prevIndex - 1);
    setIsAnswered(false);
  };

  const varifyUserAnswer = () => {
    if(selectedOption.optionName === questions.answer && !isQuestionAnswered(questions?.question)){
      setScore(prevScore => prevScore +1);
    }
    else if(isQuestionAnswered(questions?.question) && selectedOption.optionName !== questions.answer){
      setScore(prevScore => prevScore - 1);
    }
  }

  console.log(score);

  const isQuestionAnswered = (question) => {
    return userAnswers.some((item) => item.question === question);
  };


  const handleUpdateAnswer = (question, answer) => {
    // Find the index of the question in the userAnswer array
    const questionIndex = userAnswers.findIndex(item => item.question === question);
    // If the question exists in the userAnswer array, update the answer
    if (questionIndex !== -1) {
      const updatedUserAnswer = [...userAnswers]; // Create a copy of the userAnswer array
      updatedUserAnswer[questionIndex].optionName = answer; // Update the answer for the question
      setUserAnswers(updatedUserAnswer); // Update the state with the updated userAnswer
    }
  };

  const handleOptionChange = (index, optionName) => {
    setIsAnswered(true);
    setSelectedOption({
      'question': questions.question,
      'optionName': optionName
    });
  };

  const handleSubmit = () => {
      handleNextQuestion('N');
      dispatch(storeUserAnswers(userAnswers, score));
      navigate('/result-page');
  }

  const questions = assessmentData.questions[currentQuestionIndex];
  
  return (
    <div className='container-ques'>
      <h2>{assessmentData.assessmentName}</h2>
      <h5>{assessmentData.description}</h5>
      <p>Duration: {assessmentData.duration_minutes} minutes</p>
        <div>
          <h3>{currentQuestionIndex+1}. {questions?.question}</h3>
            {questions?.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedOption.optionName === option.name}
                    onChange={() => handleOptionChange(optionIndex, option.name)}
                  />
                  {option.name}
                </label>
              </div>
            ))}
        </div>
        {currentQuestionIndex+1 < assessmentData.questions.length? 
          <><button onClick={() => handleNextQuestion('P')}>Previous</button>
          <button type="button" onClick={() => handleNextQuestion('N')}>Next</button>
          </> :<button onClick={handleSubmit}>Submit</button>}
    </div>
  );
};

export default QuestionPage;
