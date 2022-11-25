import React, { useEffect, useState } from 'react';

const Timer = ({setStop,questionNo}) => {

    const [timer, setTimer] = useState(30);

    useEffect(() => {
        if(timer===0) return setStop(true);
        const interval = setInterval(() => {
            setTimer(prev => prev - 1);
        }, 1000);
        return ()=> clearInterval(interval);
    }, [timer])


    useEffect(()=>{
        setTimer(30);
    },[questionNo])
    return timer;
}

export default Timer;
