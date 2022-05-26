import React, { useState } from "react";

const DropdownMenu = () => {
    const DropdownItem(props) = () => {
        return(
            <a href="#" className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
            </a>
        )
    }

    return(
        <div className="dropdown">

        </div>
    )
}

export default DropdownMenu