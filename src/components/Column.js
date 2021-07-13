import React from 'react';
import Circle from './Circle';

import '../style.css';

export default function Column({ colNum, circles, addCircle }) {
  return (
    <>
      <div className="column" onClick={() => addCircle(colNum)}>
        <div className="circles-container">
          {circles.map((circle, i) => (
            <Circle key={i} ind={i} circleDef={circle} />
          ))}
        </div>
      </div>
    </>
  );
}
