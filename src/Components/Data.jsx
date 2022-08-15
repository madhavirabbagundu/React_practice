import React from 'react'
function Data(){
const [info,setInfo] = React.useState([])

React.useEffect(()=>{
  fetch(`https://fakestoreapi.com/products`)
.then((res)=>res.json())
.then((json)=>setInfo(json))
})

return(
  <>
  {info.map((item)=>(
    <div>{item.title}</div>
  ))}
  </>
)
}
export default Data