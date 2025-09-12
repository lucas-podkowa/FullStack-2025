//este componente puede recibir valores a travez de su propiedad props

// export default function ConPropiedades({name = 'random', boleano}) {

export default function ConPropiedades(props) {
  console.log(props);
  //tambien puedo desestructurar aqui o entre los parentesis donde dice props
  const { name, booleano, arreglos, objetos } = props;
  return (
    <>
      <p>{props.name}</p>
      <p>{name}</p>
      <p>{objetos.nombreCalle}</p>
    </>
  );
}
