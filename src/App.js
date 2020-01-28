import React, { Component, Fragment } from "react";
import "./App.css";

import ListaNoticias from "./components/ListaNoticias";
import Formulario from "./components/Formulario";
import getData from "./components/api/api";

class App extends Component {
  state = {
    noticias: [],
    categoria: '',
  };

async componentDidMount() {
  const  noticias = await  getData(this.state.categoria);

    this.setState({
      noticias: noticias.articles
    });
  }
 
  
  

  async componentDidUpdate() {
    const noticias = await  getData(this.state.categoria);

    this.setState({
      noticias: noticias.articles
    });
  }

  getCategoria = categoria => {
    this.setState({
      categoria
    });
  };

  render() {
    return (
      <Fragment>
       
        <Formulario getCategoria={this.getCategoria} />
        <div className="container white contenedor-noticias">
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </Fragment>
    );
  }
}

export default App;
