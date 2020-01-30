

const baseUrl = `https://newsapi.org/v2/top-headlines?country=us&category=`;
const apiKey = '&apiKey=d6641710c3f047f0b383f09803e3f3d7';
//process.env.REACT_APP_API_KEY
 const createUrl = (categoria) => `${baseUrl}${categoria}${process.env.REACT_APP_NEW_API_KEY}`;
 export default createUrl;

 