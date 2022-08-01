import React, { useState } from 'react';

type Props = {
    className?: string,
    role?: string
}
  


const SelectTest:  React.FC<Props> = ({role}) => {
   const arOptions = ['Мышь', 'Кот', 'Сыр', 'Молоко'];
   const [value, setValue] = useState('');

   const options = arOptions.map((text, index) => {
      return <option key={index} value={index}>{text}</option>;
   });

   return <div>
      <select value={value} onChange={(event) => setValue(event.target.value)}>
         {options}
      </select>
      <p>
         Выбрана опция: {arOptions[Number(value)]}
      </p>
   </div>;
}

export default SelectTest;