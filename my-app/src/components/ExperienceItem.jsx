import React from "react";
import { ListGroup, Button, Spinner } from "react-bootstrap";
import ImageUploader from "react-images-upload";
import { Modal } from "react-bootstrap";
import EditExperienceForm from "./EditExperienceForm";


const ExperienceItem = (props) => {
  const [isUploadWindowOpen, setIsUploadWindowOpen] = React.useState(true);
  const [experienceImage, setExperienceImage] = React.useState();
  const [imageUpload, setImageUpload] = React.useState();
  const [imageUploadingLoader, setImageUploadingLoader] = React.useState(false);
  const [openModal, showModal] = React.useState(false)

  const [id, getId] = React.useState('')

  const fetchExperienceImage = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/6163e31ca890cc0015cf07c9/experiences/${props.experience._id}`,
        {
          headers: {
            'Authorization':
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZTMxY2E4OTBjYzAwMTVjZjA3YzkiLCJpYXQiOjE2MzM5MzYxNTcsImV4cCI6MTYzNTE0NTc1N30.cQb5Rq2bVKtljqwRew41uKAJ7AUi3fQitiFeytDaAgQ",
            "Content-Type": "'application/x-www-form-urlencoded",},
        }
      );
      let data = await response.json();
      setExperienceImage(data.image);
      console.log(data)
    } catch (er) {
      console.log(er);
    }
  };//taken

  const postProfilePictureHandler = async () => {
    setImageUploadingLoader(true);
    let formData = new FormData();
    let blob = new Blob([imageUpload[0]], { type: "img/jpeg" });
    formData.append("experience", blob);



    const getParams = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get("id");
      return id
      
    };

    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${props.userID}/experiences/${props.experience._id}/picture`,
        {
          method: "POST",
          body: formData,
          headers: {
            'Authorization':
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZTMxY2E4OTBjYzAwMTVjZjA3YzkiLCJpYXQiOjE2MzM5MzYxNTcsImV4cCI6MTYzNTE0NTc1N30.cQb5Rq2bVKtljqwRew41uKAJ7AUi3fQitiFeytDaAgQ",
           },
        }
      );
      setTimeout(() => {
        setImageUploadingLoader(false);
        fetchExperienceImage();
        openUploadWindowHandler();
        console.log('sent request')
      }, 1000);
    } catch (er) {
      console.log(er);
    }
  };//taken

  const openUploadWindowHandler = () => {
    setIsUploadWindowOpen(!isUploadWindowOpen);
  };

  const profilePictureUploadHandler = (picture) => {
    setImageUpload(picture);
  };

  React.useEffect(() => {
    fetchExperienceImage(); //taken
  }, []);

  return (
    <ListGroup.Item  variant="light" 
    className=" listElement d-flex align-items-center justify-content-between brdr-bottom">
      <div className="d-flex align-items-start">
        <div className="expImgPlace mr-4" >
          <img src={experienceImage}/>
         
        </div>
        
      
        <a onClick={()=>{
      showModal(true)
      getId(props.userID)
      
      
    }} className={"positionJob"}>
                    
                    <h6 className="positionJob">{props.experience.role}</h6>
                    <p>{props.experience.company} </p>
                    <p>{props.experience.startDate + " -  " + props.experience.endDate}</p>
                    <p>{props.experience.area} </p>
                  </a>


      </div>
      <div onClick={() => props.editModal(props.experience)} style={{ cursor: "pointer" }}>
        <i className="fas fa-pen "></i>
      </div>

            
      <Modal
            show={openModal}
            onHide={()=>{
              showModal(false)
            }}
            animation={true}
          >
            <Modal.Header  closeButton>
              <Modal.Title>Edit Experience</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {imageUploadingLoader ? (
              <div className="w-100 py-5 d-flex flex-column align-items-center justify-content-center">
                <p className="font-weight-bold mr-2 mb-3">Uploading...</p>
                <Spinner variant="primary" animation="border" role="status" />
              </div>
            ) : (
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
                <div className="d-flex justify-content-center align-items-center" style={{ height: 40 }}>
                 
            
                </div>
              </>
            )}
              <EditExperienceForm 
              id={id}
               />


       
            </Modal.Body>
          </Modal>

    </ListGroup.Item>
  );
};

export default ExperienceItem;