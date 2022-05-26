import React, { useState } from "react";

const NavItem = (props) => {
    const [open, setOpen] = useState(false)



    return(
        <li className="nav-item">
            <a href="#" className="icon-button">
                {props.icon}
            </a>
        </li>
    )
}

export default NavItem