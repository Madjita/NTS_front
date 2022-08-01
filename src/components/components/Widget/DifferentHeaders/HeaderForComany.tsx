import React from 'react';
import Icon from '@mui/material/Icon';
import SettingsIcon from '@mui/icons-material/Settings';


type Props = {
    className?: string,
    setDialogAddCompanyIsOpen?: any,
    setCompanyTableEventually?: any,
    dialogAddCompanyIsOpen?: any,
    TableEventually?: any
    title?: string
}
  

 
const HeaderForCompany:  React.FC<Props> = ({title,dialogAddCompanyIsOpen,TableEventually,setDialogAddCompanyIsOpen,setCompanyTableEventually}) => {
  
    return(
        <div className='toolbar'>
            <h3>{title}</h3>
            <div className='settings'>
                    <Icon style={{color: dialogAddCompanyIsOpen? 'green': ''}} baseClassName="fas" className="fa-plus-circle" onClick={() => setDialogAddCompanyIsOpen(true)} />
                    <SettingsIcon style={{color: TableEventually? 'green': ''}}  onClick={() => setCompanyTableEventually(!TableEventually)} />
             </div>
        </div>
    )
}

export default HeaderForCompany;