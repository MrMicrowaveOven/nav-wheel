import { useState } from 'react';
import './Wheel.css';

const Wheel = (props) => {
  const {numSpokes} = props

  const [active, setActive] = useState(false)

  const fourSpokes = () => {
    return  active
      ? <div
          className="wheel-container"
          onTouchEnd={() => setActive(false)}
          onMouseUp={() => setActive(false)}
        >
          <div className="top">back</div>
          <div className="row">
            <div className="left">prev</div>
            <div className="circle"></div>
            <div className="right">next</div>
          </div>
          <div className="bottom">more</div>
        </div>
      : <div className="wheel-container">
          <div
            className="circle-inactive"
            onMouseDown={() => setActive(true)}
            onTouchStart={() => setActive(true)}
          ></div>
        </div>
  }

  const spokesOptions = {
    4: fourSpokes()
  }

  return(
    <div>{spokesOptions[numSpokes]}</div>
  )
}
export default Wheel;
