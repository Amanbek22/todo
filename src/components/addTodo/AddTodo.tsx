import React, {FormEvent} from 'react';

interface AddTodoProps {
    onCreate: (value:string) => void
}
const AddTodo:React.FC<AddTodoProps> = ({onCreate}) => {
    const [status, setStatus] = React.useState(false)
    const [value, setValue] = React.useState('')
    const onSubmit = (e:FormEvent) => {
        e.preventDefault()
        onCreate(value)
        setValue('')
        setStatus(false)
    }
    return (
        <div className={'addTodo'}>
            {status
                ? <form onSubmit={onSubmit}>
                    <input  minLength={3} required autoFocus={true} type="text" value={value} onChange={e => setValue(e.target.value)}  placeholder={"Add some todo"}/>
                    <button type={"submit"}>Submit</button>
                </form>
                : <button onClick={()=>setStatus(!status)}>+ Add Todo</button>}
        </div>
    );
}

export default AddTodo;