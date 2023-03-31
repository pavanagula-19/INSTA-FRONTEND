import './App.css';
import Loding from './components/Loding';
import Rapper from './components/Rapper';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreatePost from './components/createpost';
function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loding/>}/>
        <Route path="/posts" element={<Rapper/>}/>
        <Route path="/createpost" element={<CreatePost/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
