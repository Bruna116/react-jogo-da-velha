import { useState, useEffect } from 'react'
import styles from './Game.module.css'

import Icon from '../icon/Icon'
import GameOption from '../gameOpton/GameOption'

const winnerTable = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function Game () {
  const [gameState, setGameState] = useState(Array(9).fill(0))
  const [currentPlayer, setCurrentPlayer] = useState(-1)
  const [winner, setwinner] = useState(0)

  const handleClick = (pos) => {
    if (gameState[pos] === 0 && winner === 0) {
      let newGameState = [...gameState]
      newGameState[pos] = currentPlayer
      setGameState(newGameState)  
    }
  }
  
  const verifyGame = () => {
    winnerTable.forEach((Line) => {
      const values = Line.map((pos) => gameState[pos])
      const sum = values.reduce((sum, value) => sum + value)
      if (sum === 3 || sum ===-3) {
        setwinner(sum / 3)
      }
    })
  }
  
  useEffect(() => {
    setCurrentPlayer(currentPlayer * -1)
    verifyGame()
  }, [gameState])

  return (
    <div className={styles.gameContent}>
      <div className={styles.game}>
      {
        gameState.map((value, pos) => 
          <GameOption 
            key={`game-opiton-pos-${pos}`}
            status={value}
            onClick={() => handleClick(pos)}
          />)
      }
    </div>
    <div className={styles.gameInfo}>
      <h4>Próximo a jogar</h4>
      {
        currentPlayer === 1 && <Icon iconName="circle" />
      }
      {
        currentPlayer === -1 && <Icon iconName="x" />
      }
    </div>
    </div>
    
  )
}

export default Game