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
  const [id, setId] = React.useState('')
  const [from, setFrom] = React.useState('')
  const [to, setTo] = React.useState('')
  const classes = useStyles()

  const handleChangeId = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setId(event.target.value)
  }

  const handleChangeFrom = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFrom(event.target.value)
  }

  const handleChangeTo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTo(event.target.value)
  }

  const handleClick = (): void => {
    console.log(id,from,to)
  }

  const isDisabled = !id || !from || !to

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
          value={from}
          onChange={handleChangeFrom}
        />
        <TextField
          label={'TO'}
          type="datetime-local"
          className={classes.dateField}
          InputLabelProps={{
            shrink: true
          }}
          value={to}
          onChange={handleChangeTo}
        />
      </div>
      <TextField
        label={'Device ID'}
        value={id}
        onChange={handleChangeId}
      />
      <Button
        variant='contained'
        className={classes.button}
        disabled={isDisabled}
        onClick={(): void => handleClick()}
      >
        {'SEARCH LOGS'}
      </Button>
    </div>
  )
}

export default Home