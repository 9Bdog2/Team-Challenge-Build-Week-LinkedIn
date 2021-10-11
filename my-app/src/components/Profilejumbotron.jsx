import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import './Profilejumbotron.css'
// import { Link } from "react-router-dom";
import { BsThreeDots } from 'react-icons/bs';

export default function Profilejumbotron() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetchProfile()
  }, [])
  
  const fetchProfile = async () => {
    try {
      let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZTMxY2E4OTBjYzAwMTVjZjA3YzkiLCJpYXQiOjE2MzM5MzYxNTcsImV4cCI6MTYzNTE0NTc1N30.cQb5Rq2bVKtljqwRew41uKAJ7AUi3fQitiFeytDaAgQ' 
        }
      })
      if (response.ok) {
        let data = await response.json()
        console.log(data)
        setData(data)
      } else {
        console.log('Something went wrong with the PROFILE request')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Jumbotron className='jumboL shadow-sm p-3 mb-5 bg-white rounded'>
      <img src={data.image} alt="profile picture"/>
      <div className='firstSection'>
        
      </div>
      
      <div className="mt-2 secondSection">
        
        {/* find class for bringing image to front */}
        <h1>{data.name} {data.surname}</h1>
        <div>
          {data.title}
        </div>
        <span>{data.area}</span>
      </div>
      <span>
        <a href="">200 connections</a>
      </span>

      <p>
        {data.bio}
      </p>
      <div>
        <Button className="hero_btn font-weight-bold" variant="primary">Open to</Button>
        <Button className="hero_btn mx-2"variant="outline-secondary">Add section</Button>
        <Button className="round_btn" variant="outline-secondary"><BsThreeDots /></Button>
      </div>
    </Jumbotron>
  );
}
