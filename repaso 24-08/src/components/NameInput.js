import React, { useState } from 'react'

const NameInput = () => {
    const [name, setName] = useState('')

    return (
        <>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <div>Bienvenido {name}</div>
        </>
    )
}

export default NameInput;