import React from "react";

export const Menu = (props) => {
    const {menuOpen} = props;

    return (
       <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <div className="nav-bar">
               <div className="nav-item">Articles</div>
               <div className="nav-item">Chats</div>
               <div className="nav-item">Awards</div>
               <div className="nav-item">About</div>
           </div>
           <div className="header-btns">
               <button>Get in touch</button>
           </div>
       </div>
    )
}