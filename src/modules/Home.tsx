import React, { ReactElement } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    height: '100vh',
    width: '100%',
    alignItems: 'center'
  }
}))

const Home = (): ReactElement => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button variant='contained'>
        {'SEARCH LOGS'}
      </Button>
    </div>
  )
}

export default Home