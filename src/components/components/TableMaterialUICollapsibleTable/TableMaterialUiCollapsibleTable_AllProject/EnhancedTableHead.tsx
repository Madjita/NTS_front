import { Box, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { IProject } from "../../../IDataInterface/IDataInterface";
import { HeadCell } from "../TableMaterialUICollapsibleTable_AllProject";
import { visuallyHidden } from '@mui/utils';

type Order = 'asc' | 'desc';

type Props = {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof IProject) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
    TableEventually: any;
    headCells: HeadCell[];
  }
  
  const EnhancedTableHead:  React.FC<Props> = (props) => {

    const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort,TableEventually,headCells} =
      props;
    const createSortHandler =
      (property: keyof IProject) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
      };
  
    return (
      <TableHead>
        <TableRow>
          <TableCell>
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={'center'}
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
          <TableCell align="center">Добавить часы</TableCell>
        </TableRow>
      </TableHead>
    );
  }
  export default EnhancedTableHead;