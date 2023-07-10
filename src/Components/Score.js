import React from 'react'

const Score = ({date, score}) => (
    <div className='scoreTable'>
    <h3>Date: {date}</h3>
    <p>Score: {score}</p>
    </div>
  );

export default Score