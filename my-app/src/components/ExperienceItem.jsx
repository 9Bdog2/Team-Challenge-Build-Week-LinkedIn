import React from "react";
import { ListGroup, Button, Spinner } from "react-bootstrap";
import ImageUploader from "react-images-upload";


class ExperienceItem1 extends React.Component {

  state={
    isUploadWindowOpen: true,
    experienceImage: [null],
    imageUpload: [null],
    imageUploadingLoader: false,
  }

  fetchExperienceImage = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/6163e31ca890cc0015cf07c9/experiences/${this.props.experience._id}`,
        {
          headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZTMxY2E4OTBjYzAwMTVjZjA3YzkiLCJpYXQiOjE2MzM5MzYxNTcsImV4cCI6MTYzNTE0NTc1N30.cQb5Rq2bVKtljqwRew41uKAJ7AUi3fQitiFeytDaAgQ",
          "Content-Type": "application/json",},
        }
      );
      let data = await response.json();
      this.setState({
        ...this.state,
        experienceImage: data.image
      })
      console.log(data.image)

      //setExperienceImage(data.image);
    } catch (error) {
      console.log(error);
    }
  }

  postPicture = async () => {
    this.setState({
      ...this.state,
      imageUploadingLoader:true
    }) //set satte
    let formData = new FormData();
    let blob = new Blob([this.state.imageUpload[0]], { type: "img/jpeg" });
    formData.append("experience", blob);

    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/$6163e31ca890cc0015cf07c9/experiences/${this.props.experience._id}/picture`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZTMxY2E4OTBjYzAwMTVjZjA3YzkiLCJpYXQiOjE2MzM5MzYxNTcsImV4cCI6MTYzNTE0NTc1N30.cQb5Rq2bVKtljqwRew41uKAJ7AUi3fQitiFeytDaAgQ",
          },
        }
      );
      setTimeout(() => {
        this.setState({
          ...this.state,
          imageUploadingLoader: true
        })
        this.fetchExperienceImage();
        this.openUploadWindowHandler(); //setstate
      }, 1000);
    } catch (er) {
      console.log(er);
    }
  };


   openUploadWindowHandler = () => {
    this.setState({
      ...this.state,
      isUploadWindowOpen: true
    })
    console.log(this.state)
  };

   profilePictureUploadHandler = (picture) => {
    this.setState({
      ...this.state,
      imageUpload: picture
    })
  };

  componentDidMount = async () =>{
    this.fetchExperienceImage();
  }



  render(){
    return(
      <ListGroup.Item variant="light" className="d-flex align-items-center justify-content-between brdr-bottom">
      <div className="d-flex align-items-start">
        <div className="expImgPlace mr-4" style={{ background: `url(${this.experienceImage})` }}>
        <div className="experience-imgupload-container" onClick={true}>
              <i className="fas fa-upload"></i>
            </div>
          
        </div>
        {this.isUploadWindowOpen && (
          <div className="upload-container swing-in-top-fwd">
            <h5 className="font-weight-normal">Upload Image</h5>
            {this.imageUploadingLoader ? (
              <div className="w-100 py-5 d-flex flex-column align-items-center justify-content-center">
                <p className="font-weight-bold mr-2 mb-3">Uploading...</p>
                <Spinner variant="primary" animation="border" role="status" />
              </div>
            ) : (
              <>
                <ImageUploader
                  withIcon={true}
                  buttonText="Upload image"
                  imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                  maxFileSize={5242880}
                  singleImage={true}
                  withPreview={true}
                  withLabel={false}
                  onChange={this.profilePictureUploadHandler}
                />
                <div className="d-flex justify-content-center align-items-center" style={{ height: 40 }}>
                  <Button
                    variant="outline-secondary"
                    className="rounded-pill mr-2"
                    onClick={this.openUploadWindowHandler}
                    style={{ width: "40%" }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    className="rounded-pill"
                    style={{ width: "60%" }}
                    onClick={this.postProfilePictureHandler}
                  >
                    Save Changes
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
        <div className="d-flex flex-column">
          <h5 className="mb-0 font-weight-normal">{this.props.experience.role}</h5>
          <p className="mb-0 ">{this.props.experience.company}</p>
         
          <small className="font-weight-light">{this.props.experience.area}</small>
        </div>
      </div>
      <div onClick={() => this.props.editModal(this.props.experience)} style={{ cursor: "pointer" }}>
        <i className="fas fa-pen "></i>
      </div>
    </ListGroup.Item>
    )
  }
}


const ExperienceItem = (props) => {
  const [isUploadWindowOpen, setIsUploadWindowOpen] = React.useState(true);
  const [experienceImage, setExperienceImage] = React.useState();
  const [imageUpload, setImageUpload] = React.useState();
  const [imageUploadingLoader, setImageUploadingLoader] = React.useState(false);

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
    <ListGroup.Item variant="light" className=" listElement d-flex align-items-center justify-content-between brdr-bottom">
      <div className="d-flex align-items-start">
        <div className="expImgPlace mr-4" >
          <img src={experienceImage}/>
          {"6163e31ca890cc0015cf07c9" === "6163e31ca890cc0015cf07c9" && (
            <div className="experience-imgupload-container" onClick={openUploadWindowHandler}>
              <i className="fas fa-upload">upload</i>
            </div>
          )}
        </div>
        {!isUploadWindowOpen && (
          <div className="upload-container swing-in-top-fwd">
            <h5 className="font-weight-normal">Upload Image</h5>
            {imageUploadingLoader ? (
              <div className="w-100 py-5 d-flex flex-column align-items-center justify-content-center">
                <p className="font-weight-bold mr-2 mb-3">Uploading...</p>
                <Spinner variant="primary" animation="border" role="status" />
              </div>
            ) : (
              <>
                <ImageUploader
                  withIcon={true}
                  buttonText="Upload image"
                  imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                  maxFileSize={5242880}
                  singleImage={true}
                  withPreview={true}
                  withLabel={false}
                  onChange={profilePictureUploadHandler}
                />
                <div className="d-flex justify-content-center align-items-center" style={{ height: 40 }}>
                  <Button
                    variant="outline-secondary"
                    className="rounded-pill mr-2"
                    onClick={openUploadWindowHandler}
                    style={{ width: "40%" }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    className="rounded-pill"
                    style={{ width: "60%" }}
                    onClick={postProfilePictureHandler}
                  >
                    Save Changes
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      
        <a className={"positionJob"}>
                    
                    <h6 className="positionJob">{props.experience.role}</h6>
                    <p>{props.experience.company} </p>
                    <p>{props.experience.startDate + " -  " + props.experience.endDate}</p>
                    <p>{props.experience.area} </p>
                  </a>


      </div>
      <div onClick={() => props.editModal(props.experience)} style={{ cursor: "pointer" }}>
        <i className="fas fa-pen "></i>
      </div>
    </ListGroup.Item>
  );
};

export default ExperienceItem;