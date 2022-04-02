import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Notfound from './components/Notfound/Notfound';
import Videos from './components/Videos/Videos';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/videos' element={<Videos/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </div>
  );
}

export default App;
