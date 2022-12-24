import React,{useState,useEffect} from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
// import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, Line, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
// import product9 from '../data/product9.jpg';


const PIEDATA = JSON.parse(localStorage.getItem('PIE'))
const Cat = JSON.parse(localStorage.getItem('Category'))

const ECommerce = () => {
  
    const [MD,setMD] = useState("");
    const [YD,setYD] = useState("");
    const [YGD,setYGD] = useState("");
    const [MGD,setMGD] = useState("");

    useEffect(() => {
      const interval = setInterval(() => {
        setMD(localStorage.getItem("MonthD"))
        setYD(localStorage.getItem("YearD"))
        setMGD(localStorage.getItem("MonthGD").toString().slice(0,8))
        setYGD(localStorage.getItem("YearGD"))
      }, 2000);
      return () => clearInterval(interval);
    }, []);


  const { currentColor, currentMode } = useStateContext();
  const [val, setval] = useState("2020");
  const [opt, setOpt] = useState(Cat[0]);
  // const z = '$63,448.78';
  const handlechange = (event) => {
    setval(event.target.value);
  };
  const handlechange2 = (event) => {
    setOpt(event.target.value);
  };
  const DropDown = ({ currentMode}) => (
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
      <DropDownListComponent onChange={handlechange} id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value={val} dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
    </div>
  );

  const DropDown2 = ({ currentMode,data}) => (
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
      <DropDownListComponent onChange={handlechange2} id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color:'white' }} value={opt} dataSource={data} popupHeight="220px" popupWidth="120px" />
    </div>
  );
  
  // console.log(val)
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-black-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Revenue Month</p>
              <p className="text-2xl">₹{MD}</p>
              <p className="text-sm">Goal ₹{MGD}</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
        </div>
        <div className="bg-white dark:text-Black-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Revenue YTD</p>
              <p className="text-2xl">₹{YD}</p>
              <p className="text-sm">Goal ₹{YGD}</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <DropDown currentMode={currentMode} />
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Target</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">₹{YGD}</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Total Revenue From last 23 Years</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">₹{MGD}</p>

                <p className="text-gray-500 mt-1">Average Revenue</p>                
              </div>

              <div className="mt-5">
                <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked currentMode={currentMode} width="320px" height="360px" filter={val} />
            </div>
          </div>
        </div>
        <div>
          <div
            className=" rounded-2xl md:w-400 p-4 m-3"
            style={{ backgroundColor: currentColor }}
          >
            
            <DropDown2 currentMode={currentMode} data={Cat} />
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Budget</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">₹{MD*12}</p>
                <p className="text-gray-200">Total Budget Estimated Amount</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              {/* <p className="text-2xl font-semibold ">$43,246</p> */}
              <p className="text-gray-400 text-2xl font-semibold">Budget by Category</p>
            </div>

            <div className="w-40">
              <Pie id="pie-chart" data={PIEDATA} legendVisiblity={false} height="160px" />
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ECommerce;