import React from "react";
import NavBar from "./Nav";
import './index.css';
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";

const App = () => {
    return (
        <NavBar>
            <NavItem icon="🤓">
                <DropdownMenu />
            </NavItem>
        </NavBar>
    )
}

export default App