import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import "./Profilejumbotron.css";
import { useParams } from "react-router-dom";
import ImageUploader from 'react-images-upload'

// import { Link } from "react-router-dom";

export default function Profilejumbotron() {
  const params = useParams()
  const [data, setData] = useState([]);
  const [showUpload, setShowUpload] = useState(false)

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(()=> {
    fetchProfile()
  }, [params.id])

  const fetchProfile = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${params.id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZTMxY2E4OTBjYzAwMTVjZjA3YzkiLCJpYXQiOjE2MzM5MzYxNTcsImV4cCI6MTYzNTE0NTc1N30.cQb5Rq2bVKtljqwRew41uKAJ7AUi3fQitiFeytDaAgQ",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setData(data);
      } else {
        console.log("Something went wrong with the PROFILE request");
      }
    } catch (error) {
      console.log(error);
    }
  };
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

  return (
    <Jumbotron className="jumboL">
      <div className="firstSection"></div>




     

      <div className="mt-2 secondSection">
      <div className="image-upload" >
  <label for="file-input">
  <img  className="IMAGE" src={data.image} alt="profile picture" />
  </label>

  <input id="file-input" style={{display: 'none'}} type="file" onChange={postProfilePictureHandler} />
</div>
      
                       <Button
                        variant="primary"
                        className="rounded-pill"
                        style={{ width: "60%" }}
                        onClick={postProfilePictureHandler}
                      >
                        Save Picture 
                      </Button>
       

        {/* find class for bringing image to front */}
        <h1>
          {data.name} {data.surname}
        </h1>
        <div>{data.title}</div>
        <p>{data.area}</p>

        <ul style={{ listStyleType: "none" }}>
          <a>200 connections</a>
        </ul>

        <p>{data.bio}</p>
        <p className="d-flex buttonGroup">
          <Button className="connectButton" variant="primary">
            Connect
          </Button>
          <Button className="msgButton" variant="secondary">
            Message
          </Button>
          <Button className="msgButton" variant="secondary">
            ...
          </Button>
        </p>
      </div>
    </Jumbotron>
  );
}
