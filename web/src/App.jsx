import React,{Suspense, useEffect} from 'react'
import "./Assets/styles/App.css"
import Loading from './Components/Loading'
const Hero = React.lazy(() => import('./Components/Hero'))
const TechStack = React.lazy(() => import('./Components/TechStack'))
const Projects = React.lazy(() => import('./Components/Projects'))
const Contact = React.lazy(() => import('./Components/Contact'))
const Footer = React.lazy(() => import('./Components/Footer'))
function App() {
  
  const [middleX,setMiddleX] = React.useState(window.innerWidth/2);
  const [middleY,setMiddleY] = React.useState(window.innerHeight/2);
  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setMiddleX(window.innerWidth/2);
      setMiddleY(window.innerHeight/2);
    })
    return ()=>{
      window.removeEventListener('resize',()=>{
        setMiddleX(window.innerWidth/2);
        setMiddleY(window.innerHeight/2);
      }
      )
    }
  },[window.innerWidth,window.innerHeight])

  const rotateCard = (event) => {
    const cards = document.querySelectorAll('.card-container');
    const x = event.clientX;
    const y = event.clientY;

    const offsetX = ((x - middleX) / middleX) * 30;
    const offsetY = ((y - middleY) / middleY) * 30;

    for (let i = 0; i < cards.length; i++) {
      cards[i].style.setProperty('--rotateX', `${-offsetY}deg`);
      cards[i].style.setProperty('--rotateY', `${offsetX}deg`);
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', rotateCard);
    return () => {
      document.removeEventListener('mousemove', rotateCard);
    };
  }, []);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <TechStack />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App