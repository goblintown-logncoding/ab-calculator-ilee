import "./contents.css"
import { useState, useRef } from "react";


const Contents = () => {
    const [operationState, setOperationState] = useState("+");
    const [resultState, setResultState] = useState()
    const inputARef = useRef();
    const inputBRef = useRef();

    const handleCalculation = () => {
        const valueA = +inputARef.current.value;
        const valueB = +inputBRef.current.value;
        console.log(valueA + valueB);
        if (operationState === "+") {setResultState(valueA + valueB)}
        if (operationState === "-") {setResultState(valueA - valueB)}
        if (operationState === "*") {setResultState(valueA * valueB)}
        if (operationState === "/") {setResultState(valueA / valueB)}

    }

    return (
        <div className = "content-container">
            <div>
                <button onClick = {() => {setOperationState("+")}}>Add</button>
                <button onClick = {() => {setOperationState("-")}}>Subtract</button>
                <button onClick = {() => {setOperationState("*")}}>Multiply</button>
                <button onClick = {() => {setOperationState("/")}}>Divide</button>
            </div>
            <div className = "input-container">
                <input ref = {inputARef} /> {operationState} <input ref = {inputBRef} /> = {resultState}
            </div>
            <div>
                <button 
                    className = "calculator-container"
                    onClick = {handleCalculation}
                    
                    >Calculate
                </button>
            </div>
        </div>
    )
}

export default Contents;