// function App() {
//   return (
//     // Es necesario tener un return para mandar este componete (lo que se renderiza)
//     <>
//       <div>
//         {/* Cuando retorna unelemento tiene que estar encerrado en un solo elemento. Puede ser un div (<div></div>) o un fragmento (<></>)*/}
//         <h1>Hello World</h1>
//         <p>Parrafo 1</p>
//         <input type="text" />
//       </div>
//       {/*es necesario tener la etiqueta de cierre*/}
//     </>
//   );
// }

function App() {
  // const add = (num1 = 0, num2 = 0) => {
  //   const result = num1 + num2;
  //   if (result < 0) {
  //     console.log(`${result} es negativo`);
  //   } else if (result > 0) {
  //     console.log(`${result} es positivo`);
  //   } else {
  //     console.log(`${result} es 0`);
  //   }
  //   console.log(result);
  // };

  // add(2,-9);

  // Las funciones no se pueden declarar dentro del return, ya que en ese caso se mostraran en el DOM

  const edad = 18;
  return (
    <>
      {/*Lo que se encuentra dentro de llaves se comporta como codigo js*/}
      1 + 1 <br />
      {1 + 1} <br />
      {edad >= 18 ? "eres mayor de edad" : "eres menor de edad"}
      { /* Dentro de estas llaves no se pueden abrir nuevas llaves, por eso no se puede utilizar un if normal, sino ternario*/}
      {/* el operador ternario se utilizara por ejemplo para imprimir el componente que se quiera */}
      <div>
        <h1>{'Este es el H1 del APP'.toLowerCase()}</h1>
        <p>Esto es un parrafo del APP</p>
        <p>Edad = {edad}</p>
      </div>
      <div>
        <label htmlFor="">Esto es un label del APP</label>
        <input type="text" name="" id="" />
      </div>
    </>
  );
}

// export default App;
