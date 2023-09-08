import hearth from "../icons/hearth.svg"
import close from "../icons/close.svg"
import "./cartes.css"
import { useEffect, useState,useRef } from "react"
export const Cartes = ({array})=>{
   const counter = useRef([]); 
   //let elements = document.querySelectorAll("span");
    useEffect(()=>{ 
        setArrayOfCartes(array)
        let elements = document.querySelectorAll("span");
        counter.current = Array.from(elements)
        console.log(counter.current)
        counter.current.forEach((element)=>{
            console.log(element)
        })

    },[array])
   
    const [arrayOfcartes,setArrayOfCartes] = useState([])
    let [like,setLike] = useState(false)
    function editCartes(id){
        const newCartes = arrayOfcartes.filter((element)=> element.id !== id)
        setArrayOfCartes(newCartes)
    }
    function likes(e){
        if(!like){
            
           setLike(true)
           //counter.current.style.color="red"
            const increment = parseInt(e.target.parentElement.firstElementChild.textContent++) 
            return increment
        }
        else{
           setLike(false)
           //counter.current.style.color="green"
            const increment = parseInt(e.target.parentElement.firstElementChild.textContent--) 
            return increment

        }   
    }
    
    return (
        <>
        {
            arrayOfcartes.map((element)=>{
                return(

                    <div className="cartes" key={element.id}>
                        <img src={close} alt="" className="close" onClick={()=>editCartes(element.id)}/>
                        <h2>{element.name}</h2>
                        <span>{element.tagLine}</span>
                        <div className="bloc-likes">
                            <span>{element.likes}</span>
                            <img src={hearth}  onClick={(e)=>likes(e)} alt=""/>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}