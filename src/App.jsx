import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage"
import About from "./pages/About/About"
import Error404 from "./pages/Error404/Error404"
import Lodging from "./pages/Lodging/Lodging"
import "./style/_reset.css"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage/>} />          
                <Route path="/about" element={<About/>} />                
                <Route path="/lodging/:id" element={<Lodging/>} />
                <Route path="*" element={<Error404/>} />                {/*Redirection to page 404 for all others routes */}
            </Routes>
        </BrowserRouter>
    )
}

export default App