
import { Counter, DoubleCounter } from './ch03/react-hooks/stateHooks'
import { Parent } from './ch03/react-hooks/memoHooks'
import './App.css'

function App() {


  return (
    <div className="App">
      <Counter initialValue={0} />
      <DoubleCounter initialValue={0} />
      <Parent />
    </div>
  )
}

export default App
