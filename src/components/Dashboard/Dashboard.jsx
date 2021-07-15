import { useState } from 'react'

import { FiCheckSquare, FiTrash2 } from 'react-icons/fi'
import { v4 as uuidv4 } from 'uuid';

import { Container, Content } from './style';

export function Dashboard() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    if (!newTask) {
      return;
    }

    const task = {
      id: uuidv4(),
      title: newTask,
      completed: false,
    }

    setTasks([...tasks, task]);
    setNewTask('');
  }

  function handleDeleteTask(id) {
    const result = tasks.filter(task => task.id !== id);

    setTasks(result);
  }

  function handleTaskCompleted(id) {
    const newTask = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
          }
       }
      return task;
    })

    setTasks(newTask)
  }

  return (
    <Container>
      <Content>
        <div className="wrapper">
          <h1>Minhas Tasks</h1>

          <div className="btn">
            <label className="sr-only" htmlFor="tarefa">Adicionar nova tarefa</label>
            <input 
              id="tarefa" 
              type="text" 
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask} 
              placeholder="Adicionar nova terefa" />
            <button onClick={handleAddTask}><FiCheckSquare/></button>
          </div>
        </div>

        <div className="task-list">
          <ul>
            {tasks.map((task) => {
              return (
                <div key={task.id} className={task.completed ? 'completed' : ''}>
                  <li>
                    <input type="checkbox" onClick={() => handleTaskCompleted(task.id)}/>
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