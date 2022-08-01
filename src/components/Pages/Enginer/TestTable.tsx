import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

interface Data {
  calories: string;
  carbs: number;
  fat: string;
  name: string;
  protein: number;
}

function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: number,
  protein: number,
): Data {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData('204366', 'KYVO3', '', 67, 4.3),
  createData('206232', 'Crane', 'Folignio', 51, 4.9),
  createData('260287', 'KPP', 'Porvoo', 24, 6.0),
  createData('260400', 'Boilers', 'Kipas', 24, 4.0),
  createData('260407', 'HSPM2', 'Spremberg', 49, 3.9),
  createData('260416', 'Rosenberg', '-', 87, 6.5),
  createData('260418', 'Burgo', '', 37, 4.3),
  createData('TI625151.10', 'PM9', 'Segezha', 94, 0.0),
  createData('110381', 'Lava-EURE', '-', 65, 7.0),
  createData('DSME', '1 Scrubber', 'Korea', 98, 0.0),
  createData('DSME', '2 Scrubber', 'Korea', 98, 0.0),
  createData('260423', 'Lava EURE Esmeraldas', 'Singapore', 81, 2.0),
  createData('260420', 'Lava-E Marstal', '-', 9, 37.0),
  createData('260422', 'Lava EDI Essen', 'Singapore', 63, 4.0),
  createData('260435', 'Lava 19K Madrid', '-', 63, 4.0),
  createData('260446', 'Lava 19K Maastricht', 'Taiwan', 63, 4.0),
  createData('260422', 'Lava EDI Elba', 'Taiwan', 63, 4.0),
  createData('260422.07', 'Lava EDI Essex', 'Taiwan', 63, 4.0),
  createData('260435', 'Lava-19K Manchester', 'Taiwan', 63, 4.0),
  createData('260422.08', 'Lava EDI Evora', 'Taiwan', 63, 4.0),
  createData('260422', 'Lava EDI Eindhoven', 'Taiwan', 63, 4.0),
  createData('260449', 'Klabin', 'Brasil', 63, 4.0),
  createData('206254', 'LTH Baas WDR', '-', 63, 4.0),
  createData('260462', 'OCO', 'Finland', 63, 4.0),
  createData('260405', 'PM National Security Ventures', 'Egypt', 63, 4.0),
  createData('206254', 'LTH Baas WDR', 'Singapore', 63, 4.0),
  createData('260453', 'CMA CGM APL DANUBE', '-', 63, 4.0),
  createData('260500', 'Lila TM4', 'Turkey', 63, 4.0),
  createData('260491', 'Hayat TM9', 'Russia', 63, 4.0),
  createData('260424', 'CMA A.LINKOLN', 'Spain', 63, 4.0),
  createData('260453_030', 'CMA COLUMBIA', 'COLUMBIA', 63, 4.0),
  createData('260453_021', 'CMA RHONE', 'RHONE', 63, 4.0),
  createData('U1065AAA1', 'NSL3', 'Tampere', 63, 4.0),
  createData('210217', 'SWE VANQUISH TM5', '-', 63, 4.0),
  createData('TX025AAH1', 'LSZZ PM3', '-', 63, 4.0),
  createData('260489', 'Beta Centauri TM8', 'Poland', 63, 4.0),
  createData('K61156', 'K61156', 'Brasil', 63, 4.0),
  createData('260513', 'ND Jingzhou China', 'New RB', 63, 4.0),
  createData('318009', 'Kruger Brompton', 'QC via Valmet THU - Blue Jay Project', 63, 4.0),
  createData('S2021-RFQ493 ', 'Netherlands Scrubber service work', '-', 63, 4.0),
  createData('110443 ', 'SojitsMS N1220 MSB commissioning ship 1&2', '-', 63, 4.0),
  createData('110419 ', 'APL DANUBE', '-', 63, 4.0),
  createData('200665 ', 'Turkey Paper Machine IO test', 'Turkey', 63, 4.0),
  createData('110386 ', 'GDR', 'Hong Kong', 63, 4.0),
  createData('STX L34 ', 'STX L34', 'France', 63, 4.0),
  createData('206288 ', 'NB516', '-', 63, 4.0),
  createData('268047 ', 'ND DG', 'China', 63, 4.0),
  createData('268046 ', 'ND CQ', 'China', 63, 4.0),
  createData('CMA CGM Jules Verne ', 'CMA CGM Jules Verne', 'Malaysia', 63, 4.0),
  createData('U2003A', 'Portugal Hydro powerplant', '', 63, 4.0),
  createData('W1002A', 'PUMA - MP28', 'Brazil', 63, 4.0),
  createData('-', 'Slovakia', 'Slovakia', 63, 4.0),
  createData('T1011A', 'ND Beihai CP10RB SRS', 'China', 63, 4.0),
  createData('260453', 'CMA CGM APL DANUBE', '-', 63, 4.0),
];


/*
for (let i = 0; i < 1000; i++) { // выведет 0, затем 1, затем 2
    rows.push(createData(String(i), 305, 3.7, 67, 4.3))
  }*/

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Code project',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Project name',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Location',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Time',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Another',
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

export default function TestTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('calories');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer sx={{ maxHeight: 580 }}>
          <Table
            stickyHeader
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25,50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}