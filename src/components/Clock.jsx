import {useState} from 'react';
import React from 'react'

const Clock = () => {

    const current = new Date();
    let time = current.toLocaleTimeString("en-US");
    let year = new Date().getFullYear()
    let month = new Date().getMonth()
    let day = new Date().getDate()
    // console.log(time)
    const [currentTime, setCurrentTime] = useState(time);
    const [currentYear, setCurrentYear] = useState(year);
    const [currentMonth, setCurrentMonth] = useState(month);
    const [currentDay, setCurrentDay] = useState(day);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        let year = new Date().getFullYear();
        let month = new Date().getMonth();
        let day = new Date().getDate();
        setCurrentTime(time);
        setCurrentYear(year);
        setCurrentMonth(month);
        setCurrentDay(day);
    }

    setInterval(updateTime, 1000);
  
  // let currentTime = 10101;

  return (
    <div className='flex w-95vw h-95vh overflow-hidden text-center'>
        <div className='border-2 border-burlywood w-250px m-40vh-0 rounded-full bg-cornsilk shadow-lg shadow-grey '>
        <h1 className='font-Courier text-sandybrown'>{currentYear}-{currentMonth+1}-{currentDay} :-{currentTime}</h1>
        </div>
    </div>
  )
}

export default Clock