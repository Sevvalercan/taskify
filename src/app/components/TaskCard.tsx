'use client';

import { Task } from '../types/task';
import { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { FiEdit, FiTrash, FiCheckCircle } from 'react-icons/fi';

interface Props {
  task: Task;
}

export default function TaskCard({ task }: Props) {
  const { toggleComplete, removeTask, editTask } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleSave = () => {
    if (editedTitle.trim()) {
      editTask({ ...task, title: editedTitle });
      setIsEditing(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 12,
        border: '1px solid #ddd',
        borderRadius: 8,
        marginBottom: 12,
        background: task.completed ? '#d1ffe0' : '#fff',
      }}
    >
      {isEditing ? (
        <input
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          autoFocus
          style={{ flex: 1, marginRight: 8 }}
        />
      ) : (
        <span
          onClick={() => toggleComplete(task.id)}
          style={{ flex: 1, cursor: 'pointer', textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          {task.title}
        </span>
      )}

      <div style={{ display: 'flex', gap: 8 }}>
        <FiEdit style={{ cursor: 'pointer' }} onClick={() => setIsEditing(!isEditing)} />
        <FiTrash style={{ cursor: 'pointer' }} onClick={() => removeTask(task.id)} />
        <FiCheckCircle
          style={{ cursor: 'pointer', color: task.completed ? '#2e7d32' : '#aaa' }}
          onClick={() => toggleComplete(task.id)}
        />
      </div>
    </div>
  );
}
