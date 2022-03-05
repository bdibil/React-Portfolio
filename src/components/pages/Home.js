import React from 'react';
import '../styles/Home.css'
import myPhoto from '../../assets/images/Me_2.jpg'

export default function Home() {
  return (
    <div className="homeStyle">
      <br></br>
      <h1>Welcome to my Home Page</h1>
      {/* <br></br>
      <p>
        <h3>Welcome!</h3>
      </p> */}
      <br></br>
    <div>
      <img className="myPhoto" src={myPhoto} alt="Bernardo Smiling"/>
    </div>
    <br></br>
      <p>
        <h3>Have a  look around</h3>
      </p>
      <br></br>


    </div>
  );
}
