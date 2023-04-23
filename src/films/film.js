import React from "react";


export class Film extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:0,
            title:"",
            desc:"",
            lista_items:[],
            item_gotten_by_id:[],
        }
        this.handleId = this.handleId.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleDesc = this.handleDesc.bind(this);
        this.doGet= this.doGet.bind(this);
        this.doGetId= this.doGetId.bind(this);
        this.doPost= this.doPost.bind(this);
    }

    handleId(event) {
        this.setState({id: event.target.value});    
    }
    handleTitle(event) {
        this.setState({title: event.target.value});    
    }
    handleDesc(event) {
        this.setState({desc: event.target.value});    
    }

    async doGet(){ //VALIDADO
        const http=new XMLHttpRequest();
        http.onload = ()=>{
            console.log(http.response);
            this.setState({lista_items:http.response})
        }
        http.open('GET',"http://localhost:8080/film");
        http.responseType='json';
        http.send();
    }
    async doGetId(id){ //VALIDADO
        const http=new XMLHttpRequest();
        http.onload = ()=>{
            let listalterna=[];
            console.log(http.response);
            listalterna.push(http.response)
            this.setState({item_gotten_by_id:listalterna})
        }
        http.open('GET',`http://localhost:8080/film/${id}`);
        http.responseType='json';
        http.send();
    }
    async doPost(title,desc){ //VALIDADO

        const http=new XMLHttpRequest();
        http.onload = ()=>{
            alert("Successfully inserted");
            this.setState({lista_items:[]})
        }
        http.open('POST',`http://localhost:8080/film?title=${title}&desc=${desc}`);
        http.send();
    }
    async doPut(id,title,desc){ //VALIDADO
        const http=new XMLHttpRequest();
        http.onload = ()=>{
            alert("Successfully updated");
        }
        http.open('PUT',`http://localhost:8080/film/${id}?title=${title}&desc=${desc}`);
        http.send();
    }
    async doDelete(id){ //VALIDADO
        const http=new XMLHttpRequest();
        http.onload = ()=>{
            console.log("Successfully deleted");
        }
        http.open('DELETE',`http://localhost:8080/film/${id}`);
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
                        <button className="get" onClick={this.doGet}>get all films</button>
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
                        <input className="form" onChange={this.handleTitle} placeholder="Title?"/>
                        <input className="form" onChange={this.handleDesc} placeholder="Film desc?"/>
                        <button onClick={ () => this.doPost(this.state.title,this.state.desc) }>Send</button>
                </div>
            )
        }else if(this.state.verboHttp=="put"){
            formput = (
                <div className="formulary">
                        <input className="form" type="number" onChange={this.handleId} placeholder="new Film id"/>
                        <input className="form" onChange={this.handleTitle} placeholder="new title?"/>
                        <input className="form" onChange={this.handleDesc} placeholder="new desc film?"/>
                        <button onClick={ () => this.doPut(this.state.id,this.state.title,this.state.desc) }
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
                <h1>Soy Film</h1>
                    <div className="actor_options_buttons">
                        <button onClick={ () => this.setState({verboHttp:"get"}) }>get</button>
                        <button onClick={ () => this.setState({verboHttp:"id"}) }>get id</button>
                        <button onClick={ () => this.setState({verboHttp:"post"}) }>post</button>
                        <button onClick={ () => this.setState({verboHttp:"put"}) }>put</button>
                        {/* <button onClick={ () => this.setState({verboHttp:"delete"}) }>delete</button> */}
                    </div>

                    {/* Son los distintos formularios */}
                    {formget}
                    {formid}
                    {formpost}
                    {formput}
                    {/* {formdelete} */}

                    <div className="listado">
                        { formget &&(
                                this.state.lista_items.map((item,index) => 
                                    <div className="item" key={index}>
                                        <h6>Id: {item.id}</h6>
                                        <h6>Name: {item.title}</h6>
                                        <h6>Rating: {item.rating}</h6>
                                        <br/>
                                        <p>Desc: {item.description}</p>
                                    </div>
                                )
                            )
                        }
                        { formid &&(
                                this.state.item_gotten_by_id.map((item,index) => 
                                    <div className="item" key={index}>
                                        <h6>Id: {item.id}</h6>
                                        <h6>Name: {item.title}</h6>
                                        <h6>Rating: {item.rating}</h6>
                                        <br/>
                                        <p>Desc: {item.description} </p>
                                    </div>
                                )
                            )
                        }
                    </div>
            </div>
        )
    }
}