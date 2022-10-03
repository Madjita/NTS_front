import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  IBusinessTrip,
  IProject,
  IUser,
  IUserProject,
  IWeek,
} from "../../../IDataInterface/IDataInterface";
import {
  getComparator,
  Order,
  stableSort,
} from "../../TableMaterialUICollapsibleTable/TableMaterialUICollapsibleTable_AllProject";
import RowChecksPage from "./RowChecksPage";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

type Props = {
  className?: string;
  color?: string;
  outSideCountView?: number;
  project?: IBusinessTrip;
  handleSelectReturn?: ()=>void;
};

const ChecksPage: React.FC<Props> = (props: Props) => {
  const { 
    color,
    outSideCountView,
    project,
    handleSelectReturn
 } = props;

  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof IProject>("indexAdd");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(
    outSideCountView ? outSideCountView : 14
  );

  const [list, setList] = React.useState<IUserProject[]>([
    {
      project: new Object() as IProject,
      user: new Object() as IUser,
      weeks: [
        {
          numberWeek: 32,
        },
      ] as IWeek[],
    },
  ]);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 3));
    setPage(0);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRemove = async (index: number) => {
    list.splice(index, 1);
    setList((list) => [...list]);
  };

  const handleAddHours = (e: any) => {
    console.log("newWeek list = ", list);
  };

  const handleAddRowInList = (e: any) => {
    /*setList(list => [...list, {
            project: new Object as IProject,
            user: new Object as IUser,
            weeks: [{
                numberWeek: 32+count
            }] as IWeek[]
        }]);

        setCount(count+1);*/
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
      }}
    >
      <TableContainer style={{ overflowX: "inherit" }}>
        <Table aria-labelledby="tableTitle" size="small">
          <TableHead>
            <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
              <TableCell colSpan={1}  onClick={handleSelectReturn}> 
                <KeyboardReturnIcon sx={{padding:'0',margin:'0'}}/>
              </TableCell>
              <TableCell colSpan={11} sx={{ textAlign: "center" }}>
                <Typography>{project?.userProject.project.title}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" style={{ color: color }}>
                №
              </TableCell>
              <TableCell align="center" style={{ color: color }}>
                Код проекта
              </TableCell>
              <TableCell align="center" style={{ color: color }}>
                Название проекта
              </TableCell>
              <TableCell align="center" style={{ color: color }}>
                Начало командировки
              </TableCell>
              <TableCell align="center" style={{ color: color }}>
                Окончание командировки
              </TableCell>
              <TableCell align="center" style={{ color: color }}>
                Количество отчетных документов
              </TableCell>
              <TableCell align="center" style={{ color: color }}>
                Потраченно в рублях
              </TableCell>
              <TableCell align="center" style={{ color: color }}>
                Скачать архив
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(list as any, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <RowChecksPage
                    key={index}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    index={index}
                    row={row as any}
                    labelId={labelId}
                    rowsCount={list.length}
                    order={order}
                    handleRemove={handleRemove}
                    setRowsPerPage={setRowsPerPage}
                    color={color}
                  />
                );
              })}
            <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
              <TableCell colSpan={13} sx={{ textAlign: "center" }}>
                <Button onClick={handleAddRowInList}>
                  Добавить командировку
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[outSideCountView ? outSideCountView : 14]}
        component="div"
        count={list.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{
          bottom: "0",
          position: "absolute",
          width: "100%",
        }}
      />
    </div>
  );
};

export default ChecksPage;
