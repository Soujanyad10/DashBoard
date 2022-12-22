import {useState} from 'react';

const Clock = () => {

    let time = new Date().toLocaleTimeString;
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000);

  return (
    <div className='flex w-95vw h-95vh overflow-hidden text-center'>
        <div className='border-2 border-burlywood w-250px m-40vh-0 rounded-full bg-cornsilk shadow-lg shadow-grey'>
        <h1 className='font-Courier text-sandybrown'>{currentTime}</h1>
        </div>
    </div>
  )
}

export default Clock;