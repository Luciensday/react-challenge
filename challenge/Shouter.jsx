import { userState } from "react" 


function Shouter(props){
    const [text, setText ] = userState("")

    function uppercase(event){
        setText(event.target.value)
    }
    return (
    <>
    <input value={text} onChange={uppercase} />
    <output>{text.toUpperCase()}</output>
    </>
    )

    
   

}

export default Shouter