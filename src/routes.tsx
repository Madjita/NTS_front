export const checkRole = (role: string) =>{
  
  if(role === 'admin')
  {
      return '/admin'
  }

  if(role === 'enginer')
  {
      return '/enginer'
  } 

  if(role === 'guest')
  {
      return '/'
  } 
}


export const chekRoleForEnginer= (sessionRole: string | null) => {

  if(sessionRole !== "\"enginer\"")
  {
    if(sessionRole === "\"admin\"")
    {
          return false
    }

    return true;
  }

  return false

}


export const chekRoleForEmpty = (sessionRole: string | null) => {

  if(sessionRole === null)
  {
     return  true
  }

  return false

}