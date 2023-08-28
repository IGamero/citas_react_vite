// const FormError = ({ errorMsg }) => {
const FormError = ({ children }) => {
    // children toma todos los parametros que se pasan
    return (
        <>
            <div className="bg-red-600 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
                {/* <p>{errorMsg}</p> */}
                {children}
            </div>
        </>
    );
};

export default FormError;
