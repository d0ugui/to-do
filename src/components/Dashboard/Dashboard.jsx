import { useState, useEffect } from 'react'

import { FiCheckSquare, FiTrash2 } from 'react-icons/fi'
import { Container, Content } from './style';

export function Dashboard() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([
    {
      id: Math.random(),
      title: 'Estudar React Native',
      isCompleted: false,
    },
    {
      id: Math.random(),
      title: 'Estudar Next.js',
      isCompleted: false,
    }
  ]);


  //* Add new task in database
  function handleAddTask() {
    if (!newTask) {
      return;
    }

    const task = {
      title: newTask,
      isCompleted: false
    }

    setNewTask('');
  }

  //* Delete task in database
  function handleDeleteTask(id) {
    
  }

  //* updating status task 
  function handleTaskCompleted(task) {
    
  }

  return (
    <Container>
      <Content>
        <div className="wrapper">
          <h1>Minhas Tasks</h1>

          <div className="btn">
            <label className="sr-only" htmlFor="tarefa">
              Adicionar nova tarefa
            </label>
            <input
              id="tarefa"
              type="text"
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
              placeholder="Adicionar nova terefa" />
            <button onClick={handleAddTask}><FiCheckSquare /></button>
          </div>
        </div>

        <div className="task-list">
          <ul>
            {tasks.map((task) => {
              return (
                <div key={task.id} className={task.isCompleted ? 'completed' : ''}>
                  <li>
                    <input type="checkbox" onChange={() => handleTaskCompleted(task)} checked={task.isCompleted} />
                    {task.title}
                  </li>
                  <button onClick={() => handleDeleteTask(task.id)}><FiTrash2 /></button>
                </div>
              )
            })}
          </ul>
        </div>
      </Content>
    </Container>
  )
}