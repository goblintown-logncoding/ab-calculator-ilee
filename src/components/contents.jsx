import "./contents.css"

const Contents = () => {
    return (
        <div className = "content-container">
            <div>
                <button>Add</button>
                <button>Subtract</button>
                <button>Multiply</button>
                <button>Divide</button>
            </div>
            <div className = "input-container">
                <input /> ? <input /> =
            </div>
            <div>
                <button className = "calculator-container">Calculate</button>
            </div>
        </div>
    )
}

export default Contents;