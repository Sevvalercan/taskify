// src/app/api/tasks/route.ts
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

// GET /api/tasks — Tüm görevleri döner
export async function GET() {
  return NextResponse.json(tasks);
}

// POST /api/tasks — Yeni görev ekler
export async function POST(request: Request) {
  const { title } = await request.json();
  const newTask: Task = {
    id: (tasks.length + 1).toString(),
    title,
    completed: false,
  };
  tasks.push(newTask);
  return NextResponse.json(newTask);
}
