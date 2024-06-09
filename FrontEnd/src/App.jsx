import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Table from './Component/Table';
import AddUser from './Component/AddUser';
import { useEffect, useState } from 'react';
import axios from 'axios'
function App() {

  const [Info, setInfo] = useState({
    id : '',
    firstName:'' ,
    lastName:'',
    email:'',
    userName:'',
    passWord:''
  });

  useEffect (()=>{
    fetchdata();
    
  },[])

  const fetchdata = async ()=>{
    try{
      const response = await axios.get('http://localhost:8080/users/getAll');
      setInfo(response.data)
    }catch(error){
      console.error(error);
    }
    
  };

  const handleAddUser = async(newUser) => {
    try{
      await axios.post('http://localhost:8080/users/addusers', newUser);
      fetchdata();
    }catch (error){
      console.error('Error adding user:', error);
    }
  };

  

  return (
    <>
      <Table info={Info}/>
      <AddUser onAddUser = {handleAddUser}/>
    </>
  )
}

export default App
