import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PatientsList from "./components/PatientsList";

function App() {
    // const initianPatienListState = () => {
    //     if (JSON.parse(localStorage.getItem("patientList"))) {
    //         return JSON.parse(localStorage.getItem("patientList"));
    //     } else {
    //         return [];
    //     }
    // };

    const initianPatienListState = () => JSON.parse(localStorage.getItem("patientList")) || [];  // Este codigo y el de arriba son iguales
    const [patients, setPatients] = useState(initianPatienListState);
    const [patient, setPatient] = useState({});

    useEffect(() => {
        localStorage.setItem("patientList", JSON.stringify(patients));
    }, [patients]);

    // localStorage.setItem("patientList", JSON.stringify(patients));

    const deletePatient = (id) => {
        const updatedPatientes = patients.filter(
            (patient) => patient.id !== id
        );

        setPatients(updatedPatientes);
    };

    // const someValue = (val) => {
    //   console.log(val);
    // };
    return (
        <div className="container mx-auto mt-20">
            <Header
            // numbers={[1, 2, 3, 4, 5]}
            // leters={["a", "b", " c"]}
            // someValue={someValue}
            />
            <div className="mt-12 md:flex">
                <Form
                    patients={patients}
                    setPatients={setPatients}
                    patient={patient}
                    setPatient={setPatient}
                />
                <PatientsList
                    patients={patients}
                    setPatient={setPatient}
                    deletePatient={deletePatient}
                />
            </div>
        </div>
    );
}

export default App;
