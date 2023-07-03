import React from 'react'
const Login = ()=>{
 const [data,setData] = React.useState({name:"",email:"",password:"",number:""});


const handleChange = (e)=>{
   console.log(e.target.value)
   const {name,value} = e.target;
   setData({...data,[name]:value})

}
const handleSubmit = (e)=>{
   e.preventDefault();


}

React.useEffect(()=>{
   fetch('')
   .then((res)=>res.json())
   .then((res)=>res.setData())
})
console.log(data)

const {name,email,password,number} = data
 return(
    <>
    <h1>This is the Login Page</h1>
    <form onSubmit={handleSubmit}>
    <input type = "text" 
    placeholder='Enter the name'
     value = {name}
     name = "name"
     onChange = {handleChange}
     />
     <input type = "number"
     placeholder='Enter the number'
     value = {number}
     name = "number"
     onChange={handleChange}/>

     <input type = "email"
     placeholder=' Enter your email'
     value = {email}
     name = "email"
     onChange={handleChange}/>
      <input type = "password"
     placeholder=' Enter your password'
     value = {password}
     name = "password"
     onChange={handleChange}/>
    <button type = "submit">submit</button>
    </form>

    </>
 )
}
export { Login }