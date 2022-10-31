import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext)

const API =  "http://localhost:8000/users"


const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate()

  // register logic 
  const registerUser = (user) => {
    axios.post(API, user);
  }

  const checkUsername = async (username) => {
    let res = await axios(API);
    let result = res.data.some(item => item.username === username);
    console.log(res.data);
    console.log(result);

    if(result){
      return true;
    } 
    return false
  }

  // login logic 

  function initStorage(){
    if(!localStorage.getItem('user')){
        localStorage.setItem('user', '{}')
    };
  };

  const setUserToStorage = async(username) => {
    let users = await axios(API)
    let userObj = users.data.find(item => item.username === username);
    localStorage.setItem("user", JSON.stringify(userObj));
    let oneUser = JSON.parse(localStorage.getItem('user'))
    setUser(oneUser);

    console.log(user);
  }


  const getUserFromStorage = () => {
    let oneUser = JSON.parse(localStorage.getItem('user'))
    setUser(oneUser)
  }

  function checkUserPassword(user, password){
    return user.password === password;
  };

  const checkPassword = async(username, password) => {
    let users = await axios(API)
    console.log(users);
    let userObj = users.data.find(item => item.username === username);

    // console.log(userObj);

    if(!checkUserPassword(userObj, password)){
      return false;
    }
     return true;
    }
  
   function checkUserPassword(user, password){
     return user.password === password;
    };

    function checkIsAdmin(user, isAdmin){
     return user.isAdmin === isAdmin;
    };

    const checkStatus = async(username, isAdmin) => {
      let users = await axios(API)
      console.log(users);
      let userObj = users.data.find(item => item.username === username);
    console.log(userObj);

    setUser(userObj);

    if(!checkIsAdmin(userObj, isAdmin)){
      return false;
    }
     return true;
    }  

    // logout 

    function logout(){
      localStorage.removeItem("user");
      setUser('');
      navigate('/movies');
  }

   
  return (
    <authContext.Provider value={{
      registerUser,
      checkUsername,
      checkUsername,
      checkPassword,
      checkStatus,
      initStorage,
      setUserToStorage,
      getUserFromStorage,
      logout,

      user
    }}>
      { children }
    </authContext.Provider>
  )
}

export default AuthContextProvider