

const baseUrl = `https://newsapi.org/v2/top-headlines?country=us&category=`;
const apiKey = '&apiKey=d6641710c3f047f0b383f09803e3f3d7';
 const createUrl = (categoria) => `${baseUrl}${categoria}${apiKey}`;
 export default createUrl;

 