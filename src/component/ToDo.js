import React from "react";
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

function ToDo(props){
    return(<div className="todo">
        <div className="text styleIt"><h2>{props.text}</h2></div>
        <div className="icons">
            <BiEdit className="icon" onClick={props.updateMode}/>
            <AiFillDelete className = "icon" onClick={props.deleteToDo}/>
        </div>
    </div>);
}

export default ToDo; 