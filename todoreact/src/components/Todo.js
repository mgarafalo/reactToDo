import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material"
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import EditTodo from "./TodoEdit"
import { useRef } from "react"
import useToggle from "../hooks/useToggle"

export default function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {

    const [isEditing, toggle] = useToggle()

    const editBtn = useRef(null)
    const DeleteBtn = useRef(null)

    return (
        <ListItem style={{ height: '64px'}}>
            {!isEditing ?
                <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
                    <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton ref={editBtn} onClick={toggle}>
                            <EditIcon />
                        </IconButton>
                        <IconButton ref={DeleteBtn} onClick={() => removeTodo(id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
                : <EditTodo id={id} task={task} editTodo={editTodo} toggle={toggle} />}
        </ListItem>
    )
}