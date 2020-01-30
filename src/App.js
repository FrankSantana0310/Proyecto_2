import React, { Fragment, useState, useEffect } from "react";
import "./App.css";

import ListaNoticias from "./components/ListaNoticias";
import Formulario from "./components/Formulario";
import getData from "./components/api/api";



const App = () => {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);

  const fetchNoticias = async () => {
    const noticias = await getData(categoria);

    setNoticias(noticias.articles);
  };

  useEffect(() => {
    console.log(process.env.REACT_APP_NEW_API_KEY);
  fetchNoticias();
  }, [categoria]);

  const getCategoria = categoria => {
    setCategoria(categoria);
  };
  return (
    <Fragment>
      <Formulario getCategoria={getCategoria} />
      <div className="container white contenedor-noticias">
        <ListaNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
};

export default App;
