import React, {useState} from 'react'
import './Form.css'

const Form: React.FC<any> = (props) => {
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
        <h3 onClick={reset} className='reset'>Reset Search</h3>
    </form>
  )
}

export default Form