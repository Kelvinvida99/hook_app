import { useState } from "react";
import { useCounter } from "../../hook/useCounter"
import { Small } from "./Small";

export const Memorize = () => {

    const {counter, increment} = useCounter(1);
    const [show, setShow] = useState(true)


    return (
        <>
            <h1>Memorize</h1>
            <hr />
            <div><Small value={counter} /></div>

            <button onClick={() => increment()}>
                +1
            </button>

            <button onClick={ () => setShow(!show) }>
                hide/show {JSON.stringify(show)}
            </button>
        </>
    )
}