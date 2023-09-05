import React, { Component } from 'react';
import PropTypes from 'prop-types'; //nos sirven para especificar el tipo del dato que le pasamoos.


class Greeting extends Component { //las clases las ponemos en mayusculas. 
    constructor(props){ //props son propiedades o atributos que le damos a los componentes. 
        super(props); //informacion que pasamos por atributos.
        this.state = { //esto es algo privado del componente y no lo podemos cambiar a menos que usemos una funcion especifica. 
            age : 29 
        }
    }

    render() {
        return ( //en jsx no podemos renderizar mas de un elemento padre (Ej: no mas de un div). 
            <div> 
                <h1>
                    Hola {this.props.name}! 
                </h1>
                <h2>
                    Tu edad es {this.state.age} años.
                </h2>
                <div>
                    <button onClick={this.birthday}> {/*le estamos pasando un evento*/}
                        Cumplir años 
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
                {
                    age : prevState.age + 1
                }
            ))
    }
}


Greeting.propTypes = { //contenido que le paso a un componente desde un componente superior. 
    name: PropTypes.string, //le decimos que name es una prop de tipo string. 
};


export default Greeting;
