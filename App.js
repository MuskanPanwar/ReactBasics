import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Create from './components/create'; 
import Read from './components/read'; 
import Update from './components/update'; 

export default function App(){
return(
  <>
 <div className="container">
<BrowserRouter>
<Routes>
  <Route exact path="/" element={<Create />}  ></Route>
  <Route exact path="/read" element={<Read />}  ></Route>
  <Route exact path="/update" element={<Update />}  ></Route>
</Routes>
</BrowserRouter>
 </div>
  </>
)

}