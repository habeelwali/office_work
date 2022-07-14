import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
function AddUser() {
    const list = useSelector((state)=>state)
    const dispatch = useDispatch()
    console.log(list)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [contact,setContact]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()

        const data= {
            id:list[list.length-1].id+1,
            name,
            email,
            contact,
        };
        dispatch({type:"ADD_USER",payload:data});


    

    }
  return (
    <div className="container">
           <div>
            <form onSubmit={handleSubmit}>
                <input name="username" placeholder="Username" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input name="email" placeholder="email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input name="contact" placeholder="contact" type="text" value={contact} onChange={(e)=>setContact(e.target.value)}/>
                <button type="submit">submit</button>
            </form>
           </div>
        </div>
    )



  
}

export default AddUser