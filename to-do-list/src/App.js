import { useState } from 'react'
function App() {

  const [toDoList, setToDoList] = useState([])
  const [newTask, setNewTask] = useState("")

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    setToDoList([...toDoList, newTask])
  }


  return (
    <div className='flex flex-col items-center my-10 '>
      <div className="flex justify-center gap-2">
        <input type="text" placeHolder="Write Task" onChange={handleChange}
          className="border-2 border-slate-300 rounded-lg px-2" />
        <button onClick={addTask} className=" bg-blue-600 px-4 py-2 rounded-lg font-bold text-white hover:bg-blue-500">
          Add Task
        </button>
      </div>

      <div>
        <h1 className='font-bold my-5'>{toDoList.map((task) => {
          return <h1>{task}</h1>
        })}</h1>
      </div>
    </div>
  );
}

export default App;
