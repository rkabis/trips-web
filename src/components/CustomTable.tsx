import React, { ReactElement } from 'react'

import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

interface Props {
	data: any;
}

const CustomTable = (props: Props): ReactElement => {
  const { data } = props

  if (data.get_trip_log.length == 0) {
    return (
      <Typography>{'No logs found.'}</Typography>
    )
  }

  const rows = data.get_trip_log

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>{'Datestamp'}</TableCell>
            <TableCell>{'Alert Messages'}</TableCell>
            <TableCell>{'Group Name'}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow key={row.id}>
              <TableCell align="right">{row.datestamp}</TableCell>
              <TableCell align="right">{row.alert_msgs.toString()}</TableCell>
              <TableCell align="right">{row.group_names.toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CustomTable