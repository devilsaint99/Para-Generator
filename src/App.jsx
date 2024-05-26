import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputGen } from './components/InputGen'
import { RecoilRoot } from 'recoil'
import { TextGen } from './components/TextGen'

function App() {

  return (
    <>
    <div className='main'>
      <h1>
        Para Generator
      </h1>
      <RecoilRoot>
          <InputGen/>
          <TextGen />
      </RecoilRoot>
      
    </div>
    </>
  )
}

export default App
