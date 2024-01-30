import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




 export default function Create(){
    const [name,setName]= useState('');
    const [hobby,setHobby]= useState('');
    const header ={"Access-Control-Allow-Origin":"*"};
const navigate = useNavigate();



const handleSubmit=(e)=>{
    e.preventDefault();
   axios.post("https://65603b4883aba11d99d06d9c.mockapi.io/crud",
   {
    name:name,
    hobby:hobby,
    header
   }).then(()=>{
navigate("/read")
   });
}

return(
    <>
    <Link to="/read">
    <h3>Registered users</h3>
    </Link>
    <form>
  <div className="mb-3">
    <label  className="form-label">Your Name</label>
    <input type="text"  name="name" onChange={(e)=>setName(e.target.value)} className="form-control" />
    
  </div>
  <div className="mb-3">
    <label className="form-label">Hobby</label>
    <input type="text" name="hobby" onChange={(e)=>setHobby(e.target.value)} className="form-control" />
  </div>
 
  <button type="submit"  onClick={handleSubmit}  className="btn btn-primary">Submit</button>
</form>
    </>
)
}
