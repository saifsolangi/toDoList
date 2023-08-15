import { useState } from 'react'
function App() {

  const [toDoList, setToDoList] = useState([])
  const [newTask, setNewTask] = useState("")



  const handleChange = (event) => {
    setNewTask(event.target.value)
    console.log(newTask)
  }

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask
    }
    setToDoList([...toDoList, task])
  }

  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id));

  }


  return (
    <div className='flex flex-col items-center my-10 '>
      <div className="flex justify-center gap-2">
        <input type="text" placeholder="Write Task" required onChange={handleChange}
          className="border-2 border-slate-300 rounded-lg px-2" />
        <button onClick={addTask} className=" bg-blue-600 px-4 py-2 rounded-lg font-bold text-white hover:bg-blue-500">
          Add Task
        </button>
      </div>

      <div>
        <h1 className='font-bold my-5'>{toDoList.map((task) => {
          return (
            <div className='flex gap-5 justify-between items-center my-3'>
              <input type='checkbox' />
              <h1>{task.taskName}</h1>
              <button onClick={() => deleteTask(task.id)} className=' bg-red-600 px-2 py-1 rounded-md font-bold text-white hover:bg-red-500'>Delete</button>
            </div>

          );
        })}</h1>
      </div>
    </div>
  );
}

export default App;
