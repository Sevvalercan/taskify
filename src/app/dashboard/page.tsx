'use client';

import { useTaskContext } from '../context/TaskContext';
import AddTaskForm from '../components/AddTaskForm';
import TaskCard from '../components/TaskCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DashboardPage() {
  const { tasks } = useTaskContext();

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 16 }}>
      <h1 style={{ textAlign: 'center', marginBottom: 24 }}>Görev Listesi</h1>
      <AddTaskForm />
      <div style={{ marginTop: 24 }}>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}
