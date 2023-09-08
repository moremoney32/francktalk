
import "./header.css"
import React, {useState, useContext} from 'react'
import { DataContext } from "../data/DataProvider"
import { generateUniqueId } from "../../modules/generatorId"

export const Header = ()=>{
    const [data,setData]= useContext(DataContext)
    function handleSubmit(e){
        e.preventDefault()
        console.log(e)
        const objectInfo = {
            name:e.target.name.value,
            tagLine:e.target.tagLine.value,
            likes:e.target.likes.value,
            id:generateUniqueId()
        }
            setData([...data, objectInfo])  
    }
    
    return(
<div className="header">
    <h1>Mes cartes</h1>
    <form id ="form" onSubmit={(e)=>handleSubmit(e)}>
        <div className="space">
            <label htmlFor="name">Name</label>
            <input type="text" id="name"/>
        </div>
        <div className="space">
            <label htmlFor="sentence">Sentences</label>
            <input type="text" id="tagLine"/>
        </div>
        <div className="space">
            <label htmlFor="likes">Likes</label>
            <input type="number" id="likes" min="1"/>
        </div>
        <div id="parent-button">
            <button id="ajouter">ajouter</button>
        </div>
        
    </form>
</div>
    )

}