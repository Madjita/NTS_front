import React,{useEffect, useState} from 'react';
import {useNavigate } from 'react-router-dom'
import {checkRole} from '../../../routes'
import { Login, Register } from '../../IDataInterface/IDataInterface';
import './PageLogin.css';


import {registerUser,loginUser} from '../../../api/api'
import { useActions } from '../../../redux/hooks/userActions';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type Props = {
    className?: string
    setRole?:  any
    setUser?: any
}



const PageLogin:  React.FC<Props> = ({setRole,setUser}) => {
  const [LoginData, setLoginData] = useState<Login>({email: '', password: ''});
  const [showPassword,setShowPassword] = useState(false);
  const [RegiserData, setRegisterData] = useState<Register>({email: '', password: '',company: '',firstName:'',secondName:'',middleName:''});
  const [BadMessage,setBadMessage] = useState(null);
  const [signup, setSignup] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  const navigate = useNavigate();

  const {userLogin, errorLogin, loadingLogin} = useTypedSelector(state => state.userLogin)
  const {findUser} = useActions()

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    let token  = null;
    token = await loginUser(LoginData,setBadMessage);


    if(token != null || token != undefined)
    {
        localStorage.setItem('session',JSON.stringify(token.token));
        localStorage.setItem('role',JSON.stringify(token.role));
        localStorage.setItem('email',JSON.stringify(token.email));
        setRole(token.role);

        findUser(token.token,token.email)
        delete token.token;
        
        navigate(checkRole(token.role) as string);
    }

  }

  //handleChangeOnSignup
  const handleChangeOnSignup = () =>{
    //setSignup(!signup)
    navigate('/register')
  }


    
    return(
        <div id='render'>
            <div>
                <div className='logo'></div>
                    <div tabIndex={-1} style={{outline: 'none'}}>
                        <div id="menu">
                            
                            { signup ? 
                                    <a onClick={handleChangeOnSignup}>Login</a>
                                    :
                                    <a onClick={handleChangeOnSignup}>Sign Up</a>
                            }
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
                                    { signup ? 
                                            <h1>Register to NTS</h1>
                                            :
                                            <h1>Login to NTS</h1>
                                    }
                                    <form onSubmit={handleSubmit}>
                                        <label htmlFor="Email">Email</label>
                                        <FormControl sx={{ m: 1, width: '100%',margin:'0',marginBottom: '20px' }} variant="filled">
                                        <Input
                                            id="Email"
                                            data-automation="username-input"
                                            value={LoginData.email}
                                            onChange={e => setLoginData((prevState) => ({
                                                ...prevState,
                                                 email: e.target.value as any
                                            } as Login))}
                                        />
                                        </FormControl>
                                       {/*
                                        <input  className='InputLogin' data-automation="username-input" id="Email" onChange={e => setLoginData((prevState) => ({
                                            ...prevState,
                                             email: e.target.value as any
                                            } as Login))}/>
                                       
                                       */}
                                        <label htmlFor="Password">Password</label>
                                        <FormControl sx={{ m: 1, width: '100%',margin:'0' }} variant="filled">
                                        <Input
                                            id="Password"
                                            type={showPassword ? 'text' : 'password'}
                                            value={LoginData.password}
                                            onChange={e => setLoginData((prevState)=> ({
                                                ...prevState,
                                                password: e.target.value as any
                                            }) as Login)}
                                            endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                            }
                                        />
                                        </FormControl>
                                       {/*
                                        <input className='InputLogin' data-automation="password-input" id="Password" type="Password" onChange={e => setLoginData((prevState)=> ({
                                            ...prevState,
                                            password: e.target.value as any
                                        }) as Login)}/>
                                       */}
                                        <p style={{textAlign: 'center',color: 'red'}}>{BadMessage}</p>
                                        <button type="submit" className='Button'>
                                            {
                                                signup ?
                                                "Get started"
                                                :
                                                "Login"
                                            }
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

export default PageLogin;