import React from 'react';
import Line from './Line';
import Pie from './Pie';
import Stacked from './Stacked';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import {useState,useEffect} from 'react';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';


const Fchart = () => {

    const { currentColor, currentMode } = useStateContext();
  const [val, setval] = useState("2020");
  // const z = '$63,448.78';
  const handlechange = (event) => {
    setval(event.target.value);
  };
  const DropDown = ({ currentMode}) => (
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
      <DropDownListComponent onChange={handlechange} id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value={val} dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
    </div>
  );



  return (
    <div className="mt-24">
        <Stacked currentMode={currentMode} width="15    0px" height="10px" filter={val} />

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <Line />
        </div>
        <div>
          <div
            className=" rounded-2xl md:w-400 p-4 m-3"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Category Pie</p>
            </div>
          </div>

              <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
          
        </div>
      </div>

      
    </div>




    // <div>
        
    //     <Line />
    //     <Stacked />
    //     <Pie />
    // </div>
  );
};

export default Fchart;
