import { useState } from 'react'
import './App.css'
import Slider from "./components/Slider"
import Paginator from "./components/Paginator"

function App() {
  const [maxPage, setMaxPage] = useState(15)
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="App">
      <div className="container">
        <h1>React + TypeScript + Pagination component</h1>
        <Slider min={1} max={25} defaultValue={maxPage} onChange={setMaxPage} className="slider" />
        <Paginator maxPage={maxPage} currentPage={currentPage} around={2} changePage={setCurrentPage} />
      </div>
    </div>
  )
}

export default App
