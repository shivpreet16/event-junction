import React, { useState } from 'react'

const Requrements = () => {
    const [val, setVal] = useState('')
    return (
        <div>
            <input type="text" name="" className='apply-input' placeholder='req' id="" onChange={(newval) => {
                setVal(newval)
                console.log(newval.target.value)
            }} />
        </div>
    )
}

export default Requrements