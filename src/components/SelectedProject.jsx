import React from 'react'
import Button from './Button'
import Task from './Task'

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, tasks }) {
  console.log({ project })
  const formatteddate = new Date(project.dueDate).toLocaleDateString('bn', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return (
    <div className='w-[35rem] mt-16 '>
      <header className='pb-4 mb-4 border-b-4 border-stone-400'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold text-stone-500 mb-2'>{project.title}</h1>
          <Button onClick={onDelete}>Delete</Button>
        </div>
        <p className='mb-4 text-stone-400'>{formatteddate}</p>
        <p className='text-stone-600 whitespace-pre-wrap'>{project.description}</p>
      </header>
      <Task
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
        tasks={tasks}
      />
    </div>
  )
}
