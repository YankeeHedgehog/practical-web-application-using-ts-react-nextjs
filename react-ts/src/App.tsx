import { useState } from 'react'
import { Counter, DoubleCounter } from './ch03/react-hooks/stateHooks'
import { Parent, Parent2 } from './ch03/react-hooks/memoHooks'
import { Clock } from './ch03/react-hooks/effectHooks'
import { Parent as Context } from './ch03/react-hooks/contextHooks'
import { ImageUploader } from './ch03/react-hooks/refHooks'
import UseMemoSample from './ch03/react-hooks/UseMemoHooks'
import { Parent as ImpreativeHandle } from './ch03/react-hooks/imperativeHandleHooks'
import { Input } from './ch03/react-hooks/customHooks'
import './App.css'

import Index from './ch03/practice'

function App() {
  const [component, setComponent] = useState(
    <DoubleCounter initialValue={0} />
  )

  return (
    <div className="App">
      {/* <div className="tab" style={{ minWidth: '500px', minHeight: '500px' }}>
        <button onClick={() => setComponent(<DoubleCounter initialValue={0} />)}>state</button>
        <button onClick={() => setComponent(<><Parent /><Parent2 /></>)}>memo</button>
        <button onClick={() => setComponent(<UseMemoSample/>)}>useMemo</button>
        <button onClick={() => setComponent(<Clock />)}>effects</button>
        <button onClick={() => setComponent(<Context />)}>user context</button>
        <button onClick={() => setComponent(<ImageUploader />)}>ref</button>
        <button onClick={() => setComponent(<ImpreativeHandle />)}>impreative handle</button>
        <button onClick={() => setComponent(<Input />)}>input</button>
        <hr />
        <div className="selected-component">
          {component}
        </div>
      </div> */}
      <Index />
    </div>
  )
}

export default App
