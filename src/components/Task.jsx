import React from 'react'
import NewTask from './NewTask'

export default function Task({ tasks, onAddTask, onDeleteTask }) {


    return (
        <section>
            <h2 className='text-2xl font-bold text-stone-400 mb-4'>Task</h2>
            <NewTask onAddTask={onAddTask} />
            {tasks?.length <= 0 && <p className='text-stone-800 my-4'>This project does not have any task yet.</p>}

            {tasks?.length > 0 &&
                <ul className='p-4 mt-8 rounded-md bg-stone-100'>
                    {tasks.map((task) => <li className='flex justify-between my-4'
                        key={task.id}>
                        <span> {task.text}</span>
                        <button
                        onClick={()=>onDeleteTask(task.id)}
                            className='text-stone-700 hover:text-red-500'
                        >
                            Clear
                        </button>
                    </li>)}
                </ul>}

        </section>
    )
}
