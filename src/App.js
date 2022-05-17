import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './App.css';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ReplayIcon from '@mui/icons-material/Replay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';


function App() {
  
  return (
    
    <div className="App">
      
      <header>
        <h1 className='header'>Music Player</h1>
      </header>
      <main>
        <div>
          <img src="https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png" className='artist' alt="artist"></img>
          <h3>Song Name</h3>
          <h6>Artist Name</h6>
          <input type="range" className='songtime'></input>
          <br></br>
          <div className='vol'>
          <button className='bttns'><VolumeDownIcon/></button>
          <input type="range" className='vol'></input>
          <button className='bttns'><VolumeUpIcon/></button>
          </div>
          <br></br>
          <div className='icons'>
            <button className='bttns'><ShuffleIcon/></button>
            <button className='bttns'><SkipPreviousIcon/></button>
          <button className='bttns' id="plbtn" ><PlayCircleIcon /></button>
          <button className='bttns'><PauseCircleIcon/></button>
          <button className='bttns'><SkipNextIcon/></button>
          <button className='bttns'><ReplayIcon/></button>
          </div>
          <br></br><br></br>
          <img src="https://c.tenor.com/NjavXXAMRD8AAAAC/sound.gif" className='wave' alt="wave"></img>
        </div>
      </main>
      <footer>Made by Simardeep Singh Mudhar &copy; </footer>
    
    </div>
   

  );
}

export default App;
