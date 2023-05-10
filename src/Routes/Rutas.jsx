import { Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { Member } from "../Members/Members"
import { Menu } from "../shared/Menu/Menu"
import  Tienda from "../Tienda/Tienda"
import { Musica } from "../Musica/Musica"
import { Fans } from "../Fans/Fans"
import { Carga } from "../Hook/Carga"
export function Rutas (){
    return (

    <>
    <Menu/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/integrantes" element={<Member />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/musica" element={<Musica />} />
        <Route path="/fans" element={<Fans />} />
        <Route path="/hooks" element={<Carga/>}/>
    
        </Routes>
    </>
    )
}