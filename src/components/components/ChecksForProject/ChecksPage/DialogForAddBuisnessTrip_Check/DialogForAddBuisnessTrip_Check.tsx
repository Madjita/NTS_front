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
  makeStyles,
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
import DialogPreView_check from "./DialogPreView_check";
import { IShowDialog_ReportCheck } from "../ChecksPage";


/*
const useStyles = makeStyles(theme=>({

}))
*/


type Props = {
  className?: string;
  child?: any;

  dialog?: IShowDialog_ReportCheck

  selectBuisnesTrip?: IBusinessTrip
};

const DialogForAddBuisnessTrip_Check: React.FC<Props> = (props) => {
  const { 
     dialog,
     selectBuisnesTrip
   } = props;

  //DialogPreView_check
  const [showDialog_PreView_ReportCheck, setShowDialog_PreView_ReportCheck] = React.useState(false);

  const [showDialog_PreView_CheckPlane1, setShowDialog_PreView_CheckPlane1] = React.useState(false);
  const [showDialog_PreView_CheckPlane2, setShowDialog_PreView_CheckPlane2] = React.useState(false);
  const [showDialog_PreView_CheckPlane3, setShowDialog_PreView_CheckPlane3] = React.useState(false);

  const [showDialog_PreView_CheckTrain1, setShowDialog_PreView_CheckTrain1] = React.useState(false);
  const [showDialog_PreView_CheckTrain2, setShowDialog_PreView_CheckTrain2] = React.useState(false);


  const [showDialog_PreView_CheckHostel1, setShowDialog_PreView_CheckHostel1] = React.useState(false);
  const [showDialog_PreView_CheckHostel2, setShowDialog_PreView_CheckHostel2] = React.useState(false);
  //

  //

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let findItem = filter.projects.filter((x) => x.code === e.target.value)[0];
    //setNewObject({ ...newObject, userProject: {...newObject.userProject, project: findItem} });
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
    if(dialog)
    {
      dialog.setFlag({...dialog, flag: false,typeEdit: false,selectItem: undefined});
    }
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

  const { userLogin } = useTypedSelector((state) => state.userLogin);
  const { fetchBusinessTripsChecks_add, fetchBusinessTripsChecks_edit } = useActions();
  //
  const [type, setType] = React.useState<string>("ReportCheck");
  const [newObject, setNewObject] = React.useState<
    IReportCheck
  >({
    id: 0,
    name: "",
    date: "",
    value: 0,
    discriminator: "ReportCheck",
    descriptions: "",
    checkBankPhotoName: "",
    checkBankPhotoByte: undefined, //Файл в байтах
    ticketPhotoName: "",
    ticketPhotoByte: undefined,
    borderTicketPhotoName: "",
    borderTicketPhotoByte: undefined,
    billPhotoName: "",
    billPhotoByte: undefined,
    businessTrip: selectBuisnesTrip
  } as IReportCheck);

  useEffect(()=>{

    if(dialog?.selectItem && dialog?.typeEdit)
    {
      
      console.log("dialog.selectItem = ",dialog.selectItem)
      setNewObject(dialog.selectItem)

      let split = dialog.selectItem.checkBankPhotoName.split(".");
      if (split[1] === "pdf") {
        setPdf(true);
      } else {
        setPdf(false);
      }
    }
   
  },[dialog?.typeEdit])
  //

  const handleAddClose = () => {
    //Добавить
    console.log("DialogForAddBuisnessTrip_Check handleAddClose = ", newObject);
    let sessionToken = GetSesstionToken();
    if (sessionToken) {
      fetchBusinessTripsChecks_add(sessionToken,newObject)
    }
    handleClose();
  };

  const handleEditClose = () => {
    //Изменить
    let sessionToken = GetSesstionToken();
    if(sessionToken)
    {
      fetchBusinessTripsChecks_edit(sessionToken,newObject,dialog?.selectItem as IReportCheck)
      
    }
    handleClose();
 }

  const onSelectImageHandler = (event: any,type: string) => {
    const file = event.target.files[0];

    let split = file.name.split(".");
    if (split[1] === "pdf") {
      setPdf(true);
    } else {
      setPdf(false);
    }

    switch(type)
    {
        case"ReportCheck":
            setNewObject({...newObject,checkBankPhotoByte:file,checkBankPhotoName: file.name})
        break;
        case"CheckPlane_1":
            setNewObject({...newObject,checkBankPhotoByte:file,checkBankPhotoName: file.name})
        break;
        case"CheckPlane_2":
            setNewObject({...newObject,ticketPhotoByte:file,ticketPhotoName: file.name})
        break;
        case"CheckPlane_3":
            setNewObject({...newObject,borderTicketPhotoByte:file, borderTicketPhotoName: file.name})
        break;
        case "CheckTrain_1":
          setNewObject({...newObject,checkBankPhotoByte:file, checkBankPhotoName: file.name})
        break;
        case "CheckTrain_2":
          setNewObject({...newObject,ticketPhotoByte:file, ticketPhotoName: file.name})
        break;
        case "CheckHostel_1":
          setNewObject({...newObject,checkBankPhotoByte:file, checkBankPhotoName: file.name})
        break;
        case "CheckHostel_2":
          setNewObject({...newObject,billPhotoByte:file, billPhotoName: file.name})
        break;
    }

   


  };

  const [test, setTest] = React.useState<File>();
  const [pdf, setPdf] = React.useState(false);

  return (
    <React.Fragment>
      <Dialog open={dialog ? dialog.flag : false} onClose={handleClose}>
        <DialogTitle>Добавить чек для отчетности</DialogTitle>
        <DialogContent>

          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={localeMap["ru"]}
          >
            <div>
             {
              dialog?.typeEdit === false ? 
              <TextField
              autoFocus
              select
              fullWidth
              required
              margin="dense"
              label="Тип чека"
              type="select"
              variant="standard"
              value={newObject?.discriminator || "None"}
              inputProps={{ style: { textAlign: "center" } }}
              onChange={(e) => {
                newObject.discriminator = e.target.value;

                setNewObject({ ...newObject });
              }}
              
            >
              <MenuItem value={"ReportCheck"}>Чек с магазина</MenuItem>
              <MenuItem value={"CheckPlane"}>Чек с самолета</MenuItem>
              <MenuItem value={"CheckTrain"}>Чек с поезда</MenuItem>
              <MenuItem value={"CheckHostel"}>Чек с отеля</MenuItem>
            </TextField>
            :
            <>
              <DialogContentText>Тип чека:</DialogContentText>
              <p>{newObject.discriminator}</p>
            </>
             }
              <DesktopDatePicker
                label="Дата покупки"
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
                    setNewObject({ ...newObject, date: date.toISOString() });
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
            label="Название чека"
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
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Стоимость"
            type="name"
            fullWidth
            variant="standard"
            value={newObject?.value}
            inputProps={{ style: { textAlign: "center" } }}
            onChange={(e) => {
              setNewObject({ ...newObject, value: Number(e.target.value) });
            }}
          />
        </DialogContent>
      

        <Divider />

        {(() => {
          let objectReturn = null;
          switch (newObject.discriminator) {
            //чек с магазина
            case "ReportCheck":
              objectReturn = (
                <div className="center">
                  {newObject.checkBankPhotoByte ? <p>{newObject.checkBankPhotoName}</p> : <p>Не загружен</p>}
                  <Divider orientation="vertical" flexItem />
                  <Button component="label">
                    Загрузить чек
                    <input type="file" hidden onChange={(e:any)=>onSelectImageHandler(e,"ReportCheck")}  />
                  </Button>
                  <Divider orientation="vertical" flexItem />
                  <Button onClick={() => setNewObject({...newObject,checkBankPhotoByte: undefined})}>Очистить</Button>
                  <Divider orientation="vertical" flexItem />

                  {newObject.checkBankPhotoByte && (
                    <Button onClick={() => setShowDialog_PreView_ReportCheck(true)}>
                      Просмотр
                    </Button>
                  )}
                    <DialogPreView_check
                    pdf={()=>{
                      let split = newObject.ticketPhotoName.split(".");
                      if (split[1] === "pdf") {
                        return true
                      } else {
                        return false
                      }
                    }}
                    file={newObject.checkBankPhotoByte}
                    title={"Предварительный просмотр загруженного чека"}
                    dialog={{
                        flag: showDialog_PreView_ReportCheck,
                        setFlag: setShowDialog_PreView_ReportCheck,
                    }}
                    />
                </div>
              );
              break;
            case "CheckPlane":
                objectReturn = (
                  <>
                   <p className="center">Файл чека: </p>
                   <Divider/>
                   <div className="center">
                    {newObject.checkBankPhotoByte ? <p>{newObject.checkBankPhotoName}</p> : <p>Не загружен</p>}
                    <Divider orientation="vertical" flexItem />
                    <Button component="label">
                      Загрузить чек
                      <input type="file" hidden onChange={(e:any)=>onSelectImageHandler(e,"CheckPlane_1")}  />
                    </Button>
                    <Divider orientation="vertical" flexItem />
                    <Button onClick={() => setNewObject({...newObject,checkBankPhotoByte: undefined})}>Очистить</Button>
                    <Divider orientation="vertical" flexItem />
  
                    {newObject.checkBankPhotoByte  && (
                      <Button onClick={() => setShowDialog_PreView_CheckPlane1(true)}>
                        Просмотр
                      </Button>
                    )}
                  </div>
                  <Divider/>
                  <p className="center">Файл брони билета на самолет: </p>
                  <div className="center">
                    {newObject.ticketPhotoByte ? <p>{newObject.ticketPhotoName}</p> : <p>Не загружен</p>}
                    <Divider orientation="vertical" flexItem />
                    <Button component="label">
                      Загрузить чек
                      <input type="file" hidden onChange={(e:any)=>onSelectImageHandler(e,"CheckPlane_2")}  />
                    </Button>
                    <Divider orientation="vertical" flexItem />
                    <Button onClick={() => setNewObject({...newObject,ticketPhotoByte: undefined})}>Очистить</Button>
                    <Divider orientation="vertical" flexItem />
  
                    {newObject.ticketPhotoByte  && (
                      <Button onClick={() => setShowDialog_PreView_CheckPlane2(true)}>
                        Просмотр
                      </Button>
                    )}
                  </div>
                  <Divider/>
                  <p className="center">Файл посадочного талона: </p>
                  <div className="center">
                   {newObject.borderTicketPhotoByte ? <p>{newObject.borderTicketPhotoName}</p> : <p>Не загружен</p>}
                   <Divider orientation="vertical" flexItem />
                   <Button component="label">
                     Загрузить чек
                     <input type="file" hidden onChange={(e:any)=>onSelectImageHandler(e,"CheckPlane_3")} />
                   </Button>
                   <Divider orientation="vertical" flexItem />
                   <Button onClick={() => setNewObject({...newObject,borderTicketPhotoByte: undefined})}>Очистить</Button>
                   <Divider orientation="vertical" flexItem />
 
                   {newObject.borderTicketPhotoByte  && (
                     <Button onClick={() => setShowDialog_PreView_CheckPlane3(true)}>
                       Просмотр
                     </Button>
                   )}
                    <DialogPreView_check
                    pdf={()=>{
                      let split = newObject.checkBankPhotoName.split(".");
                      if (split[1] === "pdf") {
                        return true
                      } else {
                        return false
                      }
                    }}
                    file={newObject.checkBankPhotoByte}
                    title={"Предварительный просмотр загруженного чека на самолет"}
                    dialog={{
                        flag: showDialog_PreView_CheckPlane1,
                        setFlag: setShowDialog_PreView_CheckPlane1,
                    }}
                    />
                    <DialogPreView_check
                    pdf={()=>{
                      let split = newObject.ticketPhotoName.split(".");
                      if (split[1] === "pdf") {
                        return true
                      } else {
                        return false
                      }
                    }}
                    file={newObject.ticketPhotoByte}
                    title={"Предварительный просмотр загруженного посадочного талона"}
                    dialog={{
                        flag: showDialog_PreView_CheckPlane2,
                        setFlag: setShowDialog_PreView_CheckPlane2,
                    }}
                    />
                    <DialogPreView_check
                    pdf={()=>{
                      let split = newObject.borderTicketPhotoName.split(".");
                      if (split[1] === "pdf") {
                        return true
                      } else {
                        return false
                      }
                    }}
                    file={newObject.borderTicketPhotoByte}
                    title={"Предварительный просмотр загруженного посадочного талона"}
                    dialog={{
                        flag: showDialog_PreView_CheckPlane3,
                        setFlag: setShowDialog_PreView_CheckPlane3,
                    }}
                    />
                 </div>
                 </>
                );
                break;
            case "CheckTrain":
              objectReturn = (
                <>
                 <p className="center">Файл чека: </p>
                 <Divider/>
                 <div className="center">
                  {newObject.checkBankPhotoByte ? <p>{newObject.checkBankPhotoName}</p> : <p>Не загружен</p>}
                  <Divider orientation="vertical" flexItem />
                  <Button component="label">
                    Загрузить чек
                    <input type="file" hidden onChange={(e:any)=>onSelectImageHandler(e,"CheckTrain_1")}  />
                  </Button>
                  <Divider orientation="vertical" flexItem />
                  <Button onClick={() => setNewObject({...newObject,checkBankPhotoByte: undefined})}>Очистить</Button>
                  <Divider orientation="vertical" flexItem />

                  {newObject.checkBankPhotoByte  && (
                    <Button onClick={() => setShowDialog_PreView_CheckTrain1(true)}>
                      Просмотр
                    </Button>
                  )}
                </div>
                <Divider/>
                <p className="center">Файл брони билета на поезд: </p>
                <div className="center">
                  {newObject.ticketPhotoByte ? <p>{newObject.ticketPhotoName}</p> : <p>Не загружен</p>}
                  <Divider orientation="vertical" flexItem />
                  <Button component="label">
                    Загрузить чек
                    <input type="file" hidden onChange={(e:any)=>onSelectImageHandler(e,"CheckTrain_2")}  />
                  </Button>
                  <Divider orientation="vertical" flexItem />
                  <Button onClick={() => setNewObject({...newObject,ticketPhotoByte: undefined})}>Очистить</Button>
                  <Divider orientation="vertical" flexItem />

                  {newObject.ticketPhotoByte  && (
                    <Button onClick={() => setShowDialog_PreView_CheckTrain2(true)}>
                      Просмотр
                    </Button>
                  )}
                   <DialogPreView_check
                  pdf={()=>{
                    let split = newObject.checkBankPhotoName.split(".");
                    if (split[1] === "pdf") {
                      return true
                    } else {
                      return false
                    }
                  }}
                  file={newObject.checkBankPhotoByte}
                  title={"Предварительный просмотр загруженного чека на поезд"}
                  dialog={{
                      flag: showDialog_PreView_CheckTrain1,
                      setFlag: setShowDialog_PreView_CheckTrain1,
                  }}
                  />
                  <DialogPreView_check
                  pdf={()=>{
                    let split = newObject.ticketPhotoName.split(".");
                    if (split[1] === "pdf") {
                      return true
                    } else {
                      return false
                    }
                  }}
                  file={newObject.ticketPhotoByte}
                  title={"Предварительный просмотр загруженного посадочного талона на поезд"}
                  dialog={{
                      flag: showDialog_PreView_CheckTrain2,
                      setFlag: setShowDialog_PreView_CheckTrain2,
                  }}
                  />
                </div>
               </>
              );
            break;

            case "CheckHostel":
              objectReturn = (
                <>
                 <p className="center">Файл чека об оплате отеля: </p>
                 <Divider/>
                 <div className="center">
                  {newObject.checkBankPhotoByte ? <p>{newObject.checkBankPhotoName}</p> : <p>Не загружен</p>}
                  <Divider orientation="vertical" flexItem />
                  <Button component="label">
                    Загрузить чек
                    <input type="file" hidden onChange={(e:any)=>onSelectImageHandler(e,"CheckHostel_1")}  />
                  </Button>
                  <Divider orientation="vertical" flexItem />
                  <Button onClick={() => setNewObject({...newObject,checkBankPhotoByte: undefined})}>Очистить</Button>
                  <Divider orientation="vertical" flexItem />

                  {newObject.checkBankPhotoByte  && (
                    <Button onClick={() => setShowDialog_PreView_CheckHostel1(true)}>
                      Просмотр
                    </Button>
                  )}
                </div>
                <Divider/>
                <p className="center">Файл счета за проживание: </p>
                <div className="center">
                  {newObject.billPhotoByte ? <p>{newObject.billPhotoName}</p> : <p>Не загружен</p>}
                  <Divider orientation="vertical" flexItem />
                  <Button component="label">
                    Загрузить чек
                    <input type="file" hidden onChange={(e:any)=>onSelectImageHandler(e,"CheckHostel_2")}  />
                  </Button>
                  <Divider orientation="vertical" flexItem />
                  <Button onClick={() => setNewObject({...newObject,billPhotoByte: undefined})}>Очистить</Button>
                  <Divider orientation="vertical" flexItem />

                  {newObject.billPhotoByte  && (
                    <Button onClick={() => setShowDialog_PreView_CheckHostel2(true)}>
                      Просмотр
                    </Button>
                  )}
                   <DialogPreView_check
                  pdf={()=>{
                    let split = newObject.checkBankPhotoName.split(".");
                    if (split[1] === "pdf") {
                      return true
                    } else {
                      return false
                    }
                  }}
                  file={newObject.checkBankPhotoByte}
                  title={"Предварительный просмотр загруженного чека об оплате отеля"}
                  dialog={{
                      flag: showDialog_PreView_CheckHostel1,
                      setFlag: setShowDialog_PreView_CheckHostel1,
                  }}
                  />
                  <DialogPreView_check
                  pdf={()=>{
                    let split = newObject.billPhotoName.split(".");
                    if (split[1] === "pdf") {
                      return true
                    } else {
                      return false
                    }
                  }}
                  file={newObject.billPhotoByte}
                  title={"Предварительный просмотр загруженного счета за проживание"}
                  dialog={{
                      flag: showDialog_PreView_CheckHostel2,
                      setFlag: setShowDialog_PreView_CheckHostel2,
                  }}
                  />
                </div>
               </>
              );
            break;
          
          }

          return objectReturn;
        })()}

        <DialogActions>
          <Button onClick={handleClose}>Отменить</Button>
          {
            dialog?.typeEdit === false ?
            <Button onClick={handleAddClose}>Добавить</Button>
            :
            <Button onClick={handleEditClose}>Изменить</Button> 
          }
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogForAddBuisnessTrip_Check;
