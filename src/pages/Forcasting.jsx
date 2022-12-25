import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {CanvasJSChart} from 'canvasjs-react-charts';

var actd = JSON.parse(localStorage.getItem('actdata'))
var pred = JSON.parse(localStorage.getItem('preddata'))

// console.log(JSON.parse(dc))

const Forcasting = () => {
  const options1 = {
    exportEnabled: true,
    animationEnabled: true,
    // theme: "dark2",
  
    title:{
        text: "Predicted Revenue"
    },
    axisY: {
        title: "Amount in Dollar",
        interval: 500,
        suffix: "₹"
    },
    toolTip: {
        shared: true
    },
    data: [{
      type: "line",
      name: "2022 Actual",
      showInLegend: true,
      dataPoints: actd
    },
    {
        type: "spline",
        name: "2023 Predicted",
        showInLegend: true,
        dataPoints: pred
    }]
  }
  const options = {
    animationEnabled: true,

    exportEnabled: true,
    // theme: "dark2",

    title:{
        text: "6 Months Given Revenue"
    },
    axisY: {
        title: "Amount in Dollar",
        interval: 500,
        suffix: "₹"
    },
    toolTip: {
        shared: true
    },
    data: [{
        type: "line",
        name: "2022 6 Months",
        showInLegend: true,
        dataPoints: actd
    }]
  }

  console.log("forecasted ======== =",pred)
  return (
    <div className="mt-24 ">
        <div className="flex flex-column gap-10 mt-1 ml-4 pb-20 space-y-4 justify-center ">
            <div className='box-border border-4 h-35 w-120 justify-center flex flex-col rounded-lg shadow-lg shadow-indigo-500/40 point cursor-default
            bg-white dark:text-gray-200 dark:bg-secondary-dark-bg'>
                <p className="text-4xl text-justify font-semibold flex flex-wrap">Revenue Forecast</p>
            </div>
        </div>

    <div className="flex flex-column gap-10 m-4 justify-center">
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
        <div className="flex flex-row justify-between items-center gap-2 mb-10">
        </div>
        <div className="md:w-full overflow-auto">
        <CanvasJSChart options={options}/>
        </div>
      </div>
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
        <div className="flex flex-row justify-between items-center gap-2 mb-10">
        </div>
        <div className="md:w-full overflow-auto">
        <CanvasJSChart options={options1}/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Forcasting;