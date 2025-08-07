// src/app/api/tasks/[id]/route.ts
import { NextResponse } from 'next/server';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

let tasks: Task[] = [
  { id: '1', title: 'İlk görev', completed: false },
  { id: '2', title: 'İkinci görev', completed: true },
];

// GET /api/tasks/[id] — Görevi getir
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const task = tasks.find(t => t.id === id);
  if (!task) {
    return NextResponse.json({ error: 'Görev bulunamadı' }, { status: 404 });
  }
  return NextResponse.json(task);
}

// PUT /api/tasks/[id] — Görevi güncelle
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const body = await request.json();
  const taskIndex = tasks.findIndex(t => t.id === id);

  if (taskIndex === -1) {
    return NextResponse.json({ error: 'Görev bulunamadı' }, { status: 404 });
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title: body.title ?? tasks[taskIndex].title,
    completed: body.completed ?? tasks[taskIndex].completed,
  };

  return NextResponse.json(tasks[taskIndex]);
}

// DELETE /api/tasks/[id] — Görevi sil
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  tasks = tasks.filter(t => t.id !== id);
  return NextResponse.json({ message: 'Görev silindi' });
}
