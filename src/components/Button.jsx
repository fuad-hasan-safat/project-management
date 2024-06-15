import React from 'react'

export default function Button({ children, ...props }) {
    return (
        <button 
        className="px-4 py-2 rounded-md bg-stone-400 text-xs md:text-base text-stone-900 hover:bg-stone-600 hover:text-stone-100" 
        {...props}>
            {children}
        </button>
    )
}
