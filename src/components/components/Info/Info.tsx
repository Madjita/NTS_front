import React, { useState } from 'react';
import { useActions } from '../../../redux/hooks/userActions';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { GetSesstionToken } from '../../../settings/settings';
import { IUser } from '../../IDataInterface/IDataInterface';


type Props = {
    className?: string,
    count?: number
}


export interface OldNewUser{
    oldUser: IUser,
    newUser: IUser 
}
 
const Info:  React.FC<Props> = ({count}) => {
    const {userLogin} = useTypedSelector(state => state.userLogin)
    const [newwUser, ChangeInfo] = useState<OldNewUser>({
       // oldUser: userLogin ? userLogin as IUser:new Object as IUser,
       oldUser: userLogin as IUser,
       newUser: new Object as IUser
    })
    const HandleChangeInfo = (e:any)=> {
      newwUser.newUser.firstName = e.target.value as string 
      ChangeInfo({...newwUser})
    }

    const HandleChangeInfoSecond = (e:any)=> {
        newwUser.newUser.secondName = e.target.value as string 
        ChangeInfo({...newwUser})
      }
    
    const {changeUser} = useActions()
    
    const HandleChangeUser = (e:any)=>{
        let sessionToken = GetSesstionToken();
        changeUser(sessionToken, newwUser)
    }
    return(
        <div className="PromoCarousel">
            <p>{count}</p>
            <div className="carouselSingle">
                <div className="CarouselItem" data-automation="carousel-initial">
                    <div className="C">
                        <p >{userLogin?.firstName}</p>
                        <p >{newwUser.newUser.firstName}</p>
                        <input type="text" value={
                            newwUser.newUser.firstName === "" ? userLogin?.firstName : newwUser.newUser.firstName 
                        } onChange={HandleChangeInfo}></input>

<p >{userLogin?.secondName}</p>
<p >{newwUser.newUser.secondName}</p>
                        <input type="text" value={
                            newwUser.newUser.secondName === "" ? userLogin?.secondName : newwUser.newUser.secondName 
                        } onChange={HandleChangeInfoSecond}></input>
                        <button onClick={HandleChangeUser}>Save </button>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Info;