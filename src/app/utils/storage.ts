import { Task } from '../types/task'; // task tipini import et (doğru yol sana bağlı)

const STORAGE_KEY = 'taskify_tasks';

export const getStoredTasks = (): Task[] => {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) as Task[] : [];
};

export const setStoredTasks = (tasks: Task[]): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};
