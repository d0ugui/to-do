import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { FiCheckSquare, FiTrash2 } from 'react-icons/fi'
import { Container, Content } from './style';
import api from '../../services/api';

export function Dashboard({ user }) {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  //* Getting todo tasks
  useEffect(() => {
    async function getTodo() {
      const { data } = await api.get(`/users/${user.id}/todos`);

      setTasks(data);
    };

    getTodo();
  }, [])

  //* Add new task
  async function handleAddTask() {
    if (!newTask) {
      return;
    }

    const task = {
      id: Math.random(),
      title: newTask,
      completed: false
    }

    const newResource = await api.post(`/users/${user.id}/todos`, {
      id: user.id,
      title: newTask,
      body: 'Foo', 
      userId: user.id
    });

    console.log(newResource)

    setTasks((prevState) => [task, ...prevState]);

    setNewTask('');
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
          completed: !task.completed
        }
      }
      return task;
    }))
  }

  return (
    <Container>
      <Link to="/">
        Voltar
      </Link>
      <Content>
        <div className="wrapper">
          <h1>
            { user ? `Usuário: ${user.user}` : 'Minhas tasks'}
          </h1>

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
                <div key={task.id} className={task.isCompleted && 'completed'}>
                  <li>
                    <input 
                      type="checkbox" 
                      onChange={() => handleTaskCompleted(task.id)} 
                      checked={task.isCompleted} 
                    />
                    {task.title}
                  </li>
                  <button onClick={() => handleDeleteTask(task.id)}>
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