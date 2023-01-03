import React from "react";
import Nav from "./Nav";
import llLogo from "../../assets/images/little-lemon-logo.png"
import "./Header.css";

export default function Header() {
    return (
        <header>
            <img src={llLogo} alt="restaurant logo saying little lemon"></img>
            <Nav />
        </header>
    );
};