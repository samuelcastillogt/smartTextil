import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// teñido, tejido, corte, confección)
const titles = {
    production: [
        { id: 'prenda', label: 'Prenda', minWidth: 70 },
        { id: 'i1', label: 'ID', minWidth: 50 },
        {
          id: 'teñido',
          label: 'Teñido',
          minWidth: 50,
          align: 'right',
          format: (value) => value.toLocaleString('en-US'),
        },
        {
          id: 'tejido',
          label: 'Tejido',
          minWidth: 50,
          align: 'right',
          format: (value) => value.toLocaleString('en-US'),
        },
        {
          id: 'corte',
          label: 'Corte',
          minWidth: 50,
          align: 'right',
          format: (value) => value.toFixed(2),
        },
        {
            id: 'confeccion',
            label: 'Confeccion',
            minWidth: 50,
            align: 'right',
            format: (value) => value.toFixed(2),
          },
          {
            id: 'listo',
            label: 'Terminados',
            minWidth: 50,
            align: 'right',
            format: (value) => value.toFixed(2),
          },
          {
            id: 'total',
            label: 'Total',
            minWidth: 50,
            align: 'right',
            format: (value) => value.toFixed(2),
          },
      ],
      MP: [
        { id: 'name', label: 'Nombre', minWidth: 50 },
        { id: 'code', label: 'ID', minWidth: 50 },
        { id: 'medida', label: 'Medida', minWidth: 50 },
        {
          id: 'minimo',
          label: 'Minimo',
          minWidth: 50,
          align: 'right',
          format: (value) => value.toLocaleString('en-US'),
        },
        {
          id: 'existencia',
          label: 'Existencia',
          minWidth: 50,
          align: 'right',
          format: (value) => value.toLocaleString('en-US'),
        },
      ]
}

export default function StickyHeadTable(props) {
    const {active, rows} = props
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {titles[active].map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
               rows.map(row => <TableRow key={row}>
                    {row.map((i, index) => <TableCell key={i} align={index === 0 ? "left" : "right"} style={{maxWidth: "75px"}}>{i}</TableCell>)}
               </TableRow>) 
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}