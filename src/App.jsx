import { BrowserRouter, Routes , Route } from "react-router-dom"
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";




function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/> //ruta principala
        <Route path="*" element={<NotFound />}/> //pentru orice ruta neexistenta
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
