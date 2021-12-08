import { useState, useEffect } from 'react'
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  query,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';

import { app } from '../../firebase/config';
import { FiCheckSquare, FiTrash2 } from 'react-icons/fi'
import { Container, Content } from './style';

export function Dashboard() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  //* Init firebase services
  const db = getFirestore(app);

  //* Collection ref
  const colRef = collection(db, 'tasks');

  //* Queries
  const q = query(colRef, orderBy('createdAt'));

  //* Readltime Collection data
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      let tasksDb = [];
      snapshot.docs.forEach((doc) => {
        tasksDb.push({ ...doc.data(), id: doc.id })
      })

      setTasks([...tasksDb]);
    });
  }, [q])


  //* Add new task in database
  function handleAddTask() {
    if (!newTask) {
      return;
    }

    const task = {
      title: newTask,
      isCompleted: false,
      createdAt: serverTimestamp()
    }

    addDoc(colRef, task);
    setNewTask('');
  }

  //* Delete task in database
  function handleDeleteTask(id) {
    const docRef = doc(db, 'tasks', id);
    deleteDoc(docRef);
  }

  //* updating status task 
  function handleTaskCompleted(task) {
    const docRef = doc(db, 'tasks', task.id);
    updateDoc(docRef, {
      isCompleted: !task.isCompleted
    });
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