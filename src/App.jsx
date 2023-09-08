import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import "./app.css"
import { useState } from "react";
 import { DataProvider } from "./components/data/DataProvider";
import {TrafficLight} from "./components/TrafficLight.jsx";



export function App(){
  const [formData,setFormData] = useState([])
 
  return(
    <div className="body">
  <DataProvider>
    <Header/>
    <Main/>
  </DataProvider>
  <TrafficLight/>
    </div>
  )
}


