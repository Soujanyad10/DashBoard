import React, { useState,useEffect } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import axios from 'axios';
import {Api} from '../../data/config'
import {  stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const kl = {}
// console.log(details)
const Stacked = ({ width, height,filter}) => {
  kl["val"] = filter
  localStorage.setItem("filer", filter)
  console.log(kl)
  const [details, setDetails] = useState();
  useEffect(() => {
    const interval = setInterval(() => {
      axios.post( Api+"sales2",{'msg':kl["val"] })
    .then(res=>{
      setDetails(res.data);
    })
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   axios.post( "http://127.0.0.1:8000/sales2",{'msg':'dict2' })
  //   .then(res=>{
  //     setDetails(res.data);
  //   })
  // }, []);
  console.log(details)
  const { currentMode } = useStateContext();
  const stackedCustomSeries = [

    { dataSource: details,
      xName: 'x',
      yName: 'y',
      name: 'Revenue',
      type: 'StackingColumn',
      background: 'blue',
  
    },
    { dataSource: details,
        xName: 'x',
        yName: 'y',
        name: 'Expense',
        type: 'StackingColumn',
        background: 'red',
    
      },
  ];

  return (
    <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;