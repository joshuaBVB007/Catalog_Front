import React from "react";


export class Language extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id:0,
            name:"",
            verboHttp:"",
            lista_items:[],
            item_gotten_by_id:[],
        }
        this.handleId = this.handleId.bind(this);
        this.handleName = this.handleName.bind(this);
        this.doGet= this.doGet.bind(this);
        this.doGetId= this.doGetId.bind(this);
        this.doPost= this.doPost.bind(this);
    }

    handleId(event) {
        this.setState({id: event.target.value});    
    }
    handleName(event) {
        this.setState({name: event.target.value});    
    }

    async doGet(){ //VALIDADO
        const http=new XMLHttpRequest();
        http.onload = ()=>{
            console.log(http.response);
            this.setState({lista_items:http.response})
        }
        http.open('GET',"http://localhost:8080/language");
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
        http.open('GET',`http://localhost:8080/language/${id}`);
        http.responseType='json';
        http.send();
    }
    async doPost(name){ //VALIDADO

        const http=new XMLHttpRequest();
        http.onload = ()=>{
            //alert(http.response);
            alert("Successsfully inserted");
            this.setState({lista_items:[]})
        }
        http.open('POST',`http://localhost:8080/language?name=${name}`);
        http.send();
    }
    async doPut(id,name){ //VALIDADO
        const http=new XMLHttpRequest();
        http.onload = ()=>{
            alert("Successsfulley updated");
        }
        http.open('PUT',`http://localhost:8080/language/${id}?name=${name}`);
        http.send();
    }
    async doDelete(id){ //VALIDADO
        const http=new XMLHttpRequest();
        http.onload = ()=>{
            alert("Successfully deleted");
        }
        http.open('DELETE',`http://localhost:8080/language/${id}`);
        http.send();
    }

    render() {
        let formid;
        let formpost;
        let formdelete;
        let formget;
        let formput;
        if(this.state.verboHttp=="get"){//VALIDADO
            formget = (
                <div className="formularyget">
                        {/* <input className="form" placeholder="get"/> */}
                        <button className="get" onClick={this.doGet}>get all Languages</button>
                </div>
            )
        }else if(this.state.verboHttp=="id"){//VALIDADO
            formid = (
                <div className="formulary">
                        <input className="form" type="number" placeholder="id language?" 
                        onChange={this.handleId } 
                        />
                        <button onClick={()=>this.doGetId(this.state.id) }>Send</button>
                </div>
            )
        }else if(this.state.verboHttp=="post"){//VALIDADO
            formpost = (
                <div className="formulary">
                        <input className="form" onChange={this.handleName} placeholder="language name?"  />
                        <button onClick={ () => this.doPost(this.state.name) }>Send</button>
                </div>
            )
        }else if(this.state.verboHttp=="put"){//VALIDADO
            formput = (
                <div className="formulary">
                        <input className="form" type="number" onChange={this.handleId} placeholder="id?"/>
                        <input className="form" onChange={this.handleName} placeholder="new language's name?"/>
                        <button onClick={ () => this.doPut(this.state.id,this.state.name) }
                        >Send</button>
                </div>
            )
        }else if(this.state.verboHttp=="delete"){//VALIDADO
            formdelete = (
                <div className="formulary">
                        <input className="form" onChange={this.handleId} placeholder="delete"/>
                        <button onClick={ () => this.doDelete(this.state.id) }>Send</button>
                </div>
            )
        }

        return(
            <div>
                <h1>Soy Language</h1>
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
                                        <h6>Name: {item.name}</h6>
                                        <h6>Last_update: {item.lastUpdate}</h6>
                                    </div>
                                )
                            )
                        }
                        { formid &&(
                                this.state.item_gotten_by_id.map((item,index) => 
                                    <div className="item" key={index}>
                                        <h6>Id: {item.id}</h6>
                                        <h6>Name: {item.name}</h6>
                                        <h6>Last_update: {item.lastUpdate}</h6>
                                    </div>
                                )
                            )
                        }
                    </div>
            </div>
        )
    }
}