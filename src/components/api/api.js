import createUrl from "../../url/url"

const getData = async (categoria) => {

   const respuesta = await fetch(createUrl(categoria));
   const noticias = await respuesta.json();
   return noticias;
};

export default getData;
