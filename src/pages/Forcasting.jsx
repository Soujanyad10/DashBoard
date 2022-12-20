import React from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts';

const options = {
    animationEnabled: true,
    // theme: "dark2",

    title:{
        text: "Previous Year Revenue"
    },
    axisY: {
        title: "Amount in Dollar",
        interval: 100,
        suffix: "$"
    },
    toolTip: {
        shared: true
    },
    data: [{
        type: "spline",
        name: "2021",
        showInLegend: true,
        dataPoints: [
          { y: 155, label: "Jan" },
          { y: 350, label: "Feb" },
          { y: 525, label: "Mar" },
          { y: 198, label: "Apr" },
          { y: 242, label: "May" },
          { y: 450, label: "Jun" },
          { y: 146, label: "Jul" },
          { y: 349, label: "Aug" },
          { y: 153, label: "Sept" },
          { y: 658, label: "Oct" },
          { y: 154, label: "Nov" },
          { y: 790, label: "Dec" }
        ]
    }]
}

const options1 = {
    animationEnabled: true,
    // theme: "dark2",

    title:{
        text: "Predicted Revenue"
    },
    axisY: {
        title: "Amount in Dollar",
        interval: 100,
        suffix: "$"
    },
    toolTip: {
        shared: true
    },
    data: [{
        type: "spline",
        name: "2022",
        showInLegend: true,
        dataPoints: [
          { y: 155, label: "Jan" },
          { y: 350, label: "Feb" },
          { y: 525, label: "Mar" },
          { y: 198, label: "Apr" },
          { y: 242, label: "May" },
          { y: 450, label: "Jun" },
          { y: 146, label: "Jul" },
          { y: 349, label: "Aug" },
          { y: 153, label: "Sept" },
          { y: 658, label: "Oct" },
          { y: 154, label: "Nov" },
          { y: 790, label: "Dec" }
        ]
    }]
}

const Forcasting = () => {

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

    {/* <div className="flex gap-10 m-4 flex-wrap justify-center">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
        <div className="flex justify-between items-center gap-2 mb-10">
        </div>
        <div className="md:w-full overflow-auto">
        <CanvasJSChart options={options1}/>
        </div>
      </div>
    </div> */}
  </div>
  );
}

export default Forcasting;