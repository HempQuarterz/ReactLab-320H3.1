import React from 'react';
import Score from './Score';

const Learner = ({ name, bio, scores }) => (
  
    <div>
        <h2>{name}</h2>
        <p>{bio}</p>
        {scores.map((score,index) => (
        <Score key={index} date={score.date} score ={score.score} />
        ))}
    </div>
  );

export default Learner