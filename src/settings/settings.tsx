

const http_type = "https://"
const ip = "localhost"//"192.168.1.167"
const port = "5001"
export const sleepLoader = 0

const GetConnectionString = () =>{

    return http_type+ip+":"+port
}


export const GetSesstionToken = () =>{
    let sessionToken =  JSON.parse(localStorage.getItem('session') as string)
    return sessionToken;
}

export const GetSessionRole = () => {
    let sessionRole =  JSON.parse(localStorage.getItem('role') as string)
    return sessionRole;
}

export const GetSessionEmail = () => {
    let sessionEmail =  JSON.parse(localStorage.getItem('email') as string)
    return sessionEmail;
}


export default GetConnectionString;