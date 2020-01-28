const baseUrl = `https://newsapi.org/v2/top-headlines?country=us&category=`;
const apiKey = `&apiKey=6dafe02a898141a6b034fdbc933e8a49`;
 const createUrl = (categoria) => `${baseUrl}${categoria}${apiKey}`;
 export default createUrl;

 