import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import Auth from './components/Auth.jsx'
import Signin from './components/Signin.jsx'
import Homepage from './components/Homepage.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Add from './pages/Add.jsx'
import More from './pages/More.jsx'
import Authstate from './context/authstate.jsx'
import Chat from './components/Chat.jsx'
import Feed from './components/Feed.jsx'

const App = () => {
  return (
    <div>
      <Authstate>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/auth' element={<Auth/>}  ></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/home' element={<Homepage/>}></Route>
          <Route path={"/Confessions"} element={<Contact/>}></Route>
          <Route path={"/About"} element={<About/>}></Route>
          <Route path={"/Add confession"} element={<Add/>}></Route>
          <Route path={"/Contact"} element={<Contact/>}></Route>
          <Route path={"/More"} element={<More/>}></Route>
          <Route path={"/home/chat"} element={<Chat/>}></Route>
          <Route path={"/home/feed"} element={<Feed/>}></Route>
          <Route path={"add"} element={<Add/>}></Route>
        </Routes>
      </Router>
      </Authstate>
    </div>
  )
}

export default App