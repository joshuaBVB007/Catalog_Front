import React from 'react';
import './about.css'


export class About extends React.Component {
    render() {
        return(
            <div className="about">
                <h1>I&#39;m Acerca</h1>
                <div className="about_section">
                    <img className="about_img" src="/claqueta.png" alt="about_one"/>
                    <p>Sakila es una Base de Datos MySQL desarrollada por Mike Hillyer.
                    El objetivo de Sakila es proporcionar un entorno de pruebas, 
                    para todo el que quiera estudiar las posibilidades que ofrece MySQL. 
                    Con una estructura lo bastante compleja, y gran cantidad de registros</p>
                </div>
            </div>
        )
    }
}