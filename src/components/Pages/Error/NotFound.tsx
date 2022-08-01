import React,{useState} from 'react';

import './NotFound.css';


type Props = {
    className?: string
}



const NotFound:  React.FC<Props> = (props) => {


    return(
        <div id='render'>
            <div>
                <div className='logo'></div>
                    <div tabIndex={-1} style={{outline: 'none'}}>
                        <div id="menu">
                            <a href="/login">Sign Up</a>
                            <span className='a'>
                            Language<span className='triangle'></span>
                                <div className='menu'>
                                    <a aria-current="page" href="/login">English</a>
                                    <a href="/login/login/de">Deutsch</a>
                                    <a href="/login/login/fr">Français</a>
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
                                    <h1>NotFound</h1>
                            </div>
                        </div>
                        <a className='hint' href="/login">Do you want to go a login?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;