import React,{useEffect,useState} from 'react'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';



const Cat = JSON.parse(localStorage.getItem('Category'))
// localStorage.setItem("selected",Cat[0])

const Sap = () => {
  const [opt, setOpt] = useState(Cat[0]);
  const [tabled,setTabled] = useState([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTabled(JSON.parse(localStorage.getItem('Table')))
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handlechange = (event) => {
    setOpt(event.target.value);
    localStorage.setItem("selected",event.target.value)
  };
  console.log("options",opt)
  const DropDown = ({data}) => (
    <div className="w-220 border-1 border-color px-2 py-1 rounded-md">
      <DropDownListComponent onChange={handlechange} id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color:'black' }} value={opt} dataSource={data} popupHeight="220px" popupWidth="220px" />
    </div>
  );

  // const data = [
  //   { name: "Anom", age: 19, gender: "Male" },
  //   { name: "Megha", age: 19, gender: "Female" },
  //   { name: "Subham", age: 25, gender: "Male"},
  // ]

  return (
    <div className="mt-24 ">
    <div className="flex flex-column gap-10 m-4 justify-center">
    <div className=" bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-100vh md:w-100vh ">
        <div className="flex flex-row justify-between items-center gap-2 mb-10">
          <DropDown data={Cat} />
        </div>
        <div className=" md:w-full overflow-auto">
        <table className="h-50vh w-100 border border-sky-500 rounded-md">
        <tr>
          <th className='border-b-2 border-indigo-500 p-2'>Secretariat Department</th>
          <th className='border-b-2 border-indigo-500 p-2'>Department</th>
          <th className='border-b-2 border-indigo-500 p-2'>Head Of Account</th>
          <th className='border-b-2 border-indigo-500 p-2'>Budget Estimate Amount</th>
        </tr>
        {tabled.map((val, key) => {
          return (
            <tr key={key}>
              <td className='text-center gap-2 p-3'>{val.SD}</td>
              <td className='text-center gap-2 p-3'>{val.D}</td>
              <td className='text-center gap-2 p-3'>{val.HOD}</td>
              <td className='text-center gap-2 p-3'>{val.BEA}</td>
            </tr>
          )
        })}
      </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Sap