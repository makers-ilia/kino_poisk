import React, {useContext, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext)

const API =  "http://localhost:8000/users"


const AuthContextProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState([])
  return (
    <>
    
    </>
  )
}

export default AuthContextProvider