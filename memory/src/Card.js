import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({ card, feedback, onClick }) => (
  <div className={`card ${feedback}`} onClick={() => onClick(card)}>
    <span className="symbol">
      {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
    </span>
  </div>
)

// const Greeter = ({ whom }) => (
//   <button onClick={() => console.log(`Bonjour ${whom}!`)}>
//     Vas-y, clique!
//   </button>
// )

export default Card
