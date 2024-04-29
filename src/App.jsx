import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(50);

  useEffect(() => {
    const onScroll = () => {
      // if scrolled to the bottom
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight
      ) {
        // update the state
        setCount(count + 50);
      }
    };

    // scroll event
    window.addEventListener('scroll', onScroll);

    // memory cleanup, remove listener
    return () => window.removeEventListener('scroll', onScroll);
  }, [count]);

  // generate items
  const elements = [];
  for (let i = 0; i < count; i++) {
    elements.push(<div key={i}>{i}</div>);
  }

  return <>{elements}</>;
}

export default App;
