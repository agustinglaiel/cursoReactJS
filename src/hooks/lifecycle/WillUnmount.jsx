/**
 * Ejemplo de uso del metodo WillUnmount en componente clase
 * y el uso de hook para componente funcional
 */

import React, { Component, useEffect } from "react";

export class WillUnmount extends Component {
  componentWillUnmount() {
    console.log("Comportamiento antes de que el componente desaparezca");
  }

  render() {
    return (
      <div>
        <h1>WillUnmount</h1>
      </div>
    );
  }
}

export const WillunmountHook = () => {
  useEffect(() => {
    // aca no ponemos nada sino que ponemos directamente en el return
    return () => {
      console.log("Comportamiento antes de que el componente desaparezca");
    };
  }, []);

  return (
    <div>
      <h1>WillUnmount</h1>
    </div>
  );
};
