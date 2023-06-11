import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import assessmentData from './assessment.json';
import '../style/result-page.css';
import ScoreChart from './ScoreChart';

const ResultPage = () => {
  const userAnswers = useSelector(state => state.userAnswers);
  const score = useSelector(state => state.score);
  const questions = assessmentData.questions;
  console.log(userAnswers);

  return (
    <div className="container-result">
    <h2 className="pageTitle">Results</h2>
    <ul className="resultList">
      {userAnswers?.map((answer, index) => (
        <li className="resultItem" key={index}>
          <span className="question">Question: {questions[index].question}</span>
          <br />
          <span className="answer">Your Answer: {answer?.optionName}</span>
          <br />
          <span className={`${answer.optionName === questions[index].answer ? 'remark-green' : 'remark-red'}`}>Remark: {answer.optionName === questions[index].answer ? `Correct`  : 'Wrong'}</span>
        </li>
      ))}
    </ul>
    <p className="score">Score: {score}/25</p>
    <ScoreChart score={score} />
  </div>
  );
};

export default ResultPage;
