import { Button, TableCell, TableRow, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { IBusinessTrip } from "../../IDataInterface/IDataInterface";

import AddIcon from "@mui/icons-material/Add";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import TableMenu_AllProject from "../TableMenu/TableMenu_AllProject";
import { IShowDialog_BuisnessTrip } from "./ChecksForProject";

type Props = {
  row: IBusinessTrip;
  handleSelectProject: (row: IBusinessTrip) => void;
  handleCloseBuisnessTrip: (row: IBusinessTrip) => void;
  handleRemove: any;
  setRowsPerPage: any;

  index: number;
  color: any;

  rowsPerPage: any,
  page: any,
  order: any,
  rowsCount: any,
  dialogEdit?:IShowDialog_BuisnessTrip
};

const RowProjectForChecks: React.FC<Props> = (props) => {
  const {
    row,
    handleSelectProject,
    handleCloseBuisnessTrip,
    handleRemove,
    setRowsPerPage,
    rowsPerPage,
    page,
    order,
    index,
    rowsCount,
    color,
    dialogEdit,
  } = props;

  //For dialog menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mouseEvent, setMouseEvent] =
    React.useState<React.MouseEvent<HTMLElement> | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>, row: any) => {
    event.preventDefault();
    setMouseEvent(event);
    setAnchorEl(event.currentTarget);
  };
  //menu
  const handleClickItem = (e: any) => {
    let { myValue } = e.currentTarget.dataset;

    switch (Number(myValue)) {
      case 0: {
        //Редактировать
        if(dialogEdit)
        {
          dialogEdit.setFlag({...dialogEdit, flag: true,typeEdit: true, selectItem: row});
        }
        break;
      }
      case 1: {
        //Удалить
        let indexNormal = index+(page * rowsPerPage)
        let index_with_order = order === 'asc' ? indexNormal : rowsCount-indexNormal-1
        handleRemove(index_with_order-1)
        break;
      }
      default:
        break;
    }

    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [actionTitleList, setActionTitleList] = React.useState([
    {
      title: "Редактировать",
      icon: <Edit fontSize="small" />,
      divider: false,
    },
    { title: "Удалить", icon: <Delete fontSize="small" />, divider: false },
  ]);

  //

  return (
    <React.Fragment>
      <TableRow  onContextMenu={(event) => handleClick(event, row)}>
        <TableCell align="center">{index}</TableCell>
        <TableCell align="center">{row.userProject.project.code}</TableCell>
        <TableCell align="center">{row.userProject.project.title}</TableCell>
        <TableCell align="center">{row.name}</TableCell>
        <TableCell align="center">{row.descriptions}</TableCell>
        <TableCell align="center">
          {row.dateStart ? new Date(row.dateStart).toLocaleDateString() : "-"}
        </TableCell>
        <TableCell align="center">
          {row.dateEnd ? (
            new Date(row.dateEnd).toLocaleDateString()
          ) : (
            <Button
              onClick={() => {
                handleCloseBuisnessTrip(row);
              }}
            >
              Завершить командировку
            </Button>
          )}
        </TableCell>
        <TableCell align="center">{row.reportChecks.length}</TableCell>
        <TableCell align="center">{row.spent}</TableCell>
        <TableCell align="center">
          <Button>Скачать архив</Button>
        </TableCell>
        <TableCell align="center">
          <ArrowRightAltIcon
            onClick={(event) => {
              handleSelectProject(row);
            }}
          />
        </TableCell>

        <TableMenu_AllProject
                  handleClick={handleClickItem}
                  handleClose={handleClose}
                  anchorEl={anchorEl}
                  mouseEvent={mouseEvent}
                  row={row} 
                  actionTitleList={actionTitleList}
        />

      </TableRow>
    </React.Fragment>
  );
};

export default RowProjectForChecks;
