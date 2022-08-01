  
import { ITableData,ISettings } from "../../components/Table/TableInterface/TableInterface"
import { ICompany, IProject, IUser } from "../../IDataInterface/IDataInterface"

import IconDelete from '@mui/icons-material/Delete'

export const UserDataPrepare = (Users : Array<IUser> , handleRemoveUser?: any,companyTableEventually?: boolean, setCompanyTableEventually?: any): ITableData =>  {

    let data = new Object as ITableData
    data.headers = []
    data.lines = []

    data.headers.push("#")
    data.headers.push("Логин")
    data.headers.push("Компания")
    data.headers.push("Имя")
    data.headers.push("Фамилия")
    data.headers.push("Отчество")
    data.headers.push("Роль")

    if(companyTableEventually)
        data.headers.push("Удалить")

    
    if(handleRemoveUser != null)
        data.handleRemove = handleRemoveUser


    data.settings = new Object as ISettings

    if(companyTableEventually != null)
        data.settings.flagSettings =  companyTableEventually

    if(setCompanyTableEventually != null)  
        data.settings.handleSettings =  setCompanyTableEventually


    for(let i = 0; i< Users.length;i++)
    {
        let cells = []

        for (let j = 0; j < data.headers.length; j++) {

            if(data.headers[j] === "#")
            {
                cells.push(i+1)
            }
            
            if(data.headers[j] === "Логин")
            {
                cells.push(Users[i].email)
            }

            if(data.headers[j] === "Компания")
            {
                cells.push(Users[i].company)
            }

            if(data.headers[j] === "Имя")
            {
                cells.push(Users[i].firstName)
            }

            if(data.headers[j] === "Фамилия")
            {
                cells.push(Users[i].secondName)
            }

            if(data.headers[j] === "Отчество")
            {
                cells.push(Users[i].middleName)
            }

            if(data.headers[j] === "Роль")
            {
                cells.push(Users[i].role)
            }

            if(data.headers[j] === "Удалить" && companyTableEventually)
            {
                let icon = (<IconDelete key={j} onClick={()=>data.handleRemove(i)}/>)
                cells.push(icon)
            }
        }


        data.lines.push({cells});
    }

    return data

}


export const CompanyDataPrepare = (Companys : Array<ICompany> , handleRemoveCompany: any,companyTableEventually: boolean, setCompanyTableEventually: any): ITableData =>  {

    let data = new Object as ITableData
    data.headers = []
    data.lines = []

    data.headers.push("#")
    data.headers.push("Компания")
    data.headers.push("Количество работников")

    if(companyTableEventually)
        data.headers.push("Удалить")

    data.handleRemove = handleRemoveCompany

    data.settings = new Object as ISettings
    data.settings.flagSettings =  companyTableEventually
    data.settings.handleSettings =  setCompanyTableEventually
  
    for(let i = 0; i< Companys.length;i++)
    {
        let cells = []

        for (let j = 0; j < data.headers.length; j++) {

            if(data.headers[j] === "#")
            {
                cells.push(i+1)
            }

            if(data.headers[j] === "Компания")
            {
                cells.push(Companys[i].name)
            }

            if(data.headers[j] === "Количество работников")
            {
                cells.push(Companys[i].personalCount)
            }

            if(data.headers[j] === "Удалить" && companyTableEventually)
            {
               /* let icon = (
                    <svg className="material-icons" key={j} onClick={()=>data.handleRemove(i)} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteForeverIcon"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                )*/

                let icon = (<IconDelete key={j} onClick={()=>data.handleRemove(i)}/>)
                cells.push(icon)
            }
        }

  
    
        data.lines.push({cells});

        /*
        //Код Создания вложенной таблицы

        if(Companys[i].users.length > 0 )
        {
            let hidenSells = UserDataPrepare(Companys[i].users);

           // let cells = []
           // cells.push((<p>Add</p>))

           // data.lines.push({cells});

            hidenSells.lines.map(element => {

                data.lines.push(element);
            })

            //
        }*/
      
    }

    return data

}




export const ProjectDataPrepare = (Projects : Array<IProject> , handleRemove: any,TableEventually: boolean, setTableEventually: any): ITableData =>  {

    let data = new Object as ITableData
    data.headers = []
    data.lines = []

    data.headers.push("#")
    data.headers.push("Проект")
    data.headers.push("Количество часов")
    data.headers.push("Статус")

    if(TableEventually)
        data.headers.push("Удалить")

    data.handleRemove = handleRemove

    data.settings = new Object as ISettings
    data.settings.flagSettings =  TableEventually
    data.settings.handleSettings =  setTableEventually
  
    for(let i = 0; i< Projects.length;i++)
    {
        let cells = []

        for (let j = 0; j < data.headers.length; j++) {

            if(data.headers[j] === "#")
            {
                cells.push(i+1)
            }

            if(data.headers[j] === "Проект")
            {
                cells.push(Projects[i].title)
            }

            if(data.headers[j] === "Количество часов")
            {
                cells.push(Projects[i].maxHour)
            }

            if(data.headers[j] === "Статус")
            {
                cells.push(Projects[i].status)
            }

            if(data.headers[j] === "Удалить" && TableEventually)
            {
                let icon = (<IconDelete key={j} onClick={()=>data.handleRemove(i)}/>)
                cells.push(icon)
            }
        }

  
    
        data.lines.push({cells});
      
    }

    return data

}