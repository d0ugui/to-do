import { useState } from 'react'

import { FiCheckSquare, FiTrash2 } from 'react-icons/fi';
import { Container, Content } from './style';

export function Dashboard({ initialTasks, onSubmit}) {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState(initialTasks);


  //* Add new task
  function handleAddTask() {
    if (!newTask) {
      return;
    }

    const task = {
      id: Math.random(),
      title: newTask,
      isCompleted: false
    }

    setTasks((prevState) => [...prevState, task]);
  }

  //* Delete task
  function handleDeleteTask(id) {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  //* complete status task 
  function handleTaskCompleted(id) {
    setTasks((prevState) => prevState.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    }))
  }

  return (
    <Container>
      <Content>
        <div className="wrapper">
          <h1>Minhas Tasks</h1>

          <form 
            className="btn"
            onSubmit={onSubmit ? onSubmit : handleAddTask} 
          >
            <label className="sr-only" htmlFor="tarefa">
              Adicionar nova tarefa
            </label>
            <input
              id="tarefa"
              type="text"
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
              placeholder="Adicionar nova terefa" />
            <button data-testid="addTask">
              <FiCheckSquare />
            </button>
          </form>
        </div>

        <div className="task-list">
          <ul>
            {tasks?.map((task) => {
              return (
                <div key={task.id} className={task.isCompleted ? 'completed' : 'uncompleted'}>
                  <li>
                    <input 
                      type="checkbox" 
                      onChange={() => handleTaskCompleted(task.id)} 
                      checked={task.isCompleted} 
                    />
                    {task.title}
                  </li>
                  <button className="remove" onClick={() => handleDeleteTask(task.id)} data-testid="remover">
                    <FiTrash2 />
                  </button>
                </div>
              )
            })}
          </ul>
        </div>
      </Content>
    </Container>
  )
}