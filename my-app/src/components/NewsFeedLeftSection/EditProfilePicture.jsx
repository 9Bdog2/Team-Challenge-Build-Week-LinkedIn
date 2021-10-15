import ImageUploader from 'react-images-upload'
import {useState} from 'react'
import Button from 'react-bootstrap/Button'

import React from 'react'

export default function EditProfilePicture() {

    const [imageUpload, setImageUpload] = useState();
    const [isUploadWindowOpen, setIsUploadWindowOpen] = useState(true);

    const openUploadWindowHandler = () => {
        setIsUploadWindowOpen(!isUploadWindowOpen);
      };
    
      const profilePictureUploadHandler = (picture) => {
        setImageUpload(picture);
      };
      


    const postProfilePictureHandler = async () => {
        let formData = new FormData();
        let blob = new Blob([imageUpload[0]], { type: "img/jpeg" });
        formData.append("profile", blob);
    
        try {
          let response = await fetch(
            'https://striveschool-api.herokuapp.com/api/profile/6163e31ca890cc0015cf07c9/picture',
            {
              method: "POST",
              body: formData,
              headers: {
                'Authorization':
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZTMxY2E4OTBjYzAwMTVjZjA3YzkiLCJpYXQiOjE2MzM5MzYxNTcsImV4cCI6MTYzNTE0NTc1N30.cQb5Rq2bVKtljqwRew41uKAJ7AUi3fQitiFeytDaAgQ",
               },
            }
          );
        } catch (err) {
          console.log(err);
        }
      };//taken
    
      return(
        <>
      <ImageUploader
                      withIcon={false}
                      buttonText="Upload image"
                      imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                      maxFileSize={5242880}
                      singleImage={true}
                      withPreview={true}
                      withLabel={false}
                      onChange={profilePictureUploadHandler}
                    />
                     
                      
                     <Button
                        variant="primary"
                        className="rounded-pill"
                        style={{ width: "60%" }}
                        onClick={postProfilePictureHandler}
                      >
                        Save Picture 
                      </Button>
                      </>
      )
   
}



