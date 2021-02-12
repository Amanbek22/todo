import React, {ChangeEvent} from 'react';

interface TodoHeaderProps  {
    status:string
    setStatus:(val:string)=>void
}
const TodoHeader:React.FC<TodoHeaderProps> = (props) => {
    return (
        <span className={'header'}>
            <div>React Todo App</div>
            <select className={'filter'} value={props.status} onChange={(e:ChangeEvent<HTMLSelectElement>) => props.setStatus(e.target.value)}>
                <option value="any">Все</option>
                <option value="done">Done</option>
                <option value="todo">In progress</option>
            </select>
        </span>
    );
}

export default TodoHeader;