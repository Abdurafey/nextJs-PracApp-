import Link from "next/link"
import { useState, useEffect } from "react"
const Counter = () =>{
    const [counter,setCounter] = useState<number>(0)

    useEffect(()=>{
        console.log('empty use effect')

        return () => console.log('unmounted')
    },[])

    useEffect(() =>{
        console.log('useEffect counter ', counter)
    }, [counter])

    const incrementCount = ():void =>{
        setCounter(counter+1)
    }
    const decrementCount = ():void =>{
        setCounter(!counter?0:counter-1)
    }
    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={incrementCount}>Increase</button>
            <br></br>
            <button onClick={decrementCount}>Decrease</button>
            <br></br>
            <Link href={'/blog'}>Blog</Link> 
        </>
    )
}

export default Counter