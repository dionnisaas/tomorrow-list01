import { useState } from "react"


export default function DoList() {

   const [tasks, setTasks] = useState(["eat breakfast", "take a shower", "walk the dog"]);
   const [newTask, setNewTask] = useState("")

   function handleInputChange(event){
    setNewTask(event.target.value);
    }

   //function addTask(){

   //}

  // function deleteTask(index){

   //}
   //function moveTaskUp(index){

   //}

   //function moveTaskDown(index){

   //}
   function addTask(){
    if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        setNewTask("");
    }
}

function deleteTask(index){
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
}

function moveTaskUp(index){

    if(index > 0){
        const updatedTasks = [ ...task];
        [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
}

function moveTaskDown(index){
    if(index < tasks.length - 1){
        const updatedTasks = [...task];
        [updatedTasks[index], updatedTasks[index + 1]] =
        [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
}



    return(
<div className="to-do-list">
<h1>what to do tomorrow?</h1>
<div>
    <input
    type="text"
    placeholder="Enter Your Task.."
    value={newTask}
    onChange={handleInputChange}/>
    <button 
    className="add-button"
    onClick={addTask}> 
    Add       
    </button>
</div>
<ol>
    {tasks.map((task,index) =>
    <li key={index}>
        <span className="text">{task}</span>
        <button
          className="delete-button"
          onClick={() => deleteTask(index)}>
            Delete
        </button>
        <button
            className="move-button"
            onClick={() => moveTaskUp(index)}>
                ☝️
            </button>
            <button
            className="move-button"
            onClick={() => moveTaskDown(index)}>
                👇
            </button>
            </li>
            )}
</ol>
</div>

    )
}

