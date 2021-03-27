import React from 'react';
import { Motion, spring, PlainStyle } from "react-motion";

const Demo: React.FC = () => {
  // false == left
  // true == right
  const [direction, setDirection] = React.useState(false)

  const slider = ({ x }: PlainStyle) => (
    <svg
      width="500"
      height="200"
    >
      <rect
        width="50"
        height="50"
        x={x}
        y="50%"
      />
    </svg>
  )

  return (
    <div>
      <Motion
        style={{ x: spring(direction ? 0 : 450) }}
      >
        {slider}
      </Motion>
      <button
        onClick={() => setDirection(!direction)}
      >Toggle</button>
    </div>
  )
}

export default Demo