import { useState } from 'react';
import './Wheel.css';

const Wheel = (props) => {
  const {numSpokes} = props

  const [active, setActive] = useState(false)

  const fourSpokes = () => {
    return  <div className="wheel-container">
              <div className="four top">back</div>
              <div className="four left">prev</div>
              <div className="four right">next</div>
              <div className="four bottom">more</div>
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
