import React, { useEffect, useState } from 'react'

export default function Units(props) {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(count)
    }, [count])


    const troops = (e) => {
        if(props.points>=100){
            setCount(count + 1)
            props.setPoints(props.points - 100)
        } else {
            console.log("insufficient points!")
        }
    }

    const recycle = (e) => {
        if(count > 0){
            setCount(count - 1)
            props.setPoints(props.points + 30)
        } else {
            console.log("count at 0")
        }
    }

    return (
        <>
            <div>Units</div>
            <p>Legionnaires: {count}</p>
            <button onClick={(e) => troops(e)}>buy</button>
            <button onClick={(e) => recycle(e)}>recycle</button>
        </>
    )
}
