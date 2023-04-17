import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllMandos from "./Components/AllMandos"
import OneMando from "./Components/OneMando"
import Home from "./Components/Home"
import SellForm from './Components/SellForm';
import EditForm from './Components/EditForm'


//App.js is the entry way to the front end
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/sell" element={<SellForm/> }/>
          <Route path="/mando" element={<AllMandos/> }/>
          <Route path="/mando/:id" element={<OneMando/> }/>
          <Route path="/edit/:id" element={<EditForm/> }/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
