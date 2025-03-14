import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Pados() {
    const [s1, setS] = useState('This is state surveillance bitch');
    const [count, setCount] = useState(0);
    function handleS1 () {
        setS('fuck you');
        setCount(count + 1);
    }
    useEffect(() => {
        console.log('first render pados');
    }, [s1])
    return (
        <>
             {s1}
             {/* {console.log('pados')} */}
             <br/>
             {count > 0 && <h4>Trump is here {count}</h4>}
            <button onClick={handleS1}>Eliminate govt</button>
            <br/>
            <Link to="/"><button>Utopia</button>
            </Link>
        </>
    )
}
