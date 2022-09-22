import React from "react";

const Menu = (props, ref) => {
    const {menuOpen} = props;

    return (
        <div className='mobile-menu' ref={ref}>
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

export default React.forwardRef(Menu);