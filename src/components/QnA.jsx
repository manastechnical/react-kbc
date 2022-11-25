import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import play from '../sounds/play.wav';
import correct from '../sounds/correct.wav';
import wrong from '../sounds/wrong.wav';

const QnA = ({ data, setStop, questionNo, setQuestionNo }) => {

  const [playSound] = useSound(play);
  const [correctSound]=useSound(correct);
  const [wrongSound]=useSound(wrong);

  useEffect(()=>{
    playSound();
  },[playSound]);


  const [question, setQuestion] = useState(null);
  const [selectedAns, setSelectedAns] = useState(null);
  const [className, setClassName] = useState("w-5/12 p-3 mt-0 mr-3 mb-5 ml-2 cursor-pointer text-center border-2 border-solid border-white rounded-2xl text-xl font-light bg-ans hover:bg-ques");

  useEffect(() => {
    setQuestion(data[questionNo - 1]);
  }, [questionNo, data]);

  const handleClick = (a) => {
    setSelectedAns(a);
    setClassName("w-5/12 p-3 mt-0 mr-3 mb-5 ml-2 cursor-pointer text-center border-2 border-solid border-white rounded-2xl text-xl font-light bg-ans hover:bg-ques bg-blue-600");
    setClassName(a.correct ? "w-5/12 p-3 mt-0 mr-3 mb-5 ml-2 cursor-pointer text-center border-2 border-solid border-white rounded-2xl text-xl font-light bg-ans hover:bg-ques animate-correctAns" : "w-5/12 p-3 mt-0 mr-3 mb-5 ml-2 cursor-pointer text-center border-2 border-solid border-white rounded-2xl text-xl font-light bg-ans hover:bg-ques animate-wrongAns");
    setTimeout(()=>{
      if(a.correct){
        correctSound();
        setTimeout(()=>{
          setQuestionNo(prev=>prev+1);
          setSelectedAns(null);
        },4000)
      }else{
        wrongSound();
        setTimeout(()=>{
          setStop(true);
        },2000);
      }
    },2000)
  }

  return (
    <div className='h-full flex flex-col justify-around items-center'>
      <div className='w-4/5 bg-ques border-2 border-solid border-white text-center p-5 rounded-xl text-xl'>{question?.question}</div>
      <div className='flex flex-wrap w-full justify-center'>
        {question?.answer.map(a => (
          <div className={selectedAns === a ? className : "w-5/12 p-3 mt-0 mr-3 mb-5 ml-2 cursor-pointer text-center border-2 border-solid border-white rounded-2xl text-xl font-light bg-ans hover:bg-ques"} onClick={() => handleClick(a)}>{a.text}</div>
        ))}
      </div>
    </div>
  );
}

export default QnA;
