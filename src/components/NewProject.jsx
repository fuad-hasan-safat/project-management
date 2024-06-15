import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal';

export default function NewProject({ onAdd, onClose }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const modalref = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDueDate.trim() === '') {
            modalref.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return (
        <>
            <Modal ref={modalref} buttonCaption={'Close'} >
                <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid input</h2>
                <p className='text-stone-600 mb-4'>Oops ... looks like you forgot to enter a value.</p>
                <p className='text-stone-600 mb-4'>Please make sure you provoded a valid value for every input field.</p>
            </Modal>
            <div className='w-[35rem] mt-16 '>
                <menu className='flex items-center justify-end gap-4 my-4'>
                    <li>
                        <button className='text-stone-700 hover:text-stone-950' onClick={onClose}>Cancle</button>
                    </li>
                    <li>
                        <button
                            onClick={handleSave}
                            className='px-6 py-2 rounded-lg bg-stone-800 text-stone-50 hover:bg-stone-950 '>Save</button>
                    </li>
                </menu>
                <div>
                    <Input type='text' ref={title} label={'Title'} />
                    <Input ref={description} label={'Description'} isTextArea />
                    <Input type='date' ref={dueDate} label={'Due Date'} />
                </div>
            </div>
        </>
    )
}
