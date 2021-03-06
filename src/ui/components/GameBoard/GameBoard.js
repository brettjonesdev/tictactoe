import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Square from './Square'

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
}))

/**
 * Render a game board
 * @return {*}
 * @constructor
 */
const GameBoard = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Box className={classes.row}>
        <Square borderRight borderBottom position={0} />
        <Square borderRight borderLeft borderBottom position={1} />
        <Square borderLeft borderBottom position={2} />
      </Box>
      <Box className={classes.row}>
        <Square borderTop borderRight borderBottom position={3} />
        <Square borderRight borderLeft borderBottom borderTop position={4} />
        <Square borderLeft borderTop borderBottom position={5} />
      </Box>
      <Box className={classes.row}>
        <Square borderTop borderRight position={6} />
        <Square borderRight borderLeft borderTop position={7} />
        <Square borderTop borderLeft position={8} />
      </Box>
    </React.Fragment>
  )
}

export default GameBoard
