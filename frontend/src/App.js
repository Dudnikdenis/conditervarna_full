import React from 'react';
import './App.css';
import Intro from './components/Intro/Intro';
import Login from './components/Login/login';
import Header from './components/Header/Header';
import GradContainer from './components/Grad/GradContainer';
import WorksContainer from './components/Works/WorksContainer';
import AssortimentCotainer from './components/Assortiment/AssortimentContainer';
import {
  BrowserRouter, Routes,
  Route,
} from 'react-router-dom'
import UserContainer from './components/User/UserContainer'



function App(props) {

  return (  
    <div>
      <BrowserRouter>
          <Header />
          <main className="main">      
           
           <Routes>
              <Route path='/' element = {<Intro /> }/> 
              <Route path='/login' element = {<Login /> }/> 
              <Route path='/assortiment' element = {<AssortimentCotainer/> }/>
              <Route path='/grad' element = {<GradContainer/> }/>
              <Route path='/works' element = {<WorksContainer/> }/>
              <Route path = '/user' element={<UserContainer/>} />
           </Routes>
          </main>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;