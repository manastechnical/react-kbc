import React from 'react';

const QnA = () => {
  return (
    <div className='h-full flex flex-col justify-around items-center'>
      <div className='w-4/5 bg-ques border-2 border-solid border-white text-center p-5 rounded-xl text-xl'>What's your name?</div>
      <div className='flex flex-wrap w-full justify-center'>
        <div className='w-5/12 p-3 mt-0 mr-3 mb-5 ml-2 cursor-pointer text-center border-2 border-solid border-white rounded-2xl text-xl font-light bg-ans hover:bg-ques animate-correctAns'>answer1</div>
        <div className='w-5/12 p-3 mt-0 mr-3 mb-5 ml-2 cursor-pointer text-center bg-ans border-2 border-solid border-white rounded-2xl text-xl font-light hover:bg-ques animate-wrongAns'>answer2</div>
        <div className='w-5/12 p-3 mt-0 mr-3 mb-5 ml-2 cursor-pointer text-center bg-ans border-2 border-solid border-white rounded-2xl text-xl font-light hover:bg-ques'>answer3</div>
        <div className='w-5/12 p-3 mt-0 mr-3 mb-5 ml-2 cursor-pointer text-center bg-ans border-2 border-solid border-white rounded-2xl text-xl font-light hover:bg-ques'>answer4</div>
      </div>
    </div>
  );
}

export default QnA;
