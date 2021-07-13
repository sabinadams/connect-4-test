import React from 'react';
import '../style.css';

export default function Circle({ ind, circleDef }) {
  const COLORS = {
    '0': '',
    '1': 'yellow',
    '2': 'red'
  };
  return (
    <>
      <div className={`circle ${COLORS[circleDef]}`} />
    </>
  );
}
