import './App.css';
import { useRef, useState } from 'react';
import Work from './Work';
import Songss from './Data'
import React from 'react'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import './App.css'
import { color } from '@mui/system';

// function Work({audioelm}) {
//   const [playing,setPlaying]=useState(false);
//   useEffect(()=>{
//     console.log(audioelm)
//     if(playing){
//       audioelm.current.play();
//     }else{
//       audioelm.current.pause();
//     }
//   },[playing])
  
//     return (<>
//           <button className='bttns'><ShuffleIcon/></button>
//            <button className='bttns'><ReplayIcon/></button>
//         <button className='bttns'><SkipPreviousIcon/></button>
//     <button className='bttns' onClick={()=>setPlaying(!playing)}><PlayCircleIcon/></button>
//     <button className='bttns'><SkipNextIcon/></button>
//   </>)
// }


function App() {
  const [songs,setSongs]=useState(Songss);
    const [currentcount,setCurrentCount]=useState(0);
  const [currentSong,setCurrentSong]=useState(Songss.songs[0]);
  const [random,setRandom]=useState(0);
  const musicref=useRef();
  const [color,setColor]=useState();
  const [back,setBack]=useState();
  
  const setIncrease=()=>{ 
    if(currentcount===50){
      setCurrentSong(Songss.songs[0]);
      setCurrentCount(0);
    }else{
      setCurrentCount(currentcount+1);
      setCurrentSong(Songss.songs[currentcount]);
    }
    
  }

  const setDecrease=()=>{
    if(currentcount<0){
      setCurrentSong(Songss.songs[49]);
      setCurrentCount(49);
    }else{
      setCurrentCount(currentcount-1);
    setCurrentSong(Songss.songs[currentcount])
    }
    
  }


  const shuffle=()=>{
    setRandom(Math.floor(Math.random()*49))
    setCurrentCount(random);
    setCurrentSong(Songss.songs[currentcount]);
  }


  return (
    <div className='home'>
    <div className="App" style={{color:color,backgroundColor:back}}>
      
      <header>
        <h1 className='header'><MusicNoteIcon/>Simarify</h1>
      </header>
      <main>
        <div>
          <img src={currentSong.image} className='artist' alt="artist"></img>
          <h3>{currentSong.songname}</h3>
          <h6>{currentSong.artist}</h6>
     
          <br></br>
  
          <br></br>
          <div className='icons'>
      
          
          {/* <button className='bttns'><PauseCircleIcon/></button> */}
          
         
          <audio ref={musicref} src={currentSong.url}/>
          <button className='bttns' onClick={()=>{shuffle()}}><ShuffleIcon/></button>
          {/* <button className='bttns' onClick={()=>Reload()}><ReplayIcon/></button> */}
           <button className='bttns' onClick={()=>{setDecrease()}}><SkipPreviousIcon/></button>
          <Work audioelm={musicref}/>
          <button className='bttns' onClick={()=>{setIncrease()}}><SkipNextIcon/></button>
          </div>
          <br></br><br></br>
          <img src="https://c.tenor.com/NjavXXAMRD8AAAAC/sound.gif" className='wave' alt="wave"></img>
        </div>
      </main>
      <footer>Made by Simardeep Singh Mudhar &copy; </footer>
      <button className='bttnh' style={{fontSize:20,margin:10,width:120}} onClick={()=>setColor('white')&&setBack('black')} >White Mode</button>
    </div>
    <div className='home2'>
      <div className='home2color' key={currentSong.image}>
        <br/><br/><br/><br/><br/>
        {currentSong.lyrics}
      </div>
      <br/>
    </div>
    </div>
   

  );
}

export default App;
