import React from 'react';
import PropTypes from 'prop-types';
import Noticia from './Noticia';

const ListaNoticias = ({noticias}) => {
    return (
        <div className='row'>
            {noticias && noticias.map(noticia => (
                <Noticia
                key={noticia.url}
                 noticia={noticia}/>
            ))}
        </div>
    );
};

//Documentando
ListaNoticias.propTypes = {
    Noticias: PropTypes.array.isRequired
};

export default ListaNoticias;