import { useState } from 'react';
import './Wheel.css';

const Wheel = (props) => {
  const {numSpokes} = props

  const [active, setActive] = useState(false)

  const fourSpokes = () => {
    return  <div className="wheel-container">
              <div className="top">back</div>
              <div className="row">
                <div className="left">prev</div>
                <div className="right">next</div>
              </div>
              <div className="bottom">more</div>
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
