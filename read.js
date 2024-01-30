import React from "react";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Read(){
   
const [data,setData]=useState([]);

function handleDelete(id){
    
        axios.delete(`https://65603b4883aba11d99d06d9c.mockapi.io/crud/${id}`)
        .then(()=>{
            getData();
        })
    
}


const getData=(()=>{
    return(

    axios.get("https://65603b4883aba11d99d06d9c.mockapi.io/crud")
    .then((res)=>{
        setData(res.data);
    })
    
    )
});
useEffect(()=>{
    getData()
},[])

const savetoLocal=(id,name,hobby)=>{
    localStorage.setItem("id" ,id)
    localStorage.setItem("name" ,name)
    localStorage.setItem("hobby" ,hobby)

}

    return(
        <>
        <Link to="/">
        <button className="btn btn-success my-4">Create User</button>

        </Link>
        <h3>Registered Users</h3>
       <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Hobby</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
data.map((i)=>{
    return(

        <>
        <tr>
      <th scope="row">{i.id}</th>
      <td>{i.name}</td>
      <td>{i.hobby}</td>
      <td>     
        <Link to="/update">
        <button  onClick={()=>{savetoLocal((i.id),(i.name),(i.hobby))}} className="btn btn-primary">Edit</button>
        </Link>
         
      </td> 
      <td><button  className="btn btn-danger" onClick={()=>{handleDelete(i.id)}}>Delete</button></td>
    </tr>
        </>
    )

})

    }
    
   
  </tbody>
</table>
        </>
    )
}