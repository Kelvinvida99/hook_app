import { useMemo, useState } from "react";
import { useCounter } from "../../hook/useCounter"

const hevyStaff = ( iterationNumber = 100 ) => {
    for(let i = 0; i < iterationNumber; i++ ){
        console.log("aqui vamos...");
    }

    return `${iterationNumber} iteration number`
}


export const MemoHook = () => {

    const {counter, increment} = useCounter(4000);
    const [show, setShow] = useState(true)

    const totalIteration = useMemo(() => hevyStaff(counter), [counter])
    
    return (
        <>
            <h1>Memorize</h1>
            <hr />
            <div>{ totalIteration }</div>

            <button onClick={() => increment()}>
                +1
            </button>

            <button onClick={ () => setShow(!show) }>
                hide/show {JSON.stringify(show)}
            </button>
        </>
    )
}