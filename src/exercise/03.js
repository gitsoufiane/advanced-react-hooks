// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

const CountProvider = props => {
  const [count, setCount] = React.useState(0)
  return <CountContext.Provider value={[count, setCount]} {...props} />
}

function useCounter() {
  const context = React.useContext(CountContext)
  if (!context)
    throw new Error('useCounter must be used within a CountProvider')
  return context
}
function CountDisplay() {
  const [count] = useCounter()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCounter()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
