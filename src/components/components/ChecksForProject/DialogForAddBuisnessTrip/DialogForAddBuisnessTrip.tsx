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
} from "@mui/material";
import {
  IBusinessTrip,
  IProfile,
  IProject,
  IUserProject,
} from "../../../IDataInterface/IDataInterface";
import { useTypedSelector } from "../../../../redux/hooks/useTypedSelector";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { localeMap } from "../../HoursComponents/HoursAddDialog";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { GetSesstionToken } from "../../../../settings/settings";
import { useActions } from "../../../../redux/hooks/userActions";

type Props = {
  className?: string;
  child?: any;

  dialog: {
    flag: boolean;
    setFlag: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

const DialogForAddBuisnessTrip: React.FC<Props> = (props) => {
  const { className, dialog } = props;

  //
  const [selected, setSelected] = React.useState({
    index: "",
    item: null as IProject | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let findItem = filter.projects.filter((x) => x.code === e.target.value)[0];
    setSelected({
      index: e.target.value,
      item: findItem,
    });
    setNewObject({ ...newObject, userProject: {...newObject.userProject, project: findItem} });
  };
  //

  const [filter, setFilter] = React.useState({
    filterProject: {
      code: "",
    } as IProject,
    projects: new Array() as IProject[],
  });

  const projectHook = useTypedSelector((state) => state.project);

  const handleClose = () => {
    dialog.setFlag(false);
  };

  useEffect(() => {
    let fulterUse = projectHook.projects.filter(
      (x) => x.code.includes(filter.filterProject.code) !== false
    );

    if (filter.filterProject.code === "") {
      fulterUse = projectHook.projects;
    } else if (fulterUse.length <= 0) {
      fulterUse = [
        /*{
          title: "Проект не найден",
          code: "Проект не найден"
        } as IProject,*/
      ];
      setSelected({ index: "", item: null });
    }
    setFilter({ ...filter, projects: fulterUse });
  }, [filter.filterProject.code]);

  //

  const [dataStart, setDataStart] = React.useState<Date | null>(new Date());
  const [dataValueMonStop, setDataValueMonStop] = React.useState<Date | null>(
    new Date()
  );
  let timeFormat = { hour: "2-digit", minute: "2-digit" } as any;
  //

  const {userLogin} = useTypedSelector(state => state.userLogin)
  const {fetchBusinessTrips_add} = useActions()
  //
  const [newObject, setNewObject] = React.useState<IBusinessTrip>({
    id: 0,
    name: "",
    spent: 0,
    descriptions: "",
    userProject: {
      user: userLogin,
      project: selected
    } as unknown as IUserProject,
    reportChecks: []
  } as IBusinessTrip);
  //

  const handleAddClose = () => {
    //Добавить
    console.log("handleAddClose = ",newObject)
    let sessionToken = GetSesstionToken();
    if(sessionToken)
    {
        fetchBusinessTrips_add(sessionToken,newObject)

    }
    handleClose();
  };

  return (
    <React.Fragment>
      <Dialog open={dialog.flag} onClose={handleClose}>
        <DialogTitle>Добавить командировку относительно проекта</DialogTitle>
        <DialogContent>
          <DialogContentText>Поиск проекта:</DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Фильтр проектов по коду"
            type="name"
            fullWidth
            variant="standard"
            value={filter?.filterProject.code || ""}
            inputProps={{ style: { textAlign: "center" } }}
            onChange={(e) => {
              filter.filterProject.code = e.target.value;
              setFilter({ ...filter });
            }}
          />
          <Divider />
          <DialogContentText>Проекты:</DialogContentText>
          <RadioGroup
            row={true}
            value={selected.index}
            onChange={handleChange}
            sx={{
              maxHeight: "150px",
              overflow: "auto",
              bgcolor: "background.paper",
            }}
          >
            {filter.projects.length <= 0 ? (
              <p>Проект не найден</p>
            ) : (
              filter.projects.map((item, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    sx={{ width: "100%", paddingLeft: "5px" }}
                    value={item.code}
                    control={<Radio />}
                    label={
                      <ListItemText
                        primary={item.title}
                        secondary={item.code}
                      />
                    }
                  />
                );
              })
            )}
          </RadioGroup>
          <Divider />
          <div>
            {selected.item ? (
              <>
                <p>Выбран:</p>
                <ListItemText
                  primary={selected.item.title}
                  secondary={selected.item.code}
                />
              </>
            ) : (
              <p>Не выбран</p>
            )}
          </div>
          <Divider />
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={localeMap["ru"]}
          >
            <div>
              <DesktopDatePicker
                label="Дата начала командировки"
                value={dataStart}
                maxDate="31"
                renderInput={(params) => {
                  return (
                    <TextField
                      {...params}
                      autoFocus
                      fullWidth
                      margin="dense"
                      variant="standard"
                      size="small"
                      color="primary"
                      focused
                      sx={{
                        marginTop: "10px",
                        width: "100%",
                        textAlign: "center",
                      }}
                      type="date"
                    />
                  );
                }}
                onChange={(e: any) => {
                  if (e != undefined) {
                    let date = new Date(e);
                    setDataStart(date);
                    if (isNaN(date.getTime())) {
                      return false;
                    }
                    setNewObject({ ...newObject, dateStart: date.toISOString()});
                    //selected!.newUser.profile.date = e;
                    //handlerEdit({ ...userLogin });
                  }
                }}
              />
            </div>
          </LocalizationProvider>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Название проекта"
            type="name"
            fullWidth
            variant="standard"
            value={newObject?.name}
            inputProps={{ style: { textAlign: "center" } }}
            onChange={(e) => {
                setNewObject({ ...newObject, name: e.target.value });
            }}
          />
          <TextField
            autoFocus
            multiline
            fullWidth
            margin="dense"
            id="name"
            label="Описание"
            type="name"
            rows={4}
            value={newObject?.descriptions}
            onChange={(e) => {
                setNewObject({ ...newObject, descriptions: e.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отменить</Button>
          <Button onClick={handleAddClose}>Добавить</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogForAddBuisnessTrip;
