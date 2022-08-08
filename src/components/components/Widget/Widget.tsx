import React, { useState } from 'react';
import './Widget.css'

type Props = {
    children: React.ReactNode,
    header?: React.ReactNode,
    className?: string
}
  

interface IProject{
    name : string
}

interface IUser {
    firstName: string,
    secondName: string,
    middleName : string,
    email: string,
    projects: Array<IProject>,
    company: string
}


 
const Widget:  React.FC<Props> = ({header,children,className}) => {


    let newClassName = ('widget ' + className) as string;

    return(
            <div className={newClassName}>

               {
                    header ? 
                    <div className='header'>
                         {header}
                    </div>
                    : null
               }

               <div className='body'>
                    {children}
               </div>
            </div>
    )
}

export default Widget;