import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogdetails from './components/Blogdetails/Blogdetails';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Notfound from './components/Notfound/Notfound';
import Videos from './components/Videos/Videos';
import useBlog from './Hooks/useBlog';

export const blogContext = createContext()

function App() {
  const [blogs,setBlogs] = useBlog();
  return (
    <div>
      <blogContext.Provider value={[blogs,setBlogs] }>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id'element={<Blogdetails/>}/>
        <Route path='/videos' element={<Videos/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<Notfound/>}/>
      </Routes>
      </blogContext.Provider>
    </div>
  );
}

export default App;
