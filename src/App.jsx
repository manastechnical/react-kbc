import {useState} from 'react';
import QnA from './components/QnA';
function App() {

  const [questionNo, setQuestionNo] = useState(1);

  const moneyPyramid = [
    {id:1,amount:"₹ 1000"},
    {id:2,amount:"₹ 2000"},
    {id:3,amount:"₹ 3000"},
    {id:4,amount:"₹ 5000"},
    {id:5,amount:"₹ 10,000"},
    {id:6,amount:"₹ 20,000"},
    {id:7,amount:"₹ 40,000"},
    {id:8,amount:"₹ 80,000"},
    {id:9,amount:"₹ 1,60,000"},
    {id:10,amount:"₹ 3,20,000"},
    {id:11,amount:"₹ 6,40,000"},
    {id:12,amount:"₹ 12,50,000"},
    {id:13,amount:"₹ 25,00,000"},
    {id:14,amount:"₹ 50,00,000"},
    {id:15,amount:"₹ 1 Crore"},
    {id:16,amount:"₹ 7 Crore"},
  ].reverse();

  return (
    <div className="h-screen bg-db flex text-white">
      <div className="w-3/4 bg-bgImg bg-cover flex-cols">
        <div className='h-1/2 relative'>
          <div className='flex justify-center items-center w-20 h-20 rounded-half border-solid border-white border-4 text-3xl font-bold absolute bottom-3 left-20'>30</div>
        </div>
        <div className='h-1/2'> 
          <QnA/>
        </div>
      </div>
      <div className="w-1/4 flex justify-center items-center">
        <ul className="list-none w-full p-5">
          {moneyPyramid.map(m=>(
          <li className={questionNo===m.id ? "flex items-center p-1 rounded-md bg-teal-600" : "flex items-center p-1 rounded-md"}>
            <span className="text-lg font-thin w-3/12">{m.id}</span>
            <span className="text-xl font-light">{m.amount}</span>
          </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
