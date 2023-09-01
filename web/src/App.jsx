import React,{Suspense, useEffect} from 'react'
import "./Assets/styles/App.css"
const Hero = React.lazy(() => import('./Components/Hero'))
const TechStack = React.lazy(() => import('./Components/TechStack'))
const Projects = React.lazy(() => import('./Components/Projects'))
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
    // Add event listener to the document to capture mouse movements on the entire page
    document.addEventListener('mousemove', rotateCard);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', rotateCard);
    };
  }, []);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <TechStack />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
    </div>
  )
}

export default App