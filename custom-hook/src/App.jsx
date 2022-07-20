import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// this is a custom hook
const useLocalStorage = (key, defaultValue = '') => {
  const [state, setState] = useState(() => window.localStorage.getItem(key) || defaultValue)

  useEffect(() => {
    console.log('use effect')
    window.localStorage.setItem(key, state)
  }, [state])
  return [state, setState]
}

function App() {
  const [count, setCount] = useState(0)

  // const getInitialState = () => {
  //   console.log('get intial state')
  //   return window.localStorage.getItem('name') || ''
  // }

  // add a so called lazy initializer by passing a function
  // and then it is only called once
  // const [name, setName] = useState(() => window.localStorage.getItem('name') || '')

  // useEffect(() => {
  //   console.log('use effect')
  //   window.localStorage.setItem('name', name)
  // })

  // here we are using our custom hook
  const [name, setName] = useLocalStorage('name')

  const handleChange = e => setName(e.target.value)


  return (
    <div className="App">
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {name ? <strong>Hello {name}</strong> : 'Please type your name'}
        <input type="text" onChange={handleChange} />
      </div>
    </div>
  )
}

export default App
