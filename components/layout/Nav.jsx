import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <Link href="/">Inicio</Link>
      <Link href="/populares">Populares</Link>
      <Link href="/nuevo-producto">Nuevo Producto</Link>
    </nav>
  );
};

export default Nav;
