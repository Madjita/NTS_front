import React, { useEffect } from 'react';


import IconDelete from '@mui/icons-material/Delete'
import { IProject, IUser } from '../../../IDataInterface/IDataInterface';

import ToggleButton from '@mui/material/ToggleButton';


type Props = {
    className?: string,
    child?: any,
    projects: IProject[],
    handleRemoveUser: any,
    userTableEventually: any,
}
 



 
const ProjectUserComponents:  React.FC<Props> = ({projects,handleRemoveUser,userTableEventually}) => {

    return(
        <div >
        {projects.map((project,index) =>

            <React.Fragment>
            <figure className="fir-image-figure textStyle">
                <a className="fir-imageover" rel="noopener" target="_blank" href="https://twitter.com/_davideast">
                <img className="fir-author-image fir-clickcircle" src="https://fir-rollup.firebaseapp.com/de-sm.jpg" alt="David East - Author"/>
                </a>
                
                {userTableEventually ? <IconDelete onClick={(e)=>{e.preventDefault();handleRemoveUser(index)}}/> : null}
            </figure>
            </React.Fragment>
        )}
        </div>
    )
}

export default ProjectUserComponents;