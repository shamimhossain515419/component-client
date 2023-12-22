import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div   className=' max-w-[200px]'>

         <h1  className=' text-3xl text-red-400'>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ratione accusamus, incidunt optio eos quibusdam, tempore officiis blanditiis repellendus voluptatum nulla eligendi asperiores alias, animi eum vero nihil ab harum. Facere illum voluptate, tempora blanditiis sint laborum maxime explicabo quidem porro aliquid corporis consequuntur hic dolore excepturi amet adipisci reprehenderit repellat perferendis magnam quibusdam laboriosam? Eius nihil, ex voluptatibus, dolor facere ipsum in, cum omnis harum perferendis tempore accusamus ratione. Debitis dolorum consequatur quidem tempora officia! Doloremque perspiciatis eius, tempora labore recusandae natus vel nobis id, fuga suscipit repellendus. Natus commodi error adipisci quisquam, debitis delectus perspiciatis odio qui officia!</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
