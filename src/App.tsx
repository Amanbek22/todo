import React, { useEffect, useState} from "react";
import './App.css';
import AddTodo from "./components/addTodo/AddTodo";
import TodoHeader from "./components/todoHeader/TodoHeader";
import TodoItem from "./components/todoItem/TodoItem";
import {Todo} from "./dto";

const todos = JSON.parse(localStorage.getItem("todos") as string)

const App = () => {
    const [arr, setArr] = useState<Todo[]>(todos ? todos : [])
    const [status, setStatus] = useState('any')
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify([...arr]))
    }, [arr])
    const onCheck = (id: number) => setArr(arr.map((todo: Todo) => {
        if (todo.id === id) {
            return { ...todo, isComplete: !todo.isComplete }
        }
        return todo;
    }))
    const onDelete = (id: number) => {
        setArr(arr.filter((item: Todo) => item.id !== id))
    }
    const onCreate = (val: string) => {
        setArr([...arr, {id: Math.random(), isComplete: false, title: val}])
    }

    const list = arr?.filter((item: Todo) => {
        if (status === 'any') {
            return true
        } else if (status === 'done') {
            return item.isComplete
        } else {
            return !item.isComplete
        }
    }).map((item: Todo) => <TodoItem
        key={item.id}
        onDelete={onDelete}
        onCheck={onCheck}
        title={item.title}
        id={item.id}
        isComplete={item.isComplete}
    />)

    return (
        <div className="App">
            <TodoHeader status={status} setStatus={setStatus}/>
            <div className={'list'}>
                {list}
            </div>
            <AddTodo onCreate={onCreate}/>
        </div>
    );
}

export default App;
