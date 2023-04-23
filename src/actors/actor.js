import React from "react";

export class Actor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:0,
            nombre:"",
            apellido:"",
            verboHttp:"",
            lista_items:[],
            item_gotten_by_id:[],
        }
        this.handleId = this.handleId.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleApellido = this.handleApellido.bind(this);
        this.doGet= this.doGet.bind(this);
        this.doGetId= this.doGetId.bind(this);
        this.doPost= this.doPost.bind(this);
    }

    handleId(event) {
        this.setState({id: event.target.value});    
    }
    handleName(event) {
        this.setState({nombre: event.target.value});    
    }
    handleApellido(event) {
        this.setState({apellido: event.target.value});    
    }

    async doGet(){ //VALIDADO
        const http=new XMLHttpRequest();
        http.onload = ()=>{
            console.log(http.response);
            this.setState({lista_items:http.response})
        }
        http.open('GET',"http://localhost:8080/actor");
        http.responseType='json';
        http.send();
    }
    async doGetId(id){ //VALIDADO
        const http=new XMLHttpRequest();
        http.onload = ()=>{
            let listalterna=[];
            //console.log(http.response);
            listalterna.push(http.response)
            this.setState({item_gotten_by_id:listalterna})
        }
        http.open('GET',`http://localhost:8080/actor/${id}`);
        http.responseType='json';
        http.send();
    }
    async doPost(name,apellido){ //VALIDADO

        const http=new XMLHttpRequest();
        http.onload = ()=>{
            //console.log(http.response);
            alert("Successfully inserted")
            this.setState({lista_items:[]})
        }
        http.open('POST',`http://localhost:8080/actor?firstname=${name}&lastname=${apellido}`);
        http.send();
    }
    async doPut(id,name,apellido){ //VALIDADO
        const http=new XMLHttpRequest();
        http.onload = ()=>{
            //console.log(http.response);
            alert("Successfully updated");
        }
        http.open('PUT',`http://localhost:8080/actor/${id}?firstname=${name}&lastname=${apellido}`);
        http.send();
    }
    async doDelete(id){ //VALIDADO
        const http=new XMLHttpRequest();
        http.onload = ()=>{
            //console.log(http.response);
            alert("Successfully deleted");
        }
        http.open('DELETE',`http://localhost:8080/actor/${id}`);
        http.send();
    }

    render() {
        let formid;
        let formpost;        
        let formdelete;
        let formget;
        let formput;
        if(this.state.verboHttp=="get"){
            formget = (
                <div className="formularyget">
                        {/* <input className="form" placeholder="get"/> */}
                        <button className="get" onClick={this.doGet}>get all actors</button>
                </div>
            )
        }else if(this.state.verboHttp=="id"){
            formid = (
                <div className="formulary">
                        <input className="form" type="number" placeholder="dame el id" 
                        onChange={this.handleId } 
                        />
                        <button onClick={()=>this.doGetId(this.state.id) }>Send</button>
                </div>
            )
        }else if(this.state.verboHttp=="post"){
            formpost = (
                <div className="formulary">
                        <input className="form" onChange={this.handleName} placeholder="nombre?"  />
                        <input className="form" onChange={this.handleApellido} placeholder="apellido?"/>
                        <button onClick={ () => this.doPost(this.state.nombre,this.state.apellido) }>Send</button>
                </div>
            )
        }else if(this.state.verboHttp=="put"){
            formput = (
                <div className="formulary">
                        <input className="form" type="number" onChange={this.handleId} placeholder="id"/>
                        <input className="form" onChange={this.handleName} placeholder="nombre"/>
                        <input className="form" onChange={this.handleApellido} placeholder="apellido"/>
                        <button onClick={ () => this.doPut(this.state.id,this.state.nombre,this.state.apellido) }
                        >Send</button>
                </div>
            )
        }else if(this.state.verboHttp=="delete"){
            formdelete = (
                <div className="formulary">
                        <input className="form" onChange={this.handleId} placeholder="delete"/>
                        <button onClick={ () => this.doDelete(this.state.id) }>Send</button>
                </div>
            )
        }

        return(
            <div>
                <h1>Soy Actor</h1>
                    <div className="actor_options_buttons">
                        <button onClick={ () => this.setState({verboHttp:"get"}) }>get</button>
                        <button onClick={ () => this.setState({verboHttp:"id"}) }>get id</button>
                        <button onClick={ () => this.setState({verboHttp:"post"}) }>post</button>
                        <button onClick={ () => this.setState({verboHttp:"put"}) }>put</button>
                        <button onClick={ () => this.setState({verboHttp:"delete"}) }>delete</button>
                    </div>

                    {/* Son los distintos formularios */}
                    {formget}
                    {formid}
                    {formpost}
                    {formput}
                    {formdelete}

                    <div className="listado">
                        { formget &&(
                                this.state.lista_items.map((item,index) => 
                                    <div className="item" key={index}>
                                        <h6>Id: {item.id}</h6>
                                        <h6>Name: {item.nombre}</h6>
                                        <h6>Lastname: {item.apellidos}</h6> 
                                    </div>
                                )
                            )
                        }
                        { formid &&(
                                this.state.item_gotten_by_id.map((item,index) => 
                                    <div className="item" key={index}>
                                        <h6>Id: {item.id}</h6>
                                        <h6>Name: {item.nombre}</h6>
                                        <h6>Lastname: {item.apellidos}</h6> 
                                    </div>
                                )
                            )
                        }
                    </div>
            </div>
        )
    }
}