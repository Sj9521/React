import React, { useEffect, useState } from 'react'

function Child() {
    const [count, setCount] = useState(0)
    const [bgColor, setbgcolor] = useState('black')
    
    useEffect(() => {
        console.log("Comp counter is monted/created")
    }, [count])

    useEffect(()=>{
        console.log("Comp color changer is monted/created")
    })
    return (
        <div>
            <h1>Sanjeev</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <hr />
            <div style={{backgroundColor:bgColor,padding:'10px 20px',margin:'10px'}}>
                <button onClick={()=>setbgcolor('red')}>Red</button>
                <button onClick={()=>setbgcolor('green')}>Green</button>
                <button onClick={()=>setbgcolor('blue')}>Blue</button>
                <button onClick={()=>setbgcolor('orange')}>Orange</button>
            </div>
        </div>
    )
}

export default Child