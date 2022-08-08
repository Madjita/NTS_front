import React,{useEffect, useState} from 'react';
import {useNavigate } from 'react-router-dom'
import {checkRole} from '../../../routes'
import { Login, Register } from '../../IDataInterface/IDataInterface';
import './PageRegister.css';


import {registerUser} from '../../../api/api'

type Props = {
    className?: string
    setRole?:  any
}



const PageRegister:  React.FC<Props> = ({setRole}) => {
  const [RegiserData, setRegisterData] = useState<Register>({email: '', password: '',company: '',firstName:'',secondName:'',middleName:''});
  const [BadMessage,setBadMessage] = useState(null);
  const navigate = useNavigate();


  const handleChangeOnSignup = () =>
  {
        navigate('/login')
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    let token = await registerUser(RegiserData);

    if(token != null)
    {
        handleChangeOnSignup()
    }

  }




    
    return(
        <div id='render'>
            <div>
                <div className='logo'></div>
                    <div tabIndex={-1} style={{outline: 'none'}}>
                        <div id="menu">
                            <a onClick={handleChangeOnSignup}>Login</a>
                            <span className='a'>
                            Language<span className='triangle'></span>
                                <div className='menu'>
                                    <a aria-current="page" href="/login/login/en">English</a>
                                    <a href="/login/login/de">Deutsch</a><a href="/login/login/fr">Français</a>
                                    <a href="/login/login/fi">Suomi</a>
                                    <a href="/login/login/sv">Svenska</a>
                                    <a href="/login/login/nl">Nederlands</a>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className='Content'>
                        <div tabIndex={-1} style={{outline: 'none'}}>
                            <div>
                            <div className='ContentBox'>
                                    <h1>Register to NTS</h1>
                                    <form onSubmit={handleSubmit}>
                                        <label htmlFor="Email">Email</label>
                                        <input data-automation="username-input" id="Email" onChange={e => setRegisterData((prevState) => ({
                                            ...prevState,
                                             email: e.target.value as any
                                            } as Register))}/>
                                        <label htmlFor="Password">Password</label>
                                        <input data-automation="password-input" id="Password" type="Password" onChange={e => setRegisterData((prevState)=> ({
                                            ...prevState,
                                            password: e.target.value as any
                                        }) as Register)}/>
                                        <p style={{textAlign: 'center',color: 'red'}}>{BadMessage}</p>


                                        <label htmlFor="Company">Company</label>
                                        <input data-automation="company-input" id="Company" type="Company" onChange={e => setRegisterData((prevState)=> ({
                                            ...prevState,
                                            company: e.target.value as any
                                        }) as Register)}/>


                                        <label htmlFor="FirstName">FirstName</label>
                                        <input data-automation="firstName-input" id="FirstName" type="FirstName" onChange={e => setRegisterData((prevState)=> ({
                                            ...prevState,
                                            firstName: e.target.value as any
                                        }) as Register)}/>


                                        <label htmlFor="SecondName">SecondName</label>
                                        <input data-automation="secondName-input" id="SecondName" type="SecondName" onChange={e => setRegisterData((prevState)=> ({
                                            ...prevState,
                                            secondName: e.target.value as any
                                        }) as Register)}/>

                                        <label htmlFor="Middle Name">Middle Name</label>
                                        <input data-automation="middleName-input" id="middleName" type="middleName" onChange={e => setRegisterData((prevState)=> ({
                                            ...prevState,
                                            middleName: e.target.value as any
                                        }) as Register)}/>

                                        <button type="submit" className='Button'>
                                            Get started
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <a className='hint' href="/login/forgot/en">Forgot your password?</a>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default PageRegister;