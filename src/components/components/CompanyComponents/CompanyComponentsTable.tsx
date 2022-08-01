import React, { useEffect, useState } from 'react';
import { ICompany, IUser } from '../../IDataInterface/IDataInterface';
import { CompanyDataPrepare } from '../../Pages/Admin/dataTable';
import Table2 from '../Table2/Table2';

type Props = {
    className?: string,
    child?: any,
    companies: ICompany[],
    handleRemoveCompany: any,
    TableEventually: any,
    setTableEventually: any
}
  
const CompanyComponentsTable:  React.FC<Props> = ({companies,handleRemoveCompany,TableEventually,setTableEventually}) => {

    return(
        <React.Fragment>
            <Table2 data={CompanyDataPrepare(companies,handleRemoveCompany,TableEventually, setTableEventually)}/>
        </React.Fragment>
    )
}

export default CompanyComponentsTable;


