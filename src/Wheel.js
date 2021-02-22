import React, { useState } from 'react';
import './Wheel.css';

const Wheel = (props) => {
  const {numSpokes} = props

  const [active, setActive] = useState(false)

  const showMe = (ref) => {
    // ReactDOM
    // .findDOMNode(this.refs[ref])
    // .getBoundingClientRect(); //outputs <h3> coordinates
  }

  const top = React.createRef();
  const left = React.createRef();
  const right = React.createRef();
  const bottom = React.createRef();

  const fourSpokes = () => {
    return  active
      ? <div
          className="wheel-container active"
          onTouchEnd={() => setActive(false)}
          onMouseUp={() => setActive(false)}
          onTouchMove={(e) => console.log(e)}
        >
          <div className="top" ref={top}>back</div>
          <div className="row">
            <div className="left" ref={left}>prev</div>
            <div className="circle"></div>
            <div className="right" ref={right}>next</div>
          </div>
          <div className="bottom" ref={bottom}>more</div>
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
