import {useState} from 'react';
import React from 'react'

const Clock = () => {

    const current = new Date();
    let time = current.toLocaleTimeString("en-US");
    let year = new Date().getFullYear()
    // console.log(time)
    const [currentTime, setCurrentTime] = useState(time);
    const [currentYear, setCurrentYear] = useState(year);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        let year = new Date().getFullYear();
        setCurrentTime(time);
        setCurrentYear(year);
    }

    setInterval(updateTime, 1000);
    console.log(currentYear+"ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd")
  
  // let currentTime = 10101;

  return (
    <div className='flex w-95vw h-95vh overflow-hidden text-center'>
        <div className='border-2 border-burlywood w-250px m-40vh-0 rounded-full bg-cornsilk shadow-lg shadow-grey'>
        <h1 className='font-Courier text-sandybrown'>{currentYear}</h1>
        </div>
    </div>
  )
}

export default Clock;