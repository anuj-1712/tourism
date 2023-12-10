import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import BlogPage from './components/BlogPage'


function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/blog/:id"} element={<BlogPage />} />
      </Routes>
    </>
  )
}

export default App
