import React, {useRef, useState} from "react";
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
        <img src="https://raw.githubusercontent.com/Sprada-rus/CodeWell_Dev_Portfolio/0b7c62079555e0cfd179aa79d392c13a0e93f70f/src/img/Hamburger%20Menu.svg" alt="menu" className="menu-btn" onClick={menuHandler}/>
        <Menu menuOpen={statusMenu} ref={menuRef}/>
    </header>;
}