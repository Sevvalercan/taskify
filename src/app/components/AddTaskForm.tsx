'use client';

import { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

export default function AddTaskForm() {
  const [title, setTitle] = useState('');
  const { addTask } = useTaskContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
      <input
        type="text"
        placeholder="Görev ekle..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ flex: 1, padding: 8, borderRadius: 8, border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ padding: '8px 16px', borderRadius: 8, background: '#21445B', color: '#fff' }}>
        Ekle
      </button>
    </form>
  );
}
