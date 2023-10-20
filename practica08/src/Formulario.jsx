import MiFieldSet from "./MiFieldSet";


function Formulario() {
    return (
        <>
            <form action="">
                <MiFieldSet titulo="Datos Personales" input1="Nombre:" input2="Apelido:"/>
                <MiFieldSet titulo="Datos Generales" input1="Nombre:" input2="Apelido:"/>
                <input type="submit" value="Enviar Datos" />
            </form>
            
        </>
    )
}

export default Formulario