
import { Counter, DoubleCounter } from './ch03/react-hooks/stateHooks'
import './App.css'

function App() {


  return (
    <div className="App">
      <Counter initialValue={0} />
      <DoubleCounter initialValue={0} />
    </div>
  )
}

export default App
