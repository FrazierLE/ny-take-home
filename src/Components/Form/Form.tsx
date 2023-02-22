import React, {useState} from 'react'

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
        placeholder='Search...'
        value={input}
        name='input'
        onChange={(event) => handleChange(event)}  
        />
        <button onClick={reset}>Clear Search</button>
    </form>
  )
}

export default Form