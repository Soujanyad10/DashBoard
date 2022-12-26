import React from 'react';

// import { pieChartData } from '../../data/dummy';
import { Pie as PieChart } from '../../components';
// import axios from 'axios';

const pieChartData = JSON.parse(localStorage.getItem("PIE"))
// console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",pieChartData)
const Pie = ({ height }) => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    {/* <ChartsHeader category="Pie" title="Project Cost Breakdown" /> */}
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height={height} />
    </div>
  </div>
);

export default Pie;