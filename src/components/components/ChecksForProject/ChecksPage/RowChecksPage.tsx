import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import { Button, TableCell, TableRow, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useActions } from "../../../../redux/hooks/userActions";
import { IReportCheck } from "../../../IDataInterface/IDataInterface";
import TableMenu_AllProject from "../../TableMenu/TableMenu_AllProject";
import { IShowDialog_ReportCheck } from "./ChecksPage";

type Props = {
  page: any;
  rowsPerPage: any;
  index: any;
  row: IReportCheck;
  labelId: any;
  rowsCount: any;
  order: any;
  handleRemove: any;
  setRowsPerPage: any;
  color: any;
  dialogEdit?:IShowDialog_ReportCheck
};

const RowChecksPage: React.FC<Props> = (props) => {
  const {
    page,
    rowsPerPage,
    index,
    row,
    labelId,
    rowsCount,
    order,
    handleRemove,
    setRowsPerPage,
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

    console.log("Number = ", myValue )
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
        let indexNormal = index + page * rowsPerPage;
        let index_with_order = 
            order === "asc" ? indexNormal : rowsCount - indexNormal - 1;
        handleRemove(index_with_order);
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
      <TableRow
        hover
        sx={{ "& > *": { borderBottom: "unset" } }}
        onContextMenu={(event) => handleClick(event, row)}
      >
        <TableCell align="center">{index + 1}</TableCell>
        <TableCell align="center">{row.name}</TableCell>
        <TableCell align="center">{row.discriminator}</TableCell>
        <TableCell align="center">{row.date}</TableCell>
        <TableCell align="center">{row.descriptions}</TableCell>
        <TableCell align="center">{row.value}</TableCell>
        <TableCell align="center">
          <Button>Скачать чек</Button>
        </TableCell>
      </TableRow>
      <TableMenu_AllProject
        handleClick={handleClickItem}
        handleClose={handleClose}
        anchorEl={anchorEl}
        mouseEvent={mouseEvent}
        row={row}
        actionTitleList={actionTitleList}
      />
    </React.Fragment>
  );
};

export default RowChecksPage;
