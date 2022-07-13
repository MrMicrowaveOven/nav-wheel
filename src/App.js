import './App.css';
import Wheel from './Wheel.js'

function App() {
  const isMobile = window.innerWidth <= 768;
  return (
    isMobile
      ? <div className="App">
          <Wheel
            numSpokes={4}
          />
        </div>
      : <div className="non-mobile-alert">Sorry, this page is only meant to be viewed on mobile!  Please come back again on a mobile device.</div>
  );
}

export default App;

// This is a change
