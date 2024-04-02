import React from "react";
import { Line } from "react-chartjs-2";
import Select from 'react-select';
import { Chart as ChartJS,LineElement,CategoryScale,LinearScale,PointElement } from "chart.js";
ChartJS.register(
  LineElement,CategoryScale,LinearScale,PointElement
)



const Chart = (chartdata) => {
  const filterdata = chartdata.chartdata;
  const thickness = filterdata.map(item => item.thickness);
  const devicename = filterdata.map(item => item.device_name);

  const battery = filterdata.map(item => {
    const values = item.battery_status.split(','); 
    const firstValue = parseInt(values[0]);
    let Battery_percentage = (firstValue - 437) * (100 - 0) / (776 - 437) + 0;
    Battery_percentage = Battery_percentage > 100 ? 100 : Battery_percentage < 0 ? 0 : Battery_percentage;
    Battery_percentage = Number(Battery_percentage.toFixed(2));
    return Battery_percentage; 
  });



  

  const time = filterdata.map(item => item.timestamp);

  
  const Data_freequences = [
    { label: 'XY00001', value: 'XY00001' },
    { label: 'XY00002', value: 'XY00002' },
    { label: 'XY00003', value: 'XY00003' },
    { label: 'XY00004', value: 'XY00004' },
    { label: 'XY00005', value: 'XY00005' },
  ];
  const customStyles_2 = {
    control: (provided) => ({
      ...provided,
      // backgroundColor: '#2d2d2d',
      borderColor:'#2d2d2d',
      color: 'black',
    }),
    option: (provided, state) => ({
      ...provided,
      
  
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#D3D2D1', 
    }),
    placeholder: (defaultStyles) => ({
      ...defaultStyles,
      color: '#fffff', 
    }),
  };
  const handle_dropdown_Change = async(selectedOption) => {
    localStorage.setItem("ChartId",selectedOption.value)
  }

  const data={
    labels:time,
    datasets:[
      {
        data:thickness,
        backgroundColor:'transparent',
        borderColor:'#08B8FF',
        pointBorderColor:'transparent',
      },
      {
        data: battery ,
        backgroundColor: 'transparent',
        borderColor: '#FF5733', 
        pointBorderColor: 'transparent',
      },
    ]
  }
  const options = {
    scales: {
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Color of the y-axis grid lines
        },
        ticks: {
          color: '#ffffff', // Color of the y-axis labels
        },
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Color of the x-axis grid lines
        },
        ticks: {
          color: '#ffffff', // Color of the x-axis labels
        },
      },
    },
  };
  console.log("time",time)
  return (
    <div className="chart_page">
      <div id="chart" className="bg-[#42426e] ml-4 mr-4 mt-4 rounded-lg ">
        <div className="flex justify-center items-center">
          <div className="flex">
          <h3 className="font-bold mt-2 text-white">Select the DeviceId:</h3>
          <Select  className="w-22 ml-2 mt-1 h-10" options={Data_freequences} styles={customStyles_2} isSearchable={true}  placeholder={`${devicename[0]}`} onChange={handle_dropdown_Change} />
          </div>
         
        </div>
        <Line className="ml-10 w-full h-full" data={data} options={options}></Line>
      </div>
    </div>
  );
};

export default Chart;
