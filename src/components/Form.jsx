// rfce -> estructura basica
/* 
function Form() {
   return (
     <div>Form</div>
   )
 }

export default Form
*/

// rafce -> estructura basica con arrow funct

import { useState, useEffect } from "react";
import FormError from "./FormError";

const Form = ({ patients, setPatients, patient, setPatient }) => {
    const [petName, setPetName] = useState("");
    const [petOwner, setPetOwner] = useState("");
    const [ownerEmail, setOwnerEmail] = useState("");
    const [registerDate, setRegisterDate] = useState("");
    const [petSymptoms, setPetSymptoms] = useState("");

    // nombre variable, metodo setter, valor inicial como parametro en funcion useState
    // setName('Iván') // ERROR

    const [error, setError] = useState(false);

    useEffect(() => {
        // Escucha cuando ocurre un cambio.
        console.log(patient); // Este codigo se ejecuta cuando
    }, [patient]); // La dependeicia (en este caso paciente) cambia. Cambiará cuando demos a submit y se setee el nuevo paciente

    useEffect(() => {
        // Pueden ponerse todos los necesarios
        // console.log("El componente FORM esta listo")
    }, []); // Nunca va a volver a verse este mensaje porque no tiene dependencia

    // Editar paciente useEffect
    useEffect(() => {
        if (Object.keys(patient).length > 0) {
            console.log(patient);
            const { petName, petOwner, ownerEmail, registerDate, petSymptoms } =
                patient;

            setPetName(petName);
            setPetOwner(petOwner);
            setOwnerEmail(ownerEmail);
            setRegisterDate(registerDate);
            setPetSymptoms(petSymptoms);
        }
    }, [patient]);

    // End Editar Paciente useEffect

    // Generar UID
    const generateUID = () => {
        const random = Math.random().toString(36).substring(2);
        const date = Date.now().toString(36);
        return random + date;
    };

    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // validaciond el formulario
        const fields = [
            petName,
            petOwner,
            ownerEmail,
            registerDate,
            petSymptoms,
        ];
        const empyFields = [];
        if (fields.includes("")) {
            // console.log("Todos los campos son obligatorios");
            setError(true);
            return;
        }
        // console.log("Submit");
        setError(false);

        // Objeto paciente
        const patientObj = {
            petName,
            petOwner,
            ownerEmail,
            registerDate,
            petSymptoms,
        };

        if (patient.id) {
            // Editando el registro
            patientObj.id = patient.id;
            // console.log(patientObj); // Este es el paciente actualizado
            // console.log(patient); // Este es la version anterior que hemos actualizado

            const updatedPatient = patients.map((patientState) =>
                patientState.id === patient.id ? patientObj : patientState
            );

            setPatients(updatedPatient);
            setPatient({}); // Reiniciamos Paciente
        } else {
            // Nuevo registro
            patientObj.id = generateUID();
            setPatients([...patients, patientObj]); // ... indica todos los valores de patients. Al poner ',' indicamos que el array tiene un campo nuevo, que es el objeto
        }

        // console.log(patientObj)

        // Reiniciar form
        setPetName("");
        setPetOwner("");
        setOwnerEmail("");
        setRegisterDate("");
        setPetSymptoms("");
    };

    // End Handle Submit

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento Pacientes
            </h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold">Adminístralos</span>
            </p>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-xl py-10 px-5 mb-10 w-11/12 m-auto"
            >
                {error && (
                    // <FormError errorMsg="Todos los campos son obligatorios" />
                    <FormError>
                        <p>Todos los campos son obligatorios</p>
                        {
                            // Podemos enviar parametros de esta forma utilizado "children" en los argumentos de la funcion que controla "FormError"
                            // Eso puede ser util para pasar mas contenido HTML
                        }
                    </FormError>
                )}
                {/* condicion && true indica que si la condicion es cierta pasa X sin necesidad de poner el "else"*/}
                {/* {error ? "Todos los campos son obligatorios" : "Enviando..."} */}
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="pet-name"
                    >
                        Nombre Mascota
                    </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        name="pet-name"
                        id="pet-name"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                        placeholder="Nombre de la Mascota"
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="pet-owner"
                    >
                        Nombre Propietario
                    </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="text"
                        name="pet-owner"
                        id="pet-owner"
                        value={petOwner}
                        onChange={(e) => setPetOwner(e.target.value)}
                        placeholder="Nombre del Propietario"
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="owner-email"
                    >
                        Email
                    </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="email"
                        name="owner-email"
                        id="owner-email"
                        value={ownerEmail}
                        onChange={(e) => setOwnerEmail(e.target.value)}
                        placeholder="Email contacto Propietario"
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="register-date"
                    >
                        Fecha Alta
                    </label>
                    <input
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        type="date"
                        name="register-date"
                        value={registerDate}
                        onChange={(e) => setRegisterDate(e.target.value)}
                        id="register-date"
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="block text-gray-700 uppercase font-bold"
                        htmlFor="pet-symptoms"
                    >
                        Síntomas
                    </label>
                    <textarea
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md resize-none"
                        name="pet-symptoms"
                        rows="3"
                        id="pet-symptoms"
                        value={petSymptoms}
                        onChange={(e) => setPetSymptoms(e.target.value)}
                        placeholder="Describe los síntomas de tu mascota"
                    />
                </div>
                <input
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-green-600 duration-500 ease-in-out cursor-pointer"
                    type="submit"
                    value={patient.id ? "Editar Paciente" : "Añadir Paciente"}
                />
            </form>
        </div>
    );
};

export default Form;
