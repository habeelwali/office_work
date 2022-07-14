import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
function Listing() {
  
    const list = useSelector((state)=>state)
    
  return (
    <div className="container">
            <div style={{display: 'flex', alignItems: 'center',justifyContent: 'center',marginTop:"5%"}}>
                <div className="col-sm-8">
                <table className="table">
                    <thead>
                      <tr>
                      <th>#</th>
                          <th>Full Name</th>
                          <th>Email Address</th>
                          <th>Number</th>
                          <th></th>
                      </tr>
                    </thead>
                   <tbody>
                    {
                        list.map((list,id)=>(

                            <tr>
                            <td>{id+1}</td>
                            <td>{list.name}</td>
                            <td>{list.email}</td>
                            <td>{list.contact}</td>
                            <td>
                              <Link style={{padding:'5px',textDecoration:"none", backgroundColor:"black", color:"white",borderRadius:"10px",marginBottom:"50px"}} to={`/edit/${list.id}`}>edit</Link>
                            </td>
                           </tr>
                        ))
                    }
                  
                   
                   </tbody> 
                </table>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
        </div>
    )



  

}

export default Listing