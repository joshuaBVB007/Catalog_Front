import React from "react";
import "./header.css"
import { Link } from "react-router-dom";

export class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <img className="logo" src="/logo-capgemini_trasparente.png" alt="place"/>
                <h1 className="header_heading">Cinema</h1>
                <ul className="ul_header">
                    <Link className="link" to="/about"><li>Acerca</li></Link>
                    <Link className="link" to="/catalogo"><li>Catalogo</li></Link>
                </ul>
            </div>
        )
    }
}