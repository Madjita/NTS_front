import React, { useEffect } from 'react';
import './UsersComponents.css'


import IconDelete from '@mui/icons-material/Delete'
import { IUser } from '../../IDataInterface/IDataInterface';

import ToggleButton from '@mui/material/ToggleButton';

type Props = {
    className?: string,
    child?: any,
    users: IUser[],
    handleRemoveUser: any,
    userTableEventually: any,
}
 



 
const UsersComponents:  React.FC<Props> = ({users,handleRemoveUser,userTableEventually}) => {

   
    


    return(
        <div >
        {users.map((user,index) =>

            <React.Fragment>
            <figure className="fir-image-figure textStyle">
                <a className="fir-imageover" rel="noopener" target="_blank" href="https://twitter.com/_davideast">
                <img className="fir-author-image fir-clickcircle" src="https://fir-rollup.firebaseapp.com/de-sm.jpg" alt="David East - Author"/>
                </a>

                <figcaption>
                    <div className="fig-author-figure-title">{user.company}</div>
                    <div className="fig-author-figure-title">{user.secondName+" "+user.firstName+" "+user.middleName}</div>
                    <div className="fig-author-figure-title">{user.email}</div>
                    <div className="fig-author-figure-title">{user.role.title}</div>
                </figcaption>
                
                {userTableEventually ? <IconDelete onClick={(e)=>{e.preventDefault();handleRemoveUser(index)}}/> : null}
            </figure>
            </React.Fragment>
        )}
        </div>
    )
}

export default UsersComponents;


/*

  <div >
        {users.map((user,index) =>
            <div key={index} style={{display: 'flex'}}>
                
               
                <div  style={{flex: '1 1 auto'}}>
                    <p>{user.role}</p>  
                    <p>{user.firstName}</p>
                    <p>{user.secondName}</p> 
                    <p>{user.middleName}</p>  
                    <p>{user.email}</p>
                    <p>{user.company}</p>
                </div>




                <button onClick={(e)=>{e.preventDefault();handleRemoveUser(index)}}>Удалить</button>
            </div>
          
        )}
        </div>

*/

