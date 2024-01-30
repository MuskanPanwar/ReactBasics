 import react, { useState,useEffect } from 'react';
 import axios from 'axios';
 import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



 export default function Update(){
  const [id,setId]= useState(0);
  const [name,setName]= useState('');
  const [hobby,setHobby]= useState('');

 const navigate = useNavigate();
 useEffect(()=>{
    setName(localStorage.getItem('name'));
    setHobby(localStorage.getItem('hobby'));
    setId(localStorage.getItem('id'));
},[])

 const handleUpdate=(e)=>{
    e.preventDefault();
   

  axios.put(`https://65603b4883aba11d99d06d9c.mockapi.io/crud/${id}`,
  {   name:name,
   hobby:hobby,
     
 }).then(()=>{
 navigate("/read")
   });
}

return(
    <>
    <form>
  <div className="mb-3">
    <label  className="form-label">Your Name</label>
    <input type="text"  name="name" 
    value={name} onChange={(e)=>setName(e.target.value)}
    className="form-control" />
    
  </div>
  <div className="mb-3">
    <label className="form-label">Hobby</label>
    <input type="text" name="hobby" 
 value={hobby}
 onChange={(e)=>setHobby(e.target.value)}
    className="form-control" />
  </div>
 
  <button type="submit"  
onClick={handleUpdate} 
   className="btn btn-primary">Update</button>
   <Link to="/read">
   <button className="btn btn-danger mx-3">Cancel</button>

   </Link>
</form>
    </>
)
}
