import React,{Suspense} from 'react'
import "./Assets/styles/App.css"
const Hero = React.lazy(() => import('./Components/Hero'))
const TechStack = React.lazy(() => import('./Components/TechStack'))
function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <TechStack />
      </Suspense>
    </div>
  )
}

export default App