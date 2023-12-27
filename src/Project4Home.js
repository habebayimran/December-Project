import React from 'react'
import { useNavigate} from 'react-router-dom'
export default function Home() {
    const navigate=useNavigate();
    const handleAbout=()=>{
        navigate("/about")
    }
  return (
    <div>
        <h1>This is Home Page</h1>
        <br></br>
        <button onClick={handleAbout}>Go To About Page</button>
    </div>
  )
}