/**
 * Ejemplo de uso del Hook useState
 *
 * Crear un componente de tipo funcion y acceder a su esstado privado
 * a traves de un hook y, ademas, poder modificarlo.
 */

import React, { useState } from "react";

const Ejemplo1 = () => {
  //valor inicial para un contador
  const valorInicial = 0;

  //valor inicial para una persona
  const personaInicial = {
    nombre: "Agustin",
    email: "agustin@gmail.com",
  };

  /**
   * queremos que el VALORINICIAL Y PERSONAINICIAL
   * sean parte del estado del componente para asi poder gestionar su cambio
   * y que este se vea reflejado en la vista del componente.
   *
   * const [nombreVariable, funcionParaCambiar] = useState(valorinicial)
   */

  const [contador, setcontador] = useState(valorInicial);
  const [persona, setpersona] = useState(personaInicial);

  /**
   * Funcion para actualizar el estado privado que contiene el contador
   */
  function incrementarContador() {
    //funcion para cambiar el nuevo valor
    setcontador(contador + 1);
  }

  /**
   * funcion para actualizar el estado de persona en el componente
   */
  function actualizarPersona() {
    setpersona({
      nombre: "Agustin1",
      email: "agustin1@gmail.com",
    });
  }

  return (
    <div>
      <h1>*** Ejemplo de useState() ***</h1>
      <h2>Contador: {contador}</h2>
      <h2>Datos de la persona:</h2>
      <h3>Persona: {persona.nombre}</h3>
      <h3>Email: {persona.email}</h3>
      {/* Bloque de botones para actualizar el estado del componentes */}
      <div>
        <button onClick={incrementarContador}>Incrementar Contador</button>
        <button onClick={actualizarPersona}>Actualizar Persona</button>
      </div>
    </div>
  );
};

export default Ejemplo1;
