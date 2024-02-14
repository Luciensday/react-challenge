import { useState, useEffect } from "react"


function MouseTracker(){
    const [coord, setCoord] = useState([0, 0])

    useEffect(()=> {
        function update ({clientX, clientY}){
            setCoord([clientX, clientY])
        }
        window.addEventListener("mousemove", update); 
        return () => window.removeEventListener("mousemove", update); 
        
    },[])
    
   const [x, y] = coord 

    return (
    <output> 
     {x}, {y} 
    </output>
    )

}



export default MouseTracker