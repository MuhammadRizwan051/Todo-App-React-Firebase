import React from 'react'

export default function Button(props) {
    return (
        <>
            <button onClick={props.click} className={`${props.add} ${props.deleteAll} ${props.edit} ${props.delete}`}>
                {props.value}
            </button>
        </>
    )
}