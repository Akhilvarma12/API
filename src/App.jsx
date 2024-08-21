import { useState,useEffect} from 'react'
import './App.css'
import Postcard from './components/PostCard'
import Usercard from './components/Usercard'
import { getPosts, getRandomUser } from './api'

function App() {
  const [count, setCount] = useState(0)
  const [data,setData]=useState(null);
  const [userData,setUserData]=useState(null);
  useEffect(()=>{
    getPosts().then(posts => setData(posts))
  },[]);
  useEffect(()=>{
    getRandomUser().then((user) =>setUserData(user.results[0]))
  },[]);
  const refresh= () =>{
    getRandomUser().then((user) =>setUserData(user.results[0]))
  }
  return (
    <>
    {userData ? <Usercard data={userData}/> : "ok"}
    <button onClick={(refresh)}> Refresh user</button>
    {
      data ? data.map((e) => <Postcard title={e.title} body={e.body}/>) : <>No data</>
    }
      

    </>
  )
}

export default App
