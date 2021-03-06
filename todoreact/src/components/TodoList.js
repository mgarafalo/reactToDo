import { Divider, List, ListItem, ListItemText, Paper } from "@mui/material";
import Todo from "./Todo";

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    if (todos.length) 
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) => (
                        <>
                            <Todo
                                key={todo.id}
                                id={todo.id}
                                task={todo.task}
                                key={todo.id}
                                completed={todo.completed}
                                removeTodo={removeTodo}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo}
                            />
                            {i < todos.length - 1 && <Divider />}
                        </>
                    ))}
                </List>
            </Paper>
        )
    return null
}