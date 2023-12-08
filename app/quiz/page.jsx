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
      <h1 className="text-4xl text-teal-100 font-bold my-0 text-center w-screen pt-20">Quiz Page</h1>
      <div className="w-screen flex justify-center text-white">
        <h2>
          Question: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div className="flex justify-center">
        {!showResult ? (
          <div className="bg-white py-10 pl-20 pr-20 rounded list-none">
            <h3 className="pb-5">{questions[activeQuestion].question}</h3>
            {answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className="py-2 pl-1 border-2 border-gray-300 focus:bg-black hover:border-blue-500 cursor-pointer rounded"
              >
                <span>{answer}</span>
              </li>
            ))}
            {checked ? (
              <button className="mt-5 py-2 pl-4 pr-4 text-white rounded bg-green-400" onClick={nextQuestion}>
                {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
              </button>
            ) : (
              <button onClick={nextQuestion} disabled className="mt-5 py-2 pl-4 pr-4 text-white cursor-not-allowed bg-slate-700 rounded">
                {' '}
                {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
              </button>
            )}
          </div>
        ) : (
          <div className="bg-white py-10 pl-12 pr-16 rounded list-none">
            <h3 className="pb-4 underline text-2xl">Results</h3>
            <h3>Overall {(result.score / 25) * 100}%</h3>
            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <button className="mt-5 py-2 pl-4 pr-4 text-white rounded bg-green-400" onClick={() => window.location.reload()}>Restart</button>
          </div>
        )}
      </div>
    </div>
    </main>
    
  );
};

export default page;