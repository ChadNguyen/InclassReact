import logo from './logo.svg'
import './App.css'
import Counter from './components/Counter'
import { useState, useContext } from 'react'
import { BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Pokemon from './views/Pokemon'
import PostSingle from './views/PostSingle'
import NotFound404 from './views/NotFound404'
import { AuthContext } from './contexts/AuthProvider'

function App() {
  const { login, user, logout } = useContext(AuthContext)


  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
          
          <li>
            <Link to="/Contact">Contact</Link>
          </li>

          <li>
            <Link to="/Pokemon">Pokemon</Link>
          </li>

        </ul>
      </nav>
      <div>
        {
          (user.loggedIn) ? 
          <>
            <button onClick={logout}>Log Out</button>
            <p>Current User: {user.displayName}</p>
          </>:
          <>
          <button onClick={login}>Log In</button>
          </>
        }
      </div>

      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/contact" element = {<Contact />} />
        <Route path = "/pokemon" element = {<Pokemon />} />
        <Route path = "/post/:uid/:id" element = {<PostSingle />} />

        <Route path= "/NotFound404" element= {<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;