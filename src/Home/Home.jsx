import {Menu} from "../shared/Menu/Menu"
import './Home.css'
import { History } from "../History/History"
export function Home(){
    return(
        <>
        <Menu/>
        <section className="banner"> 

        </section>
        <section>
            <History/>
        </section>
        </>
    )
}