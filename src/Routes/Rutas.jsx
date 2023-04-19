import { Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { Member } from "../Members/Members"
import { Menu } from "../shared/Menu/Menu"

export function Rutas (){
    return (

    <>
    <Menu/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/integrantes" element={<Member />} />
    
        </Routes>
    </>
    )
}