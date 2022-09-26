import { Button, Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useActions } from '../../../../../redux/hooks/userActions';
import { useTypedSelector } from '../../../../../redux/hooks/useTypedSelector';
import { GetSesstionToken } from '../../../../../settings/settings';




type Props = {
    className?: string,
    value?: any
}



const DownloadPhoto:  React.FC<Props> = ({value}) => {

    

  const [fileSelected, setFileSelected] = useState<any>();
  
  const {userLogin} = useTypedSelector(state => state.userLogin)
  let [newPhoto, takePhoto] = useState<any>();

  
  console.log(" userLogin test : ",userLogin)
  const saveFileSelected= (e : any) => {
    //in case you wan to print the file selected
    //console.log(e.target.files[0]);
    let file = e.target.files[0]
    console.log(file)
    setFileSelected(file);
    importFile(file);
    takePhoto(newPhoto = userLogin?.profile.photoByte)
  };


  const importFile= async (file : any) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      console.log("send", formData)
      axios.defaults.headers.common['Authorization'] = GetSesstionToken();
      axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
      const res = await axios.post("https://localhost:5001/Authorize/ImportFile", formData);
    } catch (ex) {
      console.log(ex);
    }
  };


return(
    <Container className='Buttons'>
          <label htmlFor="photo">
            <input
              accept=".jpg, .png"
              style={{ display: "none" }}
              id="photo"
              name="photo"
              type="file"
              multiple={false}
              onChange={saveFileSelected}
            />

            <Button className='Buttons'
              component="span"
              variant="contained"              
            >
              Choose Picture
            </Button>
          </label>
          <img src={`data:image/png;base64,${userLogin!.profile.photoByte}`} />
        
      </Container>
)
}

export default DownloadPhoto;



