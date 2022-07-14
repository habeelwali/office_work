import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
function Edit() {
    const list = useSelector((state)=>state)
    const dispatch = useDispatch()
   const {id} = useParams();
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [contact,setContact]=useState("")
    const currentdata = list.find((list)=>list.id===parseInt(id))

    useEffect(()=>{
        if(currentdata){
            setName(currentdata.name);
            setEmail(currentdata.email);
            setContact(currentdata.contact);
        }
    },[currentdata])
    const handleSubmit=(e)=>{
        e.preventDefault()

        const data= {
            id:parseInt(id),
            name,
            email,
            contact,
        };
        dispatch({type:"UPDATE_USER",payload:data});


    

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

export default Edit