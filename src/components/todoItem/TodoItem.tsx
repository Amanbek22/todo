import React from 'react';
import {Todo} from "../../dto";

type TodoItemProps = {
    onCheck: (id:number) => void
    onDelete: (id:number) => void
}
const TodoItem:React.FC<Todo & TodoItemProps> = ({id, title, isComplete, onCheck, onDelete}) => {
    return (
        <div className={`item`}>
            <input type="checkbox" defaultChecked={isComplete} onChange={()=> onCheck(id)} />
            <p className={isComplete ? 'checked' : ''}>{title}</p>
            <button onClick={()=>onDelete(id)}>x</button>
        </div>
    );
}

export default TodoItem;