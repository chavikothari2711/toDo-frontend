import axios from "axios"

const baseUrl = "https://todobackend-wch3.onrender.com"

const getAllToDo = async(setToDo) =>{
    try{
        const {data} = await axios.get(baseUrl);
        setToDo(data)

    }catch(err){
        console.log(err)
    }
}

const addToDo = async(text,setText,setToDo)=>{
    try {
      const {data} = await axios.post(`${baseUrl}/save`,{text});
      if(data==='added'){
        setText("");
        getAllToDo(setToDo)
      }
    } catch (error) {
        console.log(error)
    } 
}


const updateToDo = async(toDoId,text,setText,setToDo,setIsUpdating)=>{
    try {
        const {data} = await axios.put(`${baseUrl}/update`,{_id:toDoId,text});
        console.log(data)
        if(data==='updated succesfully'){
            setText("");
            setIsUpdating(false);
            getAllToDo(setToDo);    
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteToDo = async(_id,setToDo)=>{
    try {
       const {data} = await axios.post(`${baseUrl}/delete`,{_id})
       if(data==="deleted succesfully"){
            getAllToDo(setToDo)
       }

    } catch (error) {
        console.log(error)
    }
}
export {getAllToDo,addToDo,updateToDo,deleteToDo}
