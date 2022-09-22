import React, {useRef, useState} from "react";
import menuImg from '../img/Hamburger Menu.svg'
import Menu from "./components/Menu.js";

export function Header(){
    const [statusMenu, setStatusMenu] = useState(false);
    const menuRef = useRef(null);

    function menuHandler (){
        const elementMenu = menuRef.current;
        setStatusMenu(prevState => !prevState);
        console.log(elementMenu.getBoundingClientRect())

        if (!statusMenu){
            elementMenu.classList.add('open')
        } else {
            elementMenu.classList.remove('open')
        }
    }

    return <header>
        <div className="logo-str">
            <span>Johnathan Specter</span>
        </div>
        <img src={menuImg} alt="menu" className="menu-btn" onClick={menuHandler}/>
        <Menu menuOpen={statusMenu} ref={menuRef}/>
    </header>;
}