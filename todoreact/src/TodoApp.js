import { Paper, AppBar, Toolbar, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useTodoState from "./hooks/useTodoState";

export default function TodoApp() {

    const initialTodos = [{id: 1, task: 'poop', completed: false}]
    const {todos, removeTodo, addTodo, editTodo, toggleTodo } = useTodoState(initialTodos)   

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color="primary" position="static" style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>React ToDos</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent={'center'} style={{ marginTop: '1rem' }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList 
                        todos={todos} 
                        removeTodo={removeTodo} 
                        toggleTodo={toggleTodo} 
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}