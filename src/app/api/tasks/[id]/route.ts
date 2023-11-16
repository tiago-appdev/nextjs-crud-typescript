import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

interface Params {
  params : {id: string}
}

export async function GET(request: Request, {params} : Params){
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id)
    }
  }) 
  return NextResponse.json(task)
}


export async function PUT(request: Request, {params} : Params){

  const data = await request.json()
  const taskUpdated = await prisma.task.update({
    where: {
      id: Number(params.id)
    },
    data: data
  })
  return NextResponse.json(taskUpdated)
}


export async function DELETE(request: Request, {params} : Params){
  const deletedTask = await prisma.task.delete({
    where: {
      id: Number(params.id)
    }
  }) 
  return NextResponse.json(deletedTask)
}