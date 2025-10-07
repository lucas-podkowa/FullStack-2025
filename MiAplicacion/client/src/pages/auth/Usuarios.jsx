import React from "react";
import { useEffect, useState } from "react";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function obtenerDatos() {
      try {
        //API del backend
        let response = await fetch("http://localhost:3000/api/usuarios/");
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }
        let datos = await response.json();
        setUsuarios(datos);
      } catch (error) {
        console.error("Error en el Fetch:", error);
      } finally {
        //setLoading(false);
      }
    }
    obtenerDatos();
  }, []);

  return (
    <>
      <h1>Lista de Usuarios</h1>
      <table className="tabla-usuario">
        <thead>
          <tr className="encabezado">
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Mail</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user) => (
            <tr className="fila" key={user.id_usuario}>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.mail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
