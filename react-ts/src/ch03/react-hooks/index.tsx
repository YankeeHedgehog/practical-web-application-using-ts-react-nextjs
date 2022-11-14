import { Counter, DoubleCounter } from './stateHooks'
import { Parent, Parent2 } from './memoHooks'
import { Clock } from './effectHooks'
import { Parent as Context } from './contextHooks'
import { ImageUploader } from './refHooks'
import UseMemoSample from './UseMemoHooks'
import { Parent as ImpreativeHandle } from './imperativeHandleHooks'
import { Input } from './customHooks'
import { useState } from 'react'

const ch03Index = () => {
  const [component, setComponent] = useState(<DoubleCounter initialValue={0} />)

  return (
    <div className="tab" style={{ minWidth: '500px', minHeight: '500px' }}>
      <button onClick={() => setComponent(<DoubleCounter initialValue={0} />)}>state</button>
      <button onClick={() => setComponent(<><Parent /><Parent2 /></>)}>memo</button>
      <button onClick={() => setComponent(<UseMemoSample />)}>useMemo</button>
      <button onClick={() => setComponent(<Clock />)}>effects</button>
      <button onClick={() => setComponent(<Context />)}>user context</button>
      <button onClick={() => setComponent(<ImageUploader />)}>ref</button>
      <button onClick={() => setComponent(<ImpreativeHandle />)}>impreative handle</button>
      <button onClick={() => setComponent(<Input />)}>input</button>
      <hr />
      <div className="selected-component">
        {component}
      </div>
    </div>
  )
}

export default ch03Index