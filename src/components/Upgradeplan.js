import React, { useState, useEffect } from 'react';
import './style.css';
import Model from './Model';
import Rcards from './Rcards';
import RTables from './RTables';
import Charts from './Charts';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Mainpage = ({Device_data,Alldata_list,Device_name,Devicename}) => {
  const renderColumns = (data) => {
    
  }

  return (
    <div>
      <Navbar 
        device_data={Device_data}
        Device_name = {Devicename}
        alldata_list={Alldata_list}
      />
      <div className='flex flex-wrap'>
        <div className='w-full sm:w-1/2 border m-0.2 rounded-lg'>
          <div className='flex justify-center items-center '>
            <h1 className='font-bold'>MODEL VIEW</h1>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-4  gap-2' style={{ maxHeight: '45vh', overflowY: 'auto' }}>
            <div className='h-full rounded-r-md bg-[#fce6cac7] border'>
              <div className='flex font-bold bg-[#491220] text-rose-50 justify-around'>
                <div>Thickness</div>
                <div>Device</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#9cfa85] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex text-sm font-bold justify-center m-2 border'>XY00001</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex text-sm font-bold justify-center m-2'>XY00002</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex text-sm font-bold justify-center m-2'>XY00003</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex text-sm font-bold justify-center m-2 border'>XY00004</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex text-sm font-bold justify-center m-2 border'>XY00005</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex text-sm font-bold justify-center m-2 border'>XY00006</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex text-sm font-bold justify-center m-2 border'>XY00007</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex text-sm font-bold justify-center m-2 border'>XY00008</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex text-sm font-bold justify-center m-2 border'>XY00009</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex text-sm font-bold justify-center m-2 border'>XY00010</div>
              </div>
            </div>
            <div className='h-full rounded-r-md bg-[#fce6cac7] border'>
              <div className='flex font-bold bg-[#491220] text-rose-50 justify-around'>
                <div>Thickness</div>
                <div>Device</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#9cfa85] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex text-sm font-bold justify-center m-2 border'>XY00011</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex text-sm font-bold justify-center m-2'>XY00012</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex text-sm font-bold justify-center m-2'>XY00013</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex text-sm font-bold justify-center m-2 border'>XY00014</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex text-sm font-bold justify-center m-2 border'>XY00015</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex text-sm font-bold justify-center m-2 border'>XY00016</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex text-sm font-bold justify-center m-2 border'>XY00017</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex text-sm font-bold justify-center m-2 border'>XY00018</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex text-sm font-bold justify-center m-2 border'>XY00019</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex text-sm font-bold justify-center m-2 border'>XY00020</div>
              </div>
            </div>
            <div className='h-full rounded-r-md bg-[#fce6cac7] border'>
              <div className='flex font-bold bg-[#491220] text-rose-50 justify-around'>
                <div>Thickness</div>
                <div>Device</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#9cfa85] rounded-r-md flex justify-center text-sm font-bold m-2 border'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center text-sm font-bold m-2 border'>XY00021</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center text-sm font-bold m-2 border'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center text-sm font-bold m-2'>XY00022</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center text-sm font-bold m-2 border'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center text-sm font-bold m-2'>XY00023</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 border text-sm font-bold'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center text-sm font-bold m-2 border'>XY00024</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>XY00025</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>XY00026</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>XY00027</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>XY00028</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>XY00029</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>XY00030</div>
              </div>
            </div>
            <div className='h-full rounded-r-md bg-[#fce6cac7] border'>
              <div className='flex font-bold bg-[#491220] text-rose-50 justify-around'>
                <div>Thickness</div>
                <div>Device</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#9cfa85] rounded-r-md flex justify-center m-2 text-sm font-bold border'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>XY00031</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold'>XY00032</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold'>XY00033</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>XY00034</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>XY00035</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>XY00036</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>XY00037</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>XY00038</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>XY00039</div>
              </div>
              <div className='grid grid-cols-2'>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>100%</div>
                <div className='bg-[#f5eac8] rounded-r-md flex justify-center m-2 text-sm font-bold border'>XY00040</div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full sm:w-1/2'>
          <h1>Cols-2</h1>
        </div>
      </div>
      <div className='flex flex-wrap'>
        <div className='w-full sm:w-1/2'>
          <h1>Cols-3</h1>
        </div>
        <div className='w-full sm:w-1/2'>
          <h1>Cols-4</h1>
        </div>
      </div>


      {/* <ToastContainer/>
      <div className='px-[25px] main_height h-[89vh]'>
        <div className='sm:grid-rows-2 md:grid-rows-2 lg:grid-rows-2'>
          <div className='sm:grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
            <Model 
            alldata_list={Alldata_list}
            device_name = {Device_name}
            />
            <div>
              <div>
                <Rcards 
                device_data={Device_data}
                devicename = {Devicename}
                />
              </div>
            </div>
          </div>
          <div className='sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
            <div>
              <RTables device_data={Device_data} />
            </div>
            <div>
              <Charts device_data={Device_data} />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Mainpage;
