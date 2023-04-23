import React from "react";
import { Actor } from "../actors/actor";
import { Category } from "../category/category";
import { Film } from "../films/film";
import { Language } from "../language/language";

export class Catalogo  extends React.Component {
    constructor(){
        super();
        this.state = {
            componenteActivo:"",
        }
        this.handleDisplayComponent = this.handleDisplayComponent.bind(this);
    }

    handleDisplayComponent(param) {
        console.log(param);
        this.setState({componenteActivo: param});    
    }


    render() {

        let componentToRender;
        if(this.state.componenteActivo=="Actor"){
            componentToRender=<Actor/>;
        }else if(this.state.componenteActivo=="Category"){
            componentToRender=<Category/>;
        }else if(this.state.componenteActivo=="Film"){
            componentToRender=<Film/>;
        }else if(this.state.componenteActivo=="Language"){
            componentToRender=<Language/>;
        }

        return (
            <div>
                <h3>Selecciona una opción en la izquierda</h3>

                {componentToRender}

                <section className="options">
                    <button onClick={() => this.handleDisplayComponent("Actor")} >Actor</button>
                    <button onClick={() => this.handleDisplayComponent("Category")} >Category</button>
                    <button onClick={() => this.handleDisplayComponent("Film")} >Films</button>
                    <button onClick={() => this.handleDisplayComponent("Language")} >Language</button>
                </section>
            </div>
        )
    }
}