import React, { useState } from 'react';
import Column from './components/Column';
import './style.css';

export default function App() {
  const [columns, setColumns] = useState([
    { currentIndex: 0, circles: [0, 0, 0, 0, 0, 0] }, // col 1
    { currentIndex: 0, circles: [0, 0, 0, 0, 0, 0] },
    { currentIndex: 0, circles: [0, 0, 0, 0, 0, 0] },
    { currentIndex: 0, circles: [0, 0, 0, 0, 0, 0] },
    { currentIndex: 0, circles: [0, 0, 0, 0, 0, 0] },
    { currentIndex: 0, circles: [0, 0, 0, 0, 0, 0] },
    { currentIndex: 0, circles: [0, 0, 0, 0, 0, 0] } // col 7
  ]);

  // Player IDS 1 and 2
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const addCircle = columnIndex => {
    // Add circle to array
    const newDataSet = columns;
    newDataSet[columnIndex].circles[
      newDataSet[columnIndex].circles.length -
        (newDataSet[columnIndex].currentIndex + 1)
    ] = currentPlayer;

    newDataSet[columnIndex].currentIndex++;
    setColumns(newDataSet);

    // Set new player
    const newCurrentPlayer = currentPlayer === 1 ? 2 : 1;
    setCurrentPlayer(newCurrentPlayer);
  };

  return (
    <>
      <div className="game-grid">
        {columns.map((col, i) => (
          <Column
            circles={col.circles}
            key={i}
            colNum={i}
            addCircle={addCircle}
          />
        ))}
      </div>
    </>
  );
}
