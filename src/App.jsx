import { useEffect, useState } from 'react';
import QnA from './components/QnA';
import Timer from './components/Timer';

function App() {

  const [questionNo, setQuestionNo] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₹ 0");
  

  const moneyPyramid = [
    { id: 1, amount: "₹ 1000" },
    { id: 2, amount: "₹ 2000" },
    { id: 3, amount: "₹ 3000" },
    { id: 4, amount: "₹ 5000" },
    { id: 5, amount: "₹ 10,000" },
    { id: 6, amount: "₹ 20,000" },
    { id: 7, amount: "₹ 40,000" },
    { id: 8, amount: "₹ 80,000" },
    { id: 9, amount: "₹ 1,60,000" },
    { id: 10, amount: "₹ 3,20,000" },
    { id: 11, amount: "₹ 6,40,000" },
    { id: 12, amount: "₹ 12,50,000" },
    { id: 13, amount: "₹ 25,00,000" },
    { id: 14, amount: "₹ 50,00,000" },
    { id: 15, amount: "₹ 1 Crore" },
    { id: 16, amount: "₹ 7 Crore" },
  ].reverse();

  const data = [
    {
      id: 1,
      question: "Which of the following is a type of spoon?",
      answer: [
        {
          text: "Chair",
          correct: false
        },
        {
          text: "Table",
          correct: true
        },
        {
          text: "Bed",
          correct: false
        },
        {
          text: "Cupboard",
          correct: false
        }
      ]
    },
    {
      id: 2,
      question: "Rajat Sharma, Sonia Singh, Rahul Kanwal and Sumit Awasthi are all associated with which profession?",
      answer: [
        {
          text: "Astrology",
          correct: false
        },
        {
          text: "Journalism",
          correct: true
        },
        {
          text: "Medicine",
          correct: false
        },
        {
          text: "Law",
          correct: false
        }
      ]
    },
    {
      id: 3,
      question: "‘DRDO Industry Academia-Centre of Excellence’ (DIA-CoE) has been set up in which institution?",
      answer: [
        {
          text: "IIT Roorkee",
          correct: true
        },
        {
          text: "IIT Madras",
          correct: false
        },
        {
          text: "IISc Bengaluru",
          correct: false
        },
        {
          text: "NIT Kozhikode",
          correct: false
        }
      ]
    },
    {
      id: 4,
      question: "Which company has partnered with the Indian government to roll out a vaccine finder tool on its mobile app in India to get vaccinated?",
      answer: [
        {
          text: "Google",
          correct: false
        },
        {
          text: "Apple",
          correct: false
        },
        {
          text: "Amazon",
          correct: false
        },
        {
          text: "Facebook",
          correct: true
        }
      ]
    },
    {
      id: 5,
      question: "Which of these countries is the largest producer of coffee?",
      answer: [
        {
          text: "India",
          correct: false
        },
        {
          text: "Indonesia",
          correct: false
        },
        {
          text: "Brazil",
          correct: true
        },
        {
          text: "China",
          correct: false
        }
      ]
    },
    {
      id: 6,
      question: "Which of these gases makes a beverage fizzy?",
      answer: [
        {
          text: "Oxygen",
          correct: false
        },
        {
          text: "Nitrogen",
          correct: false
        },
        {
          text: "Carbon dioxide",
          correct: true
        },
        {
          text: "Hydrogen",
          correct: false
        }
      ]
    },
    {
      id: 7,
      question: "In which country was the first underground railway built in 1863?",
      answer: [
        {
          text: "London",
          correct: true
        },
        {
          text: "New York City",
          correct: false
        },
        {
          text: "Paris",
          correct: false
        },
        {
          text: "Rome",
          correct: false
        }
      ]
    },
    {
      id: 8,
      question: "Which Indian state has the second longest coastline, after Gujarat?",
      answer: [
        {
          text: "Kerala",
          correct: false
        },
        {
          text: "Andhra Pradesh",
          correct: true
        },
        {
          text: "Karnataka",
          correct: false
        },
        {
          text: "Odisha",
          correct: false
        }
      ]
    },
    {
      id: 9,
      question: "Which of these is the name of the rocket engine that has been used in India's Polar Satellite Launch Vehicles and will also be a part of the Gaganyaan programme?",
      answer: [
        {
          text: "Vikas",
          correct: true
        },
        {
          text: "Vishwas",
          correct: false
        },
        {
          text: "Vijay",
          correct: false
        },
        {
          text: "Varun",
          correct: false
        }
      ]
    },
    {
      id: 10,
      question: "Who was the first player to win 100 matches as a captain in IPL?",
      answer: [
        {
          text: "Gautam Gambhir",
          correct: false
        },
        {
          text: "Rohit Sharma",
          correct: false
        },
        {
          text: "MS Dhoni",
          correct: true
        },
        {
          text: "Shane Warne",
          correct: false
        }
      ]
    },
    {
      id: 11,
      question: "In which state would you find more than 800 Jain temples on the shratunjaya hill?",
      answer: [
        {
          text: "Maharastra",
          correct: false
        },
        {
          text: "Gujarat",
          correct: true
        },
        {
          text: "Rajasthan",
          correct: false
        },
        {
          text: "Bihar",
          correct: false
        }
      ]
    },
    {
      id: 12,
      question: "Which of these films marked the debut of Sanjay Leela Bhansali as a music director?",
      answer: [
        {
          text: "Saawariya ",
          correct: false
        },
        {
          text: "Goliyon Ki Raasleela - Ram-Leela",
          correct: false
        },
        {
          text: "Bajirao Mastani",
          correct: false
        },
        {
          text: "Guzaarish",
          correct: true
        }
      ]
    },
    {
      id: 13,
      question: "Which of these UNESCO World Heritage Sites in India holds a ‘mixed’ status of both cultural and natural significance?",
      answer: [
        {
          text: "Khangchendzonga National Park",
          correct: false
        },
        {
          text: "Khajuraho Group of Monuments",
          correct: false
        },
        {
          text: "Rock Shelters of Bhimbetka",
          correct: true
        },
        {
          text: "Elephanta Caves",
          correct: false
        }
      ]
    },
    {
      id: 14,
      question: "Which of these Bharat ratna awardees was born as well as died in a country outside India?",
      answer: [
        {
          text: "Lal Bahadur Shahtri",
          correct: false
        },
        {
          text: "Maulana Abul Kalam Azad",
          correct: false
        },
        {
          text: "Mother Teresa",
          correct: false
        },
        {
          text: "JRD Tata",
          correct: true
        }
      ]
    },
    {
      id: 15,
      question: "Which of these animals was the first to go around the moon in a spacecraft and return to Earth?",
      answer: [
        {
          text: "Mouse",
          correct: false
        },
        {
          text: "Rabbit",
          correct: false
        },
        {
          text: "Tortoise",
          correct: true
        },
        {
          text: "Chimpanzee",
          correct: false
        }
      ]
    },
    {
      id: 16,
      question: "What was the title of the thesis that Dr BR Ambedkar submitted to the London School of Economics for which he was awarded his doctorate in 1923?",
      answer: [
        {
          text: "The Want And Means Of India",
          correct: false
        },
        {
          text: "The Problem Of The Rupee",
          correct: true
        },
        {
          text: "National Dividend Of India",
          correct: false
        },
        {
          text: "The Law And Lawyers",
          correct: false
        }
      ]
    },
  ]

  useEffect(() => {
    questionNo > 1 &&
    setEarned(moneyPyramid.find(m => m.id === questionNo - 1).amount);
  }, [moneyPyramid, questionNo]);

  return (
    <div className="h-screen bg-db flex text-white">
      {stop || questionNo > 16 ? (<h1 className='relative top-0 bottom-0 right-0 left-0 m-auto text-3xl'>You Earned: {earned}</h1>) : (
        <>
          <div className="w-3/4 bg-bgImg bg-cover flex-cols">
            <div className='h-1/2 relative'>
              <div className='flex justify-center items-center w-20 h-20 rounded-half border-solid border-white border-4 text-3xl font-bold absolute bottom-3 left-20'><Timer setStop={setStop} questionNo={questionNo}/></div>
            </div>
            <div className='h-1/2'>
              <QnA data={data} setStop={setStop} questionNo={questionNo} setQuestionNo={setQuestionNo} />
            </div>
          </div>
          <div className="w-1/4 flex justify-center items-center">
            <ul className="list-none w-full p-5">
              {moneyPyramid.map(m => (
                <li className={questionNo === m.id ? "flex items-center p-1 rounded-md bg-teal-600" : "flex items-center p-1 rounded-md"}>
                  <span className="text-lg font-thin w-3/12">{m.id}</span>
                  <span className="text-xl font-light">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default App
