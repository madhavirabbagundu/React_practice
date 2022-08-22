import React from 'react'
function Data(){
const [info,setInfo] = React.useState([])
const [title,setTitle] = React.useState("")

React.useEffect(()=>{
  fetch(`https://fakestoreapi.com/products`)
.then((res)=>res.json())
.then((json)=> setInfo(json))
  // var sort = json.sort((a,b)=>a.title.localeCompare(b.title))
  
 
},[])
console.log(info)

console.log(info.filter(data=>data.title.includes("fe")))

return(
  <>
 <input type = "text"
 onChange = {(e)=>setTitle(e.target.value)}
//  value = {info}
//  name = "info"
 />



  {info.filter((title1)=>
  title1.title.toLowerCase().includes(title)).
  map((item)=>(
    <div>
    {/* {item.price} */}
    <div>{item.title}</div>
    </div>
  ))}


  
  </>
)
}
export {Data}