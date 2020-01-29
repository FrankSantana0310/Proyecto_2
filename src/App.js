import React, { Fragment, useState,useEffect } from "react";
import "./App.css";

import ListaNoticias from "./components/ListaNoticias";
import Formulario from "./components/Formulario";
import getData from "./components/api/api";

// class App extends Component {
//   state = {
//     noticias: [],
//     categoria: '',
//   };

// async componentDidMount() {
//   const  noticias = await  getData(this.state.categoria);

//     this.setState({
//       noticias: noticias.articles
//     });
//   }
 
  
  

  // async componentDidUpdate() {
  //   const noticias = await  getData(this.state.categoria);

  //   this.setState({
  //     noticias: noticias.articles
  //   });
  // }

//   getCategoria = categoria => {
//     this.setState({
//       categoria
//     });
//   };

//   render() {
//     return (
//       <Fragment>
       
//         <Formulario getCategoria={this.getCategoria} />
//         <div className="container white contenedor-noticias">
//           <ListaNoticias noticias={this.state.noticias} />
//         </div>
//       </Fragment>
//     );
//   }
// }

 const App = () => {

  const [categoria,setCategoria] = useState('general');
  const [noticias, setNoticias] = useState([]);

  const fetchNoticias = async () => {
    const noticias = await getData(categoria);
    console.log(`this is noticias in fetch ${JSON.stringify(noticias.articles)}`)
    setNoticias(noticias.articles);
  }
  

  useEffect( () => {
    console.log('Ejecutando....')
    const news = fetchNoticias()
   
  },[categoria])

  const getCategoria = categoria => {
    setCategoria(categoria);
  }
  return (
          <Fragment>
           
            <Formulario getCategoria={getCategoria} />
            <div className="container white contenedor-noticias">
              <ListaNoticias noticias={noticias} />
            </div>
          </Fragment>
        );
}

export default App;
