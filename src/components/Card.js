import React from 'react';
import './styles/Card.css'

export default function Card(props) {

  return (

    <div className="card cardStyle">
      <img className="card-img-top" src={props.imgSrc} height={props.imgH} alt="Card cap" />
      <div className="card-body cardBody">
        <h2 className="card-title cardTitle">{props.name}</h2>
        <p className="card-text cardText">{props.description}</p>
        <a href={props.LiveLink} target="_blank" rel="noreferrer" class="card-link cardText" >Live App</a>
        <a href={props.gitLink} target="_blank" rel="noreferrer" class="card-link cardText">Github Repo</a>

        {/* <p className="card-text">ID: {props.id}</p> */}
      </div>
    </div>

  );
}
