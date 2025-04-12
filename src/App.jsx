import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './ProfileCard'
import Sample from './Sample'
import GridView from './GridView'
import Todo from './Todo'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import storeredux from './assets/storeredux'
import { Provider } from "react-redux"
// import Home from './Home'
// import { Link } from 'react-router-dom';

const profileLst = {
  name: "Mugesh",
  Department: "AI&DS",
  year: 2,
  mobile: 8438000000,
  address: "rvs hostel,sulur,coimbatore",
};
function App() {
  return (
    <>
    {/* <ProfileCard profile={profileLst}/>
    <Sample/>
    <GridView/>
    <Todo/> */}
    <BrowserRouter>
      <Navbar />
      <Routes>
      {/* <Home /> */}
        {/* <Route path="/todo" element={<Todo />} /> */}
        <Route path="/profilecard" element={<ProfileCard profile={profileLst}/>} />
        <Route path="/gridview" element={<GridView />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route
          path="/reduxcounter"
          element={
            <Provider store={storeredux}>
              <Todo />
            </Provider>
          } 
        />

       
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
