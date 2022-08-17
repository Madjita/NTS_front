import React from 'react';
import './TMPHeader.css'

import LanguageIcon from '@mui/icons-material/Language';
import label from "../../../../img/____1_1.webp"

type Props = {
    className?: string,
}



 
const TMPHeader:  React.FC<Props> = () => {



    return(
        <header  className="TMPHeader">
  
             <div className='item'>
                <img
                    className='logo'
                    //style={{ width: '100%', display: 'block'}}
                    src={label}
                    srcSet={label}
                    alt='NTS'
                    loading="lazy"
                />
             </div>
             <div className='item'>
                <a>О КОМПАНИИ</a>
             </div>
             <div className='item'>
                <a>ОТРАСЛИ</a>
             </div>
             <div className='item'>
                <a>УСЛУГИ</a>
             </div>
             <div className='item'>
                <a>ПРОЕКТЫ</a>
             </div>
             <div className='item'>
                <a>ВАКАНСИИ</a>
             </div>
             <div className='item'>
                <a>КОНТАКТЫ</a>
             </div>
             <div className='item'>
                {/*<LanguageIcon className='languageIcon'/>*/}
                <img  data-original="https://static.tildacdn.com/tild3336-6233-4864-b239-633138313966/fi-rr-globe.svg"
                 src="https://static.tildacdn.com/tild3336-6233-4864-b239-633138313966/fi-rr-globe.svg">

                 </img>
             </div>
             <div className='item'>
                <a>ВЫХОД</a>
             </div>
        </header>
    )
}

export default TMPHeader;