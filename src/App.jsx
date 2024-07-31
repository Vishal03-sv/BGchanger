import { useState } from 'react'


function App() {
  const [color, setColor] = useState("white")

  return (
    <>
       <div className="flex justify-center w-[100vw] h-[100vh]" style={{background:color}}>
        <div className="flex justify-center gap-3 flex-col bg-`${color}` "> 
          <button onClick={()=>setColor("red")} className='rounded bg-red-600 border-black w-[10vw] h-[10vh] text-white'>Red</button>
          <button onClick={()=>setColor("green")} className='rounded bg-green-600 border-black w-[10vw] h-[10vh] text-white'>Green</button>
          <button onClick={()=>setColor("yellow")} className='rounded bg-yellow-600 border-black w-[10vw] h-[10vh] text-white'>Yellow</button>
          <button onClick={()=>setColor("pink")} className='rounded bg-pink-600 border-black w-[10vw] h-[10vh] text-white'>Pink</button>
          <button onClick={()=>setColor("white")} className='rounded bg-white-600 border-black w-[10vw] h-[10vh] text-black'>white</button>
          <button onClick={()=>setColor("blue")} className='rounded bg-blue-600 border-black w-[10vw] h-[10vh] text-white'>Blue</button>
          <button onClick={()=>setColor("purple")} className='rounded bg-purple-600 border-black w-[10vw] h-[10vh] text-white'>Purple</button>
        </div>
       </div>
    </>
  )
}

export default App
