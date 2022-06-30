import Home from './pages/home/Home'
import { useSelector, useDispatch } from 'react-redux';
import { localUser } from "./reducer/loginReducer";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Profile from './pages/profile/Profile';
import Auth from './pages/auth/Auth';
import './App.css';
import { useEffect } from 'react';

function App(){
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(localUser())
  },[dispatch])
  const user=useSelector((state)=>state.login.data);
  return (
    <div className="App">
      <div className='blur' style={{ top: '-18%', right: '0' }}></div>
      <div className='blur' style={{ top: '36%', left: '-8rem' }}></div>
        <Routes>
          <Route path='/' element={user?<Navigate to='/home'/>:<Navigate to='/auth'/>}/>
          <Route path='/home' element={user?<Home/>: <Navigate to='../auth'/>}/>
          <Route path='/auth' element={user?<Navigate to='../home'/>: <Auth />}/>
          <Route path='/profile/:id' element={user? <Profile/>:<Navigate to="../auth" /> }/>
        </Routes>
      {/*<Home/>*/}
      {/*<Profile/>*/}
     
    </div>
  );
}

export default App;
