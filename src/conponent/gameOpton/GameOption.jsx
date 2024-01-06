import styles from './GameOpton.module.css'
import Icon from '../icon/Icon'

const GameIcon = ({ iconName }) => <Icon iconName={iconName} size="25px" /> 

function GameOption ({ status }) {
  return (
    <div className={styles.gameOption}>
      {
        status === 1 && <GameIcon iconName="circle" />
      }
      {
        status === -1 && <GameIcon iconName="x" />
      }
      {
        status === 2 && <GameIcon iconName="abc" />
      }
    </div>
  )
}

export default GameOption