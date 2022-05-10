import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import { getPosts } from "./actions/posts";


import Dashboard from "./components/LandingPage/DashBoard";
import NavBarCustom from "./components/NavBar/NavBar.js";
import Stacking from "./components/Pages/staking/stacking.js";
import ICO from "./components/Pages/ICO/ICO.js";
import useStyles from "./styles";


const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);


  return (
    <>
         <NavBarCustom />
          <Dashboard />


          <Routes>
            <Route path='/' element={Dashboard} />
            <Route path='/Stacking' element={Stacking} />
            <Route path='/ICO' element={ICO} />
          </Routes>
    </>
    
  );
};

export default App;
