import { useEffect } from "react";
import Patient from "./Patient";

const PatientsList = ({ patients, setPatient, deletePatient}) => {
    // Reto 2
    useEffect(() => {
        // patients.length > 0 && console.log("Nuevo paciente (Reto 2)");
    }, [patients]);
    return (
        <>
            <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
                {patients && patients.length ? ( // (Es un return implicito)
                    <>
                        <h2 className="font-black text-3xl text-center">
                            Listado Pacientes
                        </h2>
                        <p className="text-lg mt-5 text-center mb-10">
                            Administra tus {""}
                            <span className="text-indigo-600 font-bold">
                                Pacientes y Citas
                            </span>
                        </p>
                    </>
                ) : (
                    <>
                        <h2 className="font-black text-3xl text-center">
                            No hay pacientes
                        </h2>
                        <p className="text-lg mt-5 text-center mb-10 pb-20">
                            Cuando agreges tu primer paciente {""} <br />
                            <span className="text-indigo-600 font-bold">
                                ¡Aparecerá aqui debajo!
                            </span>
                        </p>
                    </>
                )}
                {patients.map((patient) => (
                    <Patient
                        key={patient.id} // Cuando se iteran componentes es necesario pasar un id unico
                        patient={patient}
                        setPatient={setPatient}
                        deletePatient={deletePatient}
                    />
                ))}
                <div className="pb-5"></div>
            </div>
        </>
    );
};

export default PatientsList;
