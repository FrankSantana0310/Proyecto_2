import {config} from '../config';

const baseUrl = `https://newsapi.org/v2/top-headlines?country=us&category=`;
const apiKey = config.apiKey;
 const createUrl = (categoria) => `${baseUrl}${categoria}${apiKey}`;
 export default createUrl;

 