/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
  //Creamos dos contadores distintos, cada uno en un estado diferente.
  const [contador1, setcontador1] = useState(0);
  const [contador2, setcontador2] = useState(0);

  //Creamos una referencia con useref() para asociar una variable
  //con un elemento DOM del componente (vista HTML).
  const miRef = useRef();

  function incrementar1() {
    setcontador1(contador1 + 1);
  }

  function incrementar2() {
    setcontador2(contador2 + 1);
  }

  /**
   * trabajamos con useEffect().
   */

  /**
   * Caso 1: Ejecutar SIEMPRE un snippet de codigo
   * Cada vez que hay un cambio en el estado del componente, se ejecuta
   * lo que esté dentro del useEffect().
   
  useEffect(() => {
    console.log("Cambio en el estado del componente");
    console.log("Mostrando referencia a elemento del DOM:");
    console.log(miRef);
  });
  */

  /**
   * Caso 2: Ejecutar solo cuando cambie el estado del contador 1
   * Cada vez que hay un cambio en el contador 1, se ejectuta
   * lo que diga lo que esta dentro del useEffect
   * en caso de que cambie el contador 2, no habrá ejecución
   
  useEffect(() => {
    console.log("Cambio en el estado del componente");
    console.log("Mostrando referencia a elemento del DOM:");
    console.log(miRef);
  }, [contador1]);
  */

  /**
   * Caso3: Ejecutar solo cuando cambie el contador 1 O el contador 2
   */
  useEffect(() => {
    console.log("Cambio en el estado del componente");
    console.log("Mostrando referencia a elemento del DOM:");
    console.log(miRef);
  }, [contador1, contador2]);

  return (
    <div>
      <h1>***Ejemplo de useState, useRef Y useEffect</h1>
      <h2>Contador 1: {contador1}</h2>
      <h2>Contador 2: {contador2}</h2>
      {/*Elemento referenciado */}
      <h4 ref={miRef}>Ejemplo de elemento referenciado.</h4>
      {/* Botones para cambiar los contadores */}
      <div>
        <button onClick={incrementar1}>Incrementar contador 1</button>
        <button onClick={incrementar2}>Incrementar contador 2</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
