import React, { useState,Fragment } from "react";
import { AppBar, Box, Grid, Typography } from "@mui/material";
import { IoNotificationsCircleOutline, IoAlertCircleSharp } from "react-icons/io5";
import { Menu, Transition } from "@headlessui/react";
import '../components/style.css'
import { CSSTransition } from 'react-transition-group';
import "react-toastify/dist/ReactToastify.css";

const Navbar = ({device_data,Device_name,alldata_list}) => {
  const [showNotification, setShowNotification] = useState(false);

  const alldata = device_data[0];
  const device_id = alldata ? alldata.device_name : "N/A"
  const device_lastime = alldata ? alldata.timestamp : 'N/A';
  const user_set_time = Device_name?Device_name.time:'N/A';



  const device1 = alldata_list["XY00001"];
  const device2 = alldata_list["XY00002"];
  const device3 = alldata_list["XY00003"];
  const device4 = alldata_list["XY00004"];
  const device5 = alldata_list["XY00005"];


  const device1_data = device1 ? device1.thickness : 'N/A';
  const device2_data = device2 ? device2.thickness : 'N/A';
  const device3_data = device3 ? device3.thickness : 'N/A';
  const device4_data = device4 ? device4.thickness : 'N/A';
  const device5_data = device5 ? device5.thickness : 'N/A';

  


const device_lastimes = "04/06/2024, 05:43:55 AM";

// Parse the date string
const dateObject = new Date(device_lastime);

const millisecondsSinceEpoch = dateObject.getTime();


const secondsSinceEpoch = millisecondsSinceEpoch / 1000;




let next_device_time = parseInt(secondsSinceEpoch+((user_set_time*60)+300))
let current_time = Math.floor(new Date().getTime() / 1000); 


const isWorking = parseFloat(next_device_time) <= parseFloat(current_time);


function classNames(...classes) {
  return classes.filter(Boolean).join("");
}

const popupnotification = () => {
  setShowNotification(!showNotification);
};



  return (
    <Box
      sx={{
        margin: "25px",
        borderRadius: "75px",
        boxShadow: 3,
        marginTop: "10px",
        marginBottom: "30px",
      }}
    >
      <AppBar
        position="static"
        sx={{ background: "#f0f1f2", borderRadius: "25px" }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between" 
          sx={{ height: "100%" }}
        >
           <div className="flex items-center"> 
            <p className="mr-3 font-bold ml-2 text-black text-sm">ID: {device_id}</p>
            {!isWorking ?(
              <IoAlertCircleSharp className="text-xl ml-2 text-green-500 align-items-start" /> 
            ):(
              <IoAlertCircleSharp className="text-xl ml-2 text-red-500 align-items-start" /> 
            )
            }
            {!isWorking ? (
          <p className="ml-1 text-green-500 font-bold text-base">Active</p>
        ) : (
          <p className="ml-1 text-red-500 font-bold text-base animated-blink">Inactive</p>
        )}
          </div>
          <Typography
            variant="h5"
            fontWeight="bold"
            color="black"
            sx={{ textAlign: "center" }}
          >
            Wear Monitoring Device
            {/* Nanoprecise */}
          </Typography>

          <Menu as="div" className="inline-block relative items-end">
            <div>
              <IoNotificationsCircleOutline onClick={popupnotification} className={`text-2xl cursor-pointer mr-2 ${device1_data === '56' ? 'text-red-500 animate-blink-text-red-500' : 'text-black'}`} />
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"></Menu.Items>
            </Transition>
    
          </Menu>
        </Grid>
      </AppBar>
    </Box>
    
  );
};

export default Navbar;
