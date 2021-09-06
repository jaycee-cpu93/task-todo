import React, {useState} from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import CardBody from "../UI/CardBody";
import classes from "./AddToDoList.module.css"


const AddToDoList =(props)=>{
    const [enteredTodoList, setEnteredTodoList] = useState("");
    
    const AddToDoHandler = (event)=>{
        event.preventDefault();
        if(enteredTodoList.trim().length===0){
            return;
        }

        props.onAddList(enteredTodoList)
        setEnteredTodoList("")
    }
    
    
    const TextContentHandler = (event) => {
        setEnteredTodoList(event.target.value)
    }
    
    return(
        <Wrapper>
                <CardBody className={classes.input}>
                    <form onSubmit={AddToDoHandler}>
                        <label>Write here</label>
                        <textarea type="text" value={enteredTodoList} placeholder="type your goal for today" onChange={TextContentHandler} />
                        <Button type="submit">Add List</Button>
                    </form>
                </CardBody>
        </Wrapper>
    );
}

export default AddToDoList;