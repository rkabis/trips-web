import React, { ReactElement } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

import CustomTable from '../components/CustomTable'

import gql from 'graphql-tag'
import { useLazyQuery } from '@apollo/react-hooks'

const query = gql`
  query get_trip_log(
    $dateFilter: DateFilterInput
    $orderBy: [OrderByInput]
    $first: Int
    $or: [SearchInput]
    $filter: [SearchInput]!
  ) {
    get_trip_log(
      dateFilter: $dateFilter
      filter: $filter
      or: $or
      first: $first
      orderBy: $orderBy
    ) {
      id
      device_id
      device_alias
      plateno
      datestamp
      gps_received
      gps_delay
      alert_codes
      alert_ids
      alert_msgs
      direction
      fuel_reading
      temperature
      group_ids
      group_names
      location {
        lat
        lon
      }
      odometer_reading
      speed
      created
      modified
      creator
    }
  }
`

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
  },
  results: {
    marginTop: theme.spacing(2)
  }
}))

const Home = (): ReactElement => {
  const [id, setId] = React.useState('')
  const [from, setFrom] = React.useState('')
  const [to, setTo] = React.useState('')
  const classes = useStyles()

  const [getLogs, { data, loading, error }] = useLazyQuery(query, {
    variables: {
      'dateFilter': {
        'field': 'datestamp',
        'gte': from,
        'lte': to
      },
      'orderBy': { 'field': 'datestamp', 'direction': 'asc' },
      'first': 1000,
      'or': [
        { 'field': 'alert_msgs', 'value': 'Left' },
        { 'field': 'alert_msgs', 'value': 'Entered' }
      ],
      'filter': [{ 'field': 'device_id', 'value': id }]
    }
  })

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
    getLogs()
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
        label={'Device ID (ex. 16936)'}
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
      <div className={classes.results}>
        {
          loading && <CircularProgress />
        }
        {
          error && <Typography>{'Error'}</Typography>
        }
        {
          data && <CustomTable data={data} />
        }
      </div>
    </div>
  )
}

export default Home