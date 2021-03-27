import React from 'react';
import './App.css';
import { Motion, spring, presets, StaggeredMotion, OpaqueConfig, PlainStyle } from "react-motion";

const App: React.FC = () => {
  // false == left
  // true == right
  const [direction, setDirection] = React.useState(false)

  const slider = ({ x }: PlainStyle) => (
    <svg
      width="300"
      height="150"
    >
      <rect
        width="20"
        height="20"
        x={x}
        y="50%"
      />
    </svg>
  )

  return (
    <>
      <Motion
        style={{ x: spring(direction ? 0 : 250) }}
      >
        {slider}
      </Motion>
      <button
        onClick={() => setDirection(!direction)}
      >Toggle</button>
    </>
  )
}

export default App;