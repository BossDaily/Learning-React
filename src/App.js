import React from "react";
import NavBar from "./Nav";
import './index.css';
import NavItem from "./NavItem";

const App = () => {
    return (
        <NavBar>
            <NavItem icon="🤓">
                <p>fard</p>
            </NavItem>
        </NavBar>
    )
}

export default App