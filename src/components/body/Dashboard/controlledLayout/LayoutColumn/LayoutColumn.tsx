import React from 'react';
import './LayoutColumn.css';

import LayoutPanel from './layoutPanel/layoutPanel'



type Props = { 
    children: React.ReactNode, 
    maxWidth? : number,
    flexGrow?: number;
 };


const LayoutColumn:  React.FC<Props> = ({children, maxWidth,flexGrow}) => {

    let flag = Array.isArray(children)

    return(
            <div className='Controlled LayoutColumn' style={{flexGrow: flexGrow,maxWidth: maxWidth}}>
                {
                    flag ? 
                    
                    (children as Array<JSX.Element>).map((element,i)=>{
                        return <LayoutPanel key={i} children = {element} maxWidth={750}/>
                    })
                    
                    : <LayoutPanel children = {children} maxWidth={750}/>
                }
                
            </div>
    )
}

export default LayoutColumn;