import { useState } from 'react'
import './ToDoForm.css'
function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')//for input
    const [textInput, setTextInput]=useState('');//for textarea
    const handleChange = (e) => {
        setUserInput(e.target.value)
    }
    const handleTextChange = (e) => {
        setTextInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput, textInput)
    }
    return (
        <form className="display"onSubmit={handleSubmit}>
            <input 
                className="input_text"
                value={userInput}
                type="text"
                onChange={handleChange}
                            />  
            <textarea type="text" value={textInput} onChange={handleTextChange}></textarea>      
            <button>add</button>
        </form>
    )
}
export default ToDoForm