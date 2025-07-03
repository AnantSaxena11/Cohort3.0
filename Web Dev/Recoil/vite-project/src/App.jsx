import React from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { counter } from './store/atoms/counter';

function App() {
  return (
    <>
     hi how are you
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
    </>
   
  )
}

function Counter() {
     const count = useRecoilValue(counter)
    return (
      <>
      {count}
      </>
    )
}

export default App