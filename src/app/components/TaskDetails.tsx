// src/app/components/TaskDetails.tsx

import { Task } from '../types/task';

interface TaskDetailsProps {
  task: Task;
}

export default function TaskDetails({ task }: TaskDetailsProps) {
  return (
    <div style={{ padding: 16, border: '1px solid #ddd', borderRadius: 8, marginTop: 20 }}>
      <h3>{task.title}</h3>
      {task.description && <p>{task.description}</p>}
      <p>
        Durum: {task.completed ? 'Tamamlandı' : 'Tamamlanmadı'}
      </p>
      {task.createdAt && <p>Oluşturulma: {task.createdAt}</p>}
      {task.updatedAt && <p>Güncellenme: {task.updatedAt}</p>}
    </div>
  );
}
