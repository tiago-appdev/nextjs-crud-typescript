import prisma from '@/libs/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const tasks = await prisma.task.findMany()
  return NextResponse.json(tasks);
}

export async function POST(request: Request) {
  const data = await request.json()
  const newTask = await prisma.task.create({data})
  return NextResponse.json(newTask);
}
