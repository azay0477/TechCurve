
import { InputText } from "primereact/inputtext";
import React, { useState } from 'react'
import './App.css';
import HomeComponent from "./HomeComponent"


function App() {


  return (
    <div className="main">
      <div className="grid row-gap-4">
        <HomeComponent/>
      </div>
    </div>
  );
}

export default App;
