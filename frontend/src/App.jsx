import {useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {

  // Test
  const [array, setArray] = useState([])

  const fetchAPI = async () =>{
    const response = await axios.get("http://127.0.0.1:5000/api/users")
    console.log(response.data.users);
    setArray(response.data.users);
  }

  useEffect(()=>{
    fetchAPI()
  },[])

  return (
    <>
      <div>
        {
          array.map((user,index)=><p key={index}>{user}</p>)
        }
      </div>
    </>
  )
}

export default App
