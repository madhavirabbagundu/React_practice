import React from 'react'
// import "./styles.css";
import Data from './Components/Data'
export default function App() {
  const [number,setNumber] = React.useState("")
  const [error,setError] = React.useState(false)

  const handleChange = (e)=>{
    setError(false)
    setNumber(e.target.value)

    if(e.target.value < 18){
      setError(true)
    }
  }
  console.log(number)
  return (
    <div className="App">
    <input type = "number"
    value = {number}
    onChange = {handleChange}/>
    {error  ? "change the number" : null}

    <Data />
    </div>
  );
}
