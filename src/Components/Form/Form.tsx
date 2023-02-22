import React, {useState} from 'react'

const Form: React.FC = () => {
  const [input, setInput] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value)
  }

  const handleClick = () => {
    console.log('click')
    // filter search/look at rancid tomatillos 
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
        <button onClick={handleClick}>Search</button>
        {/* <h3>{input}</h3> */}
    </form>
  )
}

export default Form