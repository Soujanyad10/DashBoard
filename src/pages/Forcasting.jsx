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



const Forcasting = () => {
  return (
    <div className="mt-24">
    <div className="flex gap-10 m-4 flex-wrap justify-center">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
        <div className="flex justify-between items-center gap-2 mb-10">
          <p className="text-xl font-semibold">Revenue Forecast</p>
        </div>
        <div className="md:w-full overflow-auto">
        <CanvasJSChart options={options}/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Forcasting;