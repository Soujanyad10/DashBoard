import { getData } from '@syncfusion/ej2/spreadsheet';
import axios from 'axios';
import React,{useState, useEffect} from 'react';
import {DataTables} from 'react-table-component';

var options2 = localStorage.getItem("opt");


const Filtering = () => {

    const [data, setData] = useState([]);

    const columns = [
        {
            name: "Secretariat Department",
            selector: (row) => row.name,
        },
        {
            name: "Department",
            selector: (row) => row.department,
        },
        {
            name: "Head of Account",
            selector: (row) => row.head,
        },
        {
            name: "Budget Estimate Amount",
            selector: (row) => row.budgetAmount,
        },
    ];

    useEffect(() => {
        getData();
    }, []);

  return (
    <div className='m-3'>
        {/* {options2} */}
        <DataTables columns={columns} data={data}/>
    </div>
  )
}

export default Filtering