import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {


    render(){
        return (
            <div className='buscador row '>
                <div className='col s12 m8 offset-m2'>
                    <form >
                        <h2>Encuentra Noticias por categorias</h2>
                        <div className="input-field col s12  white">
                            <select onChange={(e) => this.props.getCategoria(e.target.value)} >
                                <option value='general'>General</option>
                                <option value='health'>health</option>
                                <option value='science'>science</option>
                                <option value='sport'>sport</option>
                                <option value='technology'>technology</option>
                                <option value='business'>business</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

Formulario.propTypes = {
    getCategoria: PropTypes.func.isRequired,
};

export default Formulario;