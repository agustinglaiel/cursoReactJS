/**
 * Ejemplo hooks de:
 * - useState()
 * - useContext()
 */
import React, { useState, useContext } from "react";

/**
 *
 * @returns componente 1
 * dispone de un contexto que va a tener un valor que recibe desde el padre
 */

const miContexto = React.createContext(null);

const Componente1 = () => {
  //inicializamos vacio que va a rellenarse con los datos del contexto del padre.
  const state = useContext(miContexto);

  return (
    <div>
      <h1>El token es: {state.token}</h1>
      {/*Pintamos el componente 2 */}
      <Componente2 />
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);

  return (
    <dix>
      <h2>La sesión es: {state.session}</h2>
    </dix>
  );
};

export default function MiComponenteConContexto() {
  const estadoInicial = {
    token: "1234567",
    session: 1,
  };

  //creamos el estado del componente
  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSesion() {
    setSessionData({
      token: "jwt123456789",
      session: sessionData.session + 1,
    });
  }

  return (
    <miContexto.Provider value={sessionData}>
      {/* Todo lo que esté aca adentro puede leer los datos de sessionData */}
      {/* Ademas, si se actualizan los componentes, tambien se actualizan */}
      <h1>Ejemplo de useState y useContext</h1>
      <Componente1></Componente1>
      <button onClick={actualizarSesion}>Actualizar Sesion</button>
    </miContexto.Provider>
  );
}
