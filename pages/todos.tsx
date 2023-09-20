// todos is a statefull components

import { useState, useEffect } from "react"
import useSWR from "swr"
import { DisplayTodo } from "@/components"

const fetcher = (url:string):any => fetch(url).then(r => r.json())
 
const Todos = () => {
    const [todos, setTodos] = useState<any[]>([])
    const [todo, setTodo] = useState<string>('')
    const {data, isLoading, error} =useSWR('https://jsonplaceholder.typicode.com/todos', fetcher)

    console.log('isLoading',isLoading)
    console.log('error',error)
    console.log('data',data)

    
    useEffect(() =>{
        console.log('data',data)
        if(!isLoading){
             setTodos([...data])
        }
        // console.log('todos')
        // callApi()
    },[data, isLoading])

    // const callApi = () =>{
    //     fetch ('https://jsonplaceholder.typicode.com/todos')
    //         .then(response => response.json())
    //         .then(json => setTodos([...json]))
    // }

    const addTodo = () => {
        // console.log(todos)
        let obj: object = {
            completed: false,
            title: todo,
            userId: 1,
            id: todos?.length+1
        } 
        todos.push(obj)
        setTodos([...todos])

        setTodo('')
        
    }
    return(
        <>
            <h1> HI Todos</h1>&nbsp;
            <input placeholder="Input Task"
                    onChange={(e) => setTodo(e?.target?.value)}
                    value={todo}
            ></input>
            <button onClick={addTodo}>Add Todo</button>
            <br></br>
            <ol>
                {todos?.map((v,i) =>{
                    return (
                        <DisplayTodo todo={v} key={i}/>
                    )
                })}
            </ol>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    )
}
export default Todos