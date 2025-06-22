import { useState } from 'react'
import './App.css'

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries", done: true },
    { id: 2, text: "Call plumber", done: false },
    { id: 3, text: "Finish report", done: true },
    { id: 4, text: "Walk the dog", done: true },
  ])
  const [input, setInput] = useState('')

  const addTask = () => {
    if (!input.trim()) return
    setTasks([...tasks, { id: Date.now(), text: input, done: false }])
    setInput('')
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="rounded-4 shadow-lg p-4 bg-white" style={{ width: 350 }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold mb-0">To-Do List</h4>
          <button
            className="btn btn-primary rounded-circle"
            onClick={addTask}
            style={{ width: 36, height: 36, padding: 0 }}
          >
            +
          </button>
        </div>

        <ul className="list-group list-group-flush">
          {tasks.map(task => (
            <li
              key={task.id}
              className="list-group-item d-flex align-items-center justify-content-between px-2 py-3 border-0"
            >
              <div className="d-flex align-items-center gap-2">
                <div
                  className={`rounded-circle border border-2 d-flex align-items-center justify-content-center ${
                    task.done ? 'bg-success border-success' : 'border-secondary'
                  }`}
                  style={{ width: 20, height: 20, cursor: 'pointer' }}
                  onClick={() => toggleTask(task.id)}
                >
                  {task.done && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.485 1.929a.75.75 0 0 1 1.06 1.06l-9 9a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06L4 10.44l8.485-8.51z" />
                    </svg>
                  )}
                </div>
                <span
                  className={`fw-medium ${task.done ? 'text-decoration-line-through text-muted' : ''}`}
                >
                  {task.text}
                </span>
              </div>
              <button
                className="btn btn-sm btn-outline-danger ms-2"
                onClick={() => deleteTask(task.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5zM6 7a.5.5 0 0 1 .5.5V11a.5.5 0 0 1-1 0V7.5A.5.5 0 0 1 6 7zm4 0a.5.5 0 0 1 .5.5V11a.5.5 0 0 1-1 0V7.5A.5.5 0 0 1 10 7z"/>
                  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1h-1.11l-.401 8.01A2 2 0 0 1 10 14H6a2 2 0 0 1-1.989-1.99L3.611 4H2.5a1 1 0 0 1-1-1V2.5a.5.5 0 0 1 .5-.5h3.09a1.5 1.5 0 0 1 2.82 0h3.09a.5.5 0 0 1 .5.5V3zM4.5 4l.401 8.01a1 1 0 0 0 .999.99h4a1 1 0 0 0 .999-.99L11.5 4h-7z"/>
                </svg>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <input
            className="form-control mb-2 rounded-3"
            placeholder="New task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
          />
          <button className="btn btn-primary w-100 rounded-3" onClick={addTask}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  )
}
