import { useState } from 'react'
import { Counter, DoubleCounter } from './ch03/react-hooks/stateHooks'
import { Parent, Parent2 } from './ch03/react-hooks/memoHooks'
import UseMemoSample from './ch03/react-hooks/UseMemoHooks'
import './App.css'

function App() {
  const [component, setComponent] = useState(
    <DoubleCounter initialValue={0} />
  )

  return (
    <div className="App">
      <div className="tab" style={{ minWidth: '500px', minHeight: '500px' }}>
        <button onClick={() => setComponent(<DoubleCounter initialValue={0} />)}>state</button>
        <button onClick={() => setComponent(<><Parent /><Parent2 /></>)}>memo</button>
        <button onClick={() => setComponent(<UseMemoSample/>)}>useMemo</button>
        <hr />
        <div className="selected-component">
          {component}
        </div>
      </div>
    </div>
  )
}

export default App
