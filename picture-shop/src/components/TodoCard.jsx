import React from 'react'
import '../index.css';


export default function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo } = props
    return (
        <li className='todoItem' >
            {children}
            <div className='actionsContainer'>
                <button onClick={(index) => {
                    handleEditTodo(index)
                }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={(index) => {
                    handleDeleteTodo(index)
                }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}