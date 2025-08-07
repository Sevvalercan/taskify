'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Task } from '../types/task';
import { getStoredTasks, setStoredTasks } from '../utils/storage';
import { toast } from 'react-toastify';

interface TaskContextType {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleComplete: (id: string) => void;
  removeTask: (id: string) => void;
  editTask: (updatedTask: Task) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(getStoredTasks());
  }, []);

  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks(prev => [...prev, newTask]);
    toast.success('Görev eklendi');
  };

  const toggleComplete = (id: string) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const removeTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
    toast.error('Görev silindi');
  };

  const editTask = (updatedTask: Task) => {
    setTasks(prev =>
      prev.map(t => (t.id === updatedTask.id ? { ...updatedTask, updatedAt: new Date().toISOString() } : t))
    );
    toast.info('Görev güncellendi');
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleComplete, removeTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
