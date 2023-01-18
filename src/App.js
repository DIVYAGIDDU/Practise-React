import React from 'react'
import './App.css'
import Employee from './CRUD-JSON_SERVER/EmployeeList'
import Empcreate from './CRUD-JSON_SERVER/Empcreate';
import EmpDetils from './CRUD-JSON_SERVER/EmpDetils';
import EmpEdit from './CRUD-JSON_SERVER/EmpEdit';
import{BrowserRouter ,Routes ,Route} from 'react-router-dom'
function App (){
  return (
    <div className='App'>
   <center><h1 className='mt-5'>CRUD APP WITH JSON SERVER</h1></center>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Employee/>}/>
    <Route path='/Employee/create' element={<Empcreate/>}/>
    <Route path='/Employee/detail/:empId' element={<EmpDetils/>}/>
    <Route path='/Employee/edit/:empId' element={<EmpEdit/>}/>
   </Routes>
 </BrowserRouter>
    </div>
  );
 
  
}

export default App