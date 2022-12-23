import React from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts';

var actd = JSON.parse(localStorage.getItem('actdata'))
var pred = JSON.parse(localStorage.getItem('preddata'))


const LineChart = () => {
  const options1 = {
    animationEnabled: true,
    exportEnabled: true,
    // theme: "dark2",
    innerHeight:"150%",
  
    title:{
        text: "Predicted Revenue"
    },
    axisY: {
        title: "Amount in Dollar",
        interval: 500,
        suffix: "$"
    },
    toolTip: {
        shared: true
    },
    data: [{
      type: "spline",
      name: "2023 Actual",
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

  return (
    <div className="mt-24 ">
    <div className="flex flex-column gap-10 m-4 justify-center">
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
        <div className="md:w-full overflow-auto">
        <CanvasJSChart options={options1}/>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LineChart;