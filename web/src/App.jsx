import React,{Suspense} from 'react'
import "./Assets/styles/App.css"
const Hero = React.lazy(() => import('./Components/Hero'))
function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
    </div>
  )
}

export default App