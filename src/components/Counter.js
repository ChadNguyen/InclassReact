import { useState } from "react"

export default function Counter(props) {
    const [count, setCount] = useState(props.intialCount || 0)
    const [title, setTitle] = useState(props.title || 'My Counter')

    function increment(incrementor) {
        setCount(count + incrementor)
        console.log('TEST')
    }

    return (
        <div>
            <h2>{props.title || 'My Counter' }</h2>
            Count: { count }
            <div>
            <button onClick={() => increment(1)}>Increment</button>
            {
                (count > 0) ?
                <>
                <button onClick={() => increment(-1)}>Decrement</button>
                </>
                :
                <></>
            }
            { }
            <button onClick={() => increment(5)}>Add 5</button>
            <button onClick={() => setCount(0)}>Reset Count</button> 
            </div>
        </div>

    )

}
