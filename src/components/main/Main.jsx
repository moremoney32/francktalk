import "./main.css"
import {Cartes} from "../cartes/Cartes.JSX"
import React, {useState, useContext} from 'react'
import { DataContext } from "../data/DataProvider"
export const Main = ()=>{
    const [data,setData] = useContext(DataContext)
    return(
        <div className="main">
            <Cartes array={data}/>
        </div>
    )
}