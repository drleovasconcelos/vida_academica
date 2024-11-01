import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { Layout } from "./Components/Layout"
import { Filmes } from "./Pages/Filmes"
import { Series } from "./Pages/Series"
import { Inicio } from "./Pages/inicio.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="/filmes" element={<Filmes />} />
            <Route path="/series" element={<Series />} />       
          </Route>
        </Routes>    
      </BrowserRouter>
    </>
  )
}

export default App