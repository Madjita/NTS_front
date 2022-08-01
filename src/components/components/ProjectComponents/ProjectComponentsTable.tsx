import React, { useEffect, useState } from 'react';
import { ICompany, IProject, IUser } from '../../IDataInterface/IDataInterface';
import { ProjectDataPrepare } from '../../Pages/Admin/dataTable';
import Table2 from '../Table2/Table2';

type Props = {
    className?: string,
    child?: any,
    projects: IProject[],
    handleRemove: any,
    TableEventually: any,
    setTableEventually: any
}
  
const ProjectComponentsTable:  React.FC<Props> = ({projects,handleRemove,TableEventually,setTableEventually}) => {

    return(
        <React.Fragment>
            <Table2 data={ProjectDataPrepare(projects,handleRemove,TableEventually, setTableEventually)}/>
        </React.Fragment>
    )
}

export default ProjectComponentsTable;


