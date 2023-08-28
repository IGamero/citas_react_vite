function Header(props) {
  // const { numbers, letters, someValue } = props;
  // console.log(props);
  // console.log(numbers);
  // someValue('de hijo a padre');
  return (
    <>
      <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
        Seguimiento Pacientes {"" /* Estas comillas generan un espacio*/} <br />
        <span className="text-indigo-600">Veterinaria</span>
      </h1>
    </>
  );
}

export default Header;

// export default function Header() {
//   return <h1>Desde Header</h1>;
// }

// Ambas exportaciones son correctas
