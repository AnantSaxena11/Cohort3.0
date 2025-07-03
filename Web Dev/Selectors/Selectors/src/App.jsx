import React from 'react'
import { RecoilRoot, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { counter, evenSelector } from './Context/atoms/counter'

function App() {
  return (
    <RecoilRoot>
      <Counter />
      <EvenCheck />
    </RecoilRoot>
  )
}

function Counter() {
  const count = useRecoilValue(counter);
  const setCount = useSetRecoilState(counter);
  function inc() {
    setCount(count => count + 2)
  }
  return (
    <>
      {count}
      <button onClick={inc}>Increase</button>
    </>
  )
}
function EvenCheck() {
  const val = useRecoilValue(evenSelector);

  return <>
    {val ? "Even" : "Odd"};
  </>
}
export default App