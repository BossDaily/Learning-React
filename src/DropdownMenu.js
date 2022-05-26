import React, { useState } from "react";

const DropdownMenu = () => {
    const DropdownItem = (props) => {
        return(
            <a href="#" className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>

                {props.children}

                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }

    return(
        <div className="dropdown">
            <DropdownItem>You nerd</DropdownItem>
            <DropdownItem leftIcon={'🤓'} rightIcon={'👉'}>

            </DropdownItem>
        </div>
    )
}

export default DropdownMenu