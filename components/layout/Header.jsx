import Link from "next/link";
import React from "react";
import Buscar from "../ui/Buscar";
import Nav from "./Nav";

import Boton from "../ui/Boton";

const Header = () => {
  let usuario = true;
  function cambio() {
    console.log(usuario);
    if (usuario == true) return (usuario = false);
    usuario = true;
  }

  return (
    <header>
      <div>
        <div>
          <p>P</p>
          <Buscar />
          <Nav />
        </div>
        <div>
          {usuario ? (
            <>
              <p>Hola: Andres</p>
              <button
                onClick={() => {
                  cambio();
                }}
                type="button"
              >
                Cerrar Secion
              </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Boton bgColor="true">Login</Boton>
              </Link>
              <Link href="/crear-cuenta">
                <Boton>Crear Cuenta</Boton>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
