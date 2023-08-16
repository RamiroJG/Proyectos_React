import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Form = ({ addItem }) => {
    const [newItemName, setNewItemName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!newItemName.length){
            toast.error('Please provide a value')
            console.log('Formulario vacio')
        }else{
            // agregamos el item al array
            addItem(newItemName)
            //luego limpiamos el formulario
            setNewItemName('')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h4>Grocery Bud</h4>
            <div className='form-control'>
                <input 
                    type="text" 
                    placeholder='add item' 
                    className='form-input'
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)} 
                />
                <button type='submit' className='btn'>Add Item</button>
            </div>
        </form>
    )
}

export default Form