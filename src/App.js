import React, { useEffect,useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import axios from 'axios';

import { Navbar, Sidebar, ThemeSettings } from './components';
import { ECommerce, Calendar, Stacked, Line, Pie, Forcasting} from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';

const val = {}

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  const [chk,Setchk] = useState();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);
  
  
  
  console.log(val["v1"],"sssssssssssssssssssss")
  // console.log(JSON.parse(filter),"sssssssssssssssss");
  useEffect(() => {
    const interval = setInterval(() => {
      const filter = localStorage.getItem("filer")
      val["v1"]  = JSON.parse(filter)
      console.log(val["v1"],"iiiiiiiiiiiiiiiiiiiii")
      axios.post( "http://127.0.0.1:8000/latestrevenue",{"val":val["v1"]})
    .then(res=>{
      console.log("result",res)
      Setchk(res.data);
    })
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            {chk==="low"?<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">Revenue reduced!</strong>
                <span class="block sm:inline">Please see the Stacked Graph.</span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>:<div></div>}
            <div>
              {themeSettings && (<ThemeSettings />)}
              

              <Routes>
                {/* dashboard  */}
                <Route path='/' element={<ECommerce/>}/>
                <Route path='/ecommerce' element={<ECommerce/>}/>

                {/* Pages */}
                {/* <Route path='/employees' element={<Employees/>}/>
                <Route path='/customers' element={<Customers/>}/> */}
                <Route path='/forcasting' element={<Forcasting/>}/>

                {/* Apps */}
                <Route path='/calendar' element={<Calendar/>}/>
                {/* <Route path='/task' element={<Task/>}/> */}

                {/* Charts */}
                <Route path='/line' element={<Line/>}/>
                {/* <Route path='/area' element={<Area/>}/>
                <Route path='/bar' element={<Bar/>}/> */}
                <Route path='/pie' element={<Pie/>}/>
                {/* <Route path='/financial' element={<Financial/>}/>
                <Route path='/color-mapping' element={<ColorMapping/>}/>
                <Route path='/pyramid' element={<Pyramid/>}/> */}
                <Route path='/stacked' element={<Stacked/>}/>

              </Routes>
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;