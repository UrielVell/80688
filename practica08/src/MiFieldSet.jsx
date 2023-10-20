
import './MiFieldSet.css'
function MiFieldSet(props){
    const {titulo, input1, input2} = props
    
    return (
    <>
        <fieldset>
            <legend>{titulo}</legend>
            <label htmlFor={input1}>{input1} </label>
            <input type="text" id={input1} />
            <label htmlFor={input2}>{input2} </label>
            <input type="text" id={input2} />
        </fieldset>
    </>
    )
}


export default MiFieldSet