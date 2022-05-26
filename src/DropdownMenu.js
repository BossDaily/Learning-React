import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const DropdownMenu = () => {

    const [activeMenu, setActiveMenu] = useState('main')

    const DropdownItem = (props) => {
        return(
            <a href="#" className="menu-item" onClick={() => props.goToMenu}>
                <span className="icon-button">{props.leftIcon}</span>

                {props.children}

                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }

    return(
        <div className="dropdown">
            <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary">
                <div className="menu">
                    <DropdownItem>You nerd</DropdownItem>
                    <DropdownItem leftIcon={'🤓'} rightIcon={'👉'}>
                        Fard
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames="menu-secondary">
                <div className="menu">
                    <DropdownItem>You nerd</DropdownItem>
                    <DropdownItem leftIcon={'🤓'} rightIcon={'👉'}>
                        Fard
                    </DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

export default DropdownMenu