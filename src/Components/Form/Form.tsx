import React, {useState} from 'react'
import './Form.css'
import { formFunctions } from '../../interfaces'

const Form: React.FC<formFunctions> = (props) => {
  const [input, setInput] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value)
    props.filterArticles(event.currentTarget.value)
  }

  const reset = () => {
    props.resetFilter()
    setInput('')
  }

  return (
    <form className='form'>
      <input 
        type='text'    
        placeholder='Search article by title...'
        value={input}
        name='input'
        onChange={(event) => handleChange(event)}  
        />
        <h2 onClick={reset} className='reset'>Reset Search</h2>
    </form>
  )
}

export default Form