import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  ListItemIcon,
  Checkbox,
  RadioGroup,
  Radio,
  FormControlLabel,
  DialogActions,
  Button,
  MenuItem,
} from "@mui/material";
import {
  IBusinessTrip,
  IProfile,
  IProject,
  IReportCheck,
  IUserProject,
} from "../../../../IDataInterface/IDataInterface";
import { useTypedSelector } from "../../../../../redux/hooks/useTypedSelector";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { localeMap } from "../../../HoursComponents/HoursAddDialog";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { GetSesstionToken } from "../../../../../settings/settings";
import { useActions } from "../../../../../redux/hooks/userActions";

type Props = {
  className?: string;
  child?: any;

  dialog: {
    flag: boolean;
    setFlag: React.Dispatch<React.SetStateAction<boolean>>;
  };

  title: string;
  file: any;
  pdf: any;
};

const DialogPreView_check: React.FC<Props> = (props) => {
  const { 
    className,
    dialog,
    title,
    file,
    pdf,
 } = props;

  const handleClose = () => {
    dialog.setFlag(false);
  };

  return (
    <React.Fragment>
      <Dialog open={dialog.flag} onClose={handleClose}   fullWidth={true}
        maxWidth={"lg"}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent className="center">
        {!pdf && typeof(file) === "object" && <img src={window.URL.createObjectURL(file)}  width="50%" height="800px"  style={{objectFit: 'contain'}}/> }
        {pdf &&  typeof(file) === "object" && <embed src={window.URL.createObjectURL(file)}  width="50%" height="800px" style={{objectFit: 'contain'}}/> }
        
        {!pdf && typeof(file) === "string" && <img src={`data:image/png;base64,${file}`}  width="50%" height="800px"  style={{objectFit: 'contain'}}/> }
        {pdf &&  typeof(file) === "string" && <embed src={`data:application/pdf;base64,${file}`}  width="50%" height="800px" style={{objectFit: 'contain'}}/> }
        
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogPreView_check;
