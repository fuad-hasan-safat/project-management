import React, { useState } from 'react'

export default function NewTask({onAddTask}) {
    const [enteredTask, setEntredTask] = useState('');

    function handleChange(event) {
        setEntredTask(event.target.value);
    }
    function handleClick(){
        if(enteredTask.trim() === ''){
            alert('its a empty string')
            return;
        }
        onAddTask(enteredTask)
        setEntredTask('');
    }
    return (
        <div className='flex items-center gap-4'>
            <input
                value={enteredTask}
                onChange={handleChange} type='text'
                className="w-64 px-2 py-1 rounded-md border-b-2 focus:outline-none focus:border-red-500 bg-stone-200"
            />
            <button
            onClick={handleClick}
                className='text-stone-700 hover:text-stone-950'
            >
                Add Task
            </button>
        </div>
    )
}
