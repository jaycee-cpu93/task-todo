import React from "react";
import CardBody from "../UI/CardBody";
import classes from "./ListToDo.module.css"


const ListToDo = (props) =>{
    return(
        <CardBody className={classes.todos}>
            <ul>
                {props.todos.map((todo) => (
                    <li>
                        {todo.task}
                        </li>
                ))}
            </ul>
            </CardBody>
    );
}

export default ListToDo;