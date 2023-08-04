import React from "react"
import Todo from "./component/ToDo"
import {addToDo, getAllToDo,updateToDo,deleteToDo} from "./utils/HandleApi"
function App() {
  const [toDoId,setToDoId] = React.useState("")
  const [text,setText] = React.useState("");
  const [isUpdating,setIsUpdating] = React.useState(false)
  const [toDo,setToDo] = React.useState([]);
  React.useEffect(()=>{
    getAllToDo(setToDo)
  },[]);

  const updateMode = (_id,text) =>{
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>To Do App</h1>
        <div className="top">
          <input 
          type="text" 
          placeholder="Add ToDo.."
          value={text}
          onChange={(e)=> setText(e.target.value)}
          ></input>
          <div 
          className="add" 
          onClick={isUpdating? 
          ()=>updateToDo(toDoId,text,setText,setToDo,setIsUpdating)
          :() => addToDo(text, setText, setToDo)}>
          {!isUpdating?"Add":"Update"}</div>
        </div>
        <div className="list">
          {toDo.map((item)=> <Todo 
          key={item._id} 
          text={item.text}
          updateMode={() => updateMode(item._id,item.text)} 
          deleteToDo= {() => deleteToDo(item._id,setToDo)}           
          /> )}
          
        </div>
      </div>
    </div>
  );
}

export default App;
