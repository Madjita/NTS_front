import {Login, Register} from '../components/IDataInterface/IDataInterface'
import GetConnectionString from '../settings/settings';

  
export async function loginUser(credentials: Login,setBadMessage: any) {
    const formData  = new FormData();
    formData.append('Email', credentials.email);
    formData.append('Password', credentials.password);
    return fetch(GetConnectionString()+'/Authorize/login', {
      method: 'POST',
     /* headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)*/
      body: formData
    })
    .then((res) => {
        if(!res.ok)
        {

            res.text().then((value) => {
                let jsonObject = JSON.parse(value);
                setBadMessage(jsonObject.message)
            })
       
            return null;
            //return  Promise.reject(res)
        }

        return  Promise.resolve(res)
    })
    .then((data) => {
      if (data != null) {
        return data.json();
      }
      return null;
    })
    //.then(data => console.log('+', data))
    //.catch(error =>  { Promise.reject(error) });
}


export async function registerUser(credentials: Register) {
    const formData  = new FormData();
    formData.append('Email', credentials.email);
    formData.append('Password', credentials.password);
    formData.append('FirstName', credentials.firstName);
    formData.append('SecondName', credentials.secondName);
    formData.append('MiddleName', credentials.middleName);
    formData.append('Company', credentials.company);
   
    return fetch(GetConnectionString()+'/Authorize/register', {
      method: 'POST',
      /*headers: {
        'Content-Type': 'multipart/form-data',
      },*/
      body: formData //JSON.stringify(credentials)
    })
    .then(res => res.ok ? res : Promise.reject(res))
    .then(data => data.json())
    .catch(() => console.log('some error'));
}


