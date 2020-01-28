import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {
    const {author,url, title,description,source, urlToImage} = noticia;
    const image = (urlToImage) ? (
        <div className='card-image'>
        <img src={urlToImage} alt={title}></img>
        <samp className="card-title">{source.name}</samp>
    </div>
    ): null;

    return (
        <div className="col s12 m6 l4">
           <div className="card">
               {image}
                <div className='card-content'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_black"
                     rel="noopener noreferror" 
                     className="waves-effect waves-light btn">Ver Noticia Completa</a>
                </div>
           </div>
        </div>
    );
};

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired,
};

export default Noticia;