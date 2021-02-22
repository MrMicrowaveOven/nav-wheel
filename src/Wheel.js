import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './Wheel.css';

const Wheel = (props) => {
  const {numSpokes} = props

  const [active, setActive] = useState(false)
  const [highlighted, setHighlighted] = useState(null)

  const handleDrag = (e) => {
    const x = e.changedTouches[0].clientX
    const y = e.changedTouches[0].clientY
    const topRect = top.current.getBoundingClientRect(); //outputs <h3> coordinates
    const leftRect = left.current.getBoundingClientRect(); //outputs <h3> coordinates
    const rightRect = right.current.getBoundingClientRect(); //outputs <h3> coordinates
    const bottomRect = bottom.current.getBoundingClientRect(); //outputs <h3> coordinates

    const inside = isInside([x,y], [topRect, leftRect, rightRect, bottomRect])
    setHighlighted(inside)
  }

  const isInside = (cursor, rects) => {
    const [x, y] = cursor;
    let insider = null
    rects.forEach((rect, i) => {
      const {top, left, right, bottom} = rect;
      if (x > left && x < right) {
        if (y > top && y < bottom) {
          insider = i
        }
      }
    });
    return insider;
  }

  useEffect(() => {
    if(!active) {
      setHighlighted(null)
    }
  },[active])

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
          onTouchMove={(e) => handleDrag(e)}
        >
          <div className={highlighted === 0 ? "top highlighted" : "top"} ref={top}>back</div>
          <div className="row">
            <div className={highlighted === 1 ? "left highlighted" : "left"} ref={left}>prev</div>
            <div className="circle"></div>
            <div className={highlighted === 2 ? "right highlighted" : "right"} ref={right}>next</div>
          </div>
          <div className={highlighted === 3 ? "bottom highlighted" : "bottom"} ref={bottom}>more</div>
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
