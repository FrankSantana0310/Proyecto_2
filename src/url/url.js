

const baseUrl = `https://newsapi.org/v2/top-headlines?country=us&category=`;

 const createUrl = (categoria) => `${baseUrl}${categoria}${process.env.REACT_APP_NEW_API_KEY}`;
 export default createUrl;

 