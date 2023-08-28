import { useEffect } from "react";

const Patient = ({ patient, setPatient, deletePatient }) => {
    useEffect(() => {
        // console.log("El componente PATIENTS esta listo");
    }, []);


    const handleDelete = () => {
        console.log("Eliminando", id);
        const resp = confirm("¿Quieres eliminar este paciente?");

        if (resp) {
            deletePatient(id);
        }

        // deletePatient(id)
    };

    const { petName, petOwner, ownerEmail, registerDate, petSymptoms, id } =
        patient;
    return (
        <div className="bg-white shadow-md rounded-xl py-5 px-5 mb-5 w-11/12 m-auto">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {""}
                <span className="font-normal normal-case">{petName}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {""}
                <span className="font-normal normal-case">{petOwner}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {""}
                <span className="font-normal normal-case">{ownerEmail}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha de alta: {""}
                <span className="font-normal normal-case">{registerDate}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas: {""}
                <span className="font-normal normal-case">{petSymptoms}</span>
            </p>

            <div className="flex justify-between mt-5">
                <button
                    className="py-2 px-10 bg-indigo-600 hover:bg-green-600 duration-500 ease-in-out cursor-pointer text-white font-bold uppercase rounded-lg"
                    type="button"
                    onClick={() => {
                        setPatient(patient);
                    }}
                >
                    Editar
                </button>
                <button
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 duration-500 ease-in-out cursor-pointer text-white font-bold uppercase rounded-lg"
                    type="button"
                    onClick={handleDelete}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default Patient;
