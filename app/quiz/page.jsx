'use client';
import React, { useState } from 'react';
import { quiz } from '../data.js';

const page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  //   Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log('true');
    } else {
      setSelectedAnswer(false);
      console.log('false');
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <main className="bg-[#172554] h-screen w-screen">
      <div className="">
      <h1 className="text-4xl text-teal-100 font-bold my-0 text-center w-screen pt-20 lg:text-7xl lg:mb-4">Quiz Page</h1>
      <div className="w-screen flex justify-center text-white">
        <h2 className="lg:text-2xl">
          Question: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div className="flex justify-center">
        {!showResult ? (
          <div className="bg-white py-10 pl-20 pr-20 rounded list-none lg:w-3/4 lg:h-96 lg:flex lg:flex-col">
            <h3 className="pb-5 lg:text-3xl lg:font-bold">{questions[activeQuestion].question}</h3>
            <ul className="place-self-center w-screen flex flex-col">
            {answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={
                  selectedAnswerIndex === idx ? 'bg-orange-200 rounded border-2 border-gray-300 mb-2 lg:text-2xl lg:w-3/6 lg:place-self-center lg:text-center' : 'lg:text-center lg:place-self-center lg:w-3/6 lg:text-2xl mb-2 border-2 border-gray-300 hover:border-blue-500 cursor-pointer rounded' 
                } 
              >
                <span>{answer}</span>
              </li>
            ))}
            </ul>
            {checked ? (
              <button className="mt-5 py-2 pl-4 pr-4 text-white rounded bg-green-400 lg:w-1/4 lg:place-self-center" onClick={nextQuestion}>
                {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
              </button>
            ) : (
              <button onClick={nextQuestion} disabled className="lg:w-1/4 lg:place-self-center lg:mt-5 py-2 pl-4 pr-4 text-white cursor-not-allowed bg-slate-700 rounded">
                {' '}
                {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
              </button>
            )}
          </div>
        ) : (
          <div className="bg-white py-10 pl-12 pr-16 rounded list-none lg:w-2/4 lg:h-96 lg:flex lg:flex-col">
            <h3 className="pb-4 underline text-2xl lg:text-3xl lg:font-bold">Results</h3>
            <h3 className="lg:text-2xl lg:w-3/6">Overall {(result.score / 25) * 100}%</h3>
            <p className="lg:text-2xl lg:w-3/6">
              Total Questions: <span>{questions.length}</span>
            </p>
            <p className="lg:text-2xl lg:w-3/6">
              Total Score: <span>{result.score}</span>
            </p>
            <p className="lg:text-2xl lg:w-3/6">
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p className="lg:text-2xl lg:w-3/6">
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <button className="mt-5 py-2 pl-4 pr-4 text-white rounded bg-green-400 lg:w-1/4 lg:place-self-center" onClick={() => window.location.reload()}>Restart</button>
          </div>
        )}
      </div>
    </div>
    </main>
    
  );
};

export default page;