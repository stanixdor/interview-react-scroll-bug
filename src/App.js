import logo from './logo.svg'
import './App.css'
import React from 'react'

function App() 
{
  const scrollRef = React.useRef(null)

  function Scroll()
  {
    scrollRef.current.scrollIntoView({behavior: 'smooth'})
  }

  React.useEffect(() =>
  {
    Scroll()
  },[])

  return (
    <div className='App'>
      <img src='https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg' />
      <img src='https://images.pexels.com/photos/1643409/pexels-photo-1643409.jpeg' />
      <img src='https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg' />
      <img src='https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg' />
      <img src='https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg' />
      <h1 ref={scrollRef}>SCROLLEAR AQUI</h1>
    </div>
  );
}

export default App;
