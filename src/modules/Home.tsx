import React, { ReactElement } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    alignItems: 'center'
  },
  dateField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dateRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  button: {
    marginTop: theme.spacing(1)
  }
}))

const Home = (): ReactElement => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.dateRow}>
        <TextField
          label={'FROM'}
          type="datetime-local"
          className={classes.dateField}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          label={'TO'}
          type="datetime-local"
          className={classes.dateField}
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
      <TextField id="standard-basic" label={'Device ID'} />
      <Button variant='contained' className={classes.button}>
        {'SEARCH LOGS'}
      </Button>
    </div>
  )
}

export default Home