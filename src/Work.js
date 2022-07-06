import React, { useState } from 'react'
import './App.css'
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
export default function Work({audioelm}) {
  const [toggle,setToggle]=useState(false);
 
  const play=()=>{
    setToggle(!toggle);
    audioelm.current.play();
  }

 const pausefn=()=>{
    audioelm.current.pause();    
    setToggle(!toggle);
  }
  
    return (<>
          {toggle?(<button className='bttns' onClick={()=>pausefn()}><PauseCircleIcon/></button>):(<button className='bttns' onClick={()=>{play()}}><PlayCircleIcon/></button>)}
          
       
  </>)
}
