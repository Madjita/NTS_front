import React, {useState  } from 'react';


import { IUser } from '../../IDataInterface/IDataInterface';

type Props = {
    data?: Array<IUser>
    getData: (event: any) => void
}
  

const CustomClearIndicator:  React.FC<Props> = ({data,getData}) => {

const [value, setValue] = useState('');

if(data === undefined)
{
    return null;

}



const texts = data;



const findObject = (index: any) => {
    
    let set = texts.find((x,index) => index === Number(value))

    return set;
}

if(texts!= undefined)
{
    const options = texts.map((text, index) => {
        return <option key={index} value={index}>{text.email}</option>;
    });

    let set = findObject(value)?.email;
    return ( 
        <div className='settings'>
            <select value={value} onChange={event => {setValue(event.target.value); getData(findObject(event.target.value))}}>
                {options}
            </select>
            <p>
                ваш выбор: {set as any}
            </p>
        </div>
    );
}



return null

}

export default CustomClearIndicator;
