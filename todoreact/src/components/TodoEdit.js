import { TextField } from "@mui/material";
import useInputState from "../hooks/useInputState";

export default function EditTodo({id, editTodo, task, toggle}) {

    const [value, handleChange, reset] = useInputState(task)

    return (
        <form onSubmit={e => {
            e.preventDefault()
            editTodo(id, value)
            toggle()
        }}
            style={{marginLeft: '1rem', width: '50%'}}
        >
            <TextField
                margin="normal"
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>
    )
}