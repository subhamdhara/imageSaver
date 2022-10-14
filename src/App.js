import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import {saveAs} from 'file-saver'

function App() {
  const [url, setUrl] = useState([])

  const download = (e) => {
    e.preventDefault()
    saveAs(url, 'image.png')
  }

  return (
    <div className="App">
      <form onSubmit={download}>
        <input placeholder='url' onChange={(e) => setUrl(e.target.value)}/>
        <button type='submit'>download</button>
      </form>
    </div>
  );
}

export default App;
