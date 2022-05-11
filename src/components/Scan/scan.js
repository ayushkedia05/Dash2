import React, { useEffect, useState } from "react";
import scan from './scan.jpg'
import { RingProgress,Text, Button } from "@mantine/core";
import { ReportSearch } from "tabler-icons-react";
import './scan.css'
const Scan=()=>{

   const [scanwork,setscan]=useState(1);
   const [counter,setcounter]=useState(0);

   useEffect(()=>{

    if(counter==100)
    return;
     const Interval=setInterval(()=>{
        setcounter((prevcounter)=>prevcounter+1);
     },20000);

     return()=>clearInterval(Interval);
   },[]);
    
   const initiatescan=()=>{
     setscan(!scanwork);
   }


  return (
    <div className="dualcard">
      <div className="scan">
            <RingProgress
        sections={[{ value: {counter}, color: 'blue' }]}
        label={
          <Text color="blue" weight={700} align="center" size="xl">
            {counter}%
          </Text>
        }
      />
     
       <ReportSearch size={60}
    strokeWidth={2}
    color={'white'} />
     <div className="content">
    <span className="runtext">Run Scan</span>

{scanwork && <button onClick={initiatescan} className="glow-on-hover">Run scan</button>}
{!scanwork && <button onClick={initiatescan} className="glow-on-hover">Stop scan</button>}

     </div>


      {/* <ReportSearch></ReportSearch> */}
      </div>

      <div className="scan glow-on-hover">
      <RingProgress
      sections={[
        { value: 40, color: '#68b5e8' },
        { value: 15, color: '#6888e8' },
        { value: 15, color: '#8468e8' },
      ]}

      label={
        <Text color="blue" weight={700} align="center" size="xl">
          {70}%
        </Text>
      }
      // <Text color="blue" weight={700} align="center" size="xl"></Text>
      
    />
     
       <ReportSearch size={60}
    strokeWidth={2}
    color={'white'} />
     <div className="content">
    <span className="runtext">Complete Security</span>

<button onClick={initiatescan} className="glow-on-hover">Tap to manage</button>


     </div>


      {/* <ReportSearch></ReportSearch> */}
      </div>

      </div>
  )
};

export default Scan; 