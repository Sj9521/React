import { useState } from "react"

function App2() {
    const [Value, SetValue] = useState(0)
    function ince() {
        if (Value >=0) {
            SetValue(Value + 1)
        }
    }
    function dec() {
        if (Value > 0) {
            SetValue(Value - 1)
        }
    }
    return (
        <div>
            <h1>App2</h1>
            <h2>{Value}</h2>
            <button onClick={() => {
                ince()
            }}>+</button>
            <button onClick={() => {
                dec()
            }}>-</button>
        </div>
    )
}
export default App2