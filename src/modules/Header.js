import React, {useState} from "react";
import menuImg from '../img/Hamburger Menu.svg'
import {Menu} from "./components/Menu";

export function Header(){
    const [statusMenu, setStatusMenu] = useState(false);

    const menuHandler = () => {
        setStatusMenu(prevState => !prevState);
        console.log('Yep you are click!', statusMenu);
    }

    return <header>
        <div className="logo-str">
            <span>Johnathan Specter</span>
        </div>
        <img src={menuImg} alt="menu" className="menu-btn" onClick={menuHandler}/>
        <Menu menuOpen={statusMenu}/>
    </header>;
}