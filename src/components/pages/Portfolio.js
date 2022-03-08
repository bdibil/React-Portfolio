import React from 'react';
import '../styles/Portfolio.css'
import Card from '../Card.js';
import ArtSea from '../../assets/images/ArtSea.png';
import ExcuseGen from '../../assets/images/excuse_gen.png';
import App3 from '../../assets/images/Team_gen.png';
import App4 from '../../assets/images/day_plan.png';
import App5 from '../../assets/images/e-comm.png';
import App6 from '../../assets/images/JATE.png';


const projects = [
  {
    name: 'ArtSea',
    description: 'Art Scene of the Puget Sound',
    gitLink: 'https://github.com/bdibil/PNW-ArtSea',
    LiveLink: 'https://artsea-2022.herokuapp.com/',
    imgSrc: ArtSea,
    imgH: '280',
  },
  {
    name: 'Excuse Generator',
    description: 'Generates a customizable excuse for you',
    gitLink: 'https://github.com/velkyam/excuse-generator',
    LiveLink: 'https://velkyam.github.io/excuse-generator/',
    imgSrc: ExcuseGen,
    imgH: '280',

  },
  {
    name: 'Team Profile Generator',
    description: 'CLI app that generates an index.html based on user input',
    LiveLink: 'https://github.com/bdibil/Team-Profile-Generator',
    gitLink: 'https://github.com/bdibil/Team-Profile-Generator',
    imgSrc: App3,
    imgH: '280',
  },
  {
    name: 'Work Day Scheduler',
    description: 'Dynamically updates HTML and CSS using JavaScript and jQuery',
    LiveLink: 'https://bdibil.github.io/Work-Day-Scheduler/',
    gitLink: 'https://github.com/bdibil/Work-Day-Scheduler',
    imgSrc: App4,
    imgH: '280',
  },
  {
    name: ' E-Commerce Back End',
    description: 'Back end architecture using Express.js, Sequelize, and a MySQL database',
    gitLink: 'https://github.com/bdibil/E-Commerce-Back-End',
    LiveLink: 'https://e-comm-bd.herokuapp.com/',
    imgSrc: App5,
    imgH: '280',
  },
  {
    name: 'PWA Text Editor',
    description: 'Single-page application that meets the PWA criteria and will function online or offline',
    LiveLink: 'https://jate-bd.herokuapp.com/',
    gitLink: 'https://github.com/bdibil/PWA-Text-Editor',
    imgSrc: App6,
    imgH: '280',
  },

 
]




export default function Portfolio() {
  return (
    <div className="portStyle">
      <br></br>
      <h1>My Work</h1>

      <div className="row row-cols-2 row-cols-md-3">

      {projects.map(project =>  <div class="col"><Card name={project.name} description={project.description} LiveLink={project.LiveLink} gitLink={project.gitLink} imgSrc={project.imgSrc} imgH={project.imgH} /></div>)}


      {/* <div class="col" style={contStyle}><Card name={project.name} description={project.description} LiveLink={project.LiveLink} gitLink={project.gitLink} imgSrc={project.imgSrc} imgH={project.imgH} /></div> */}

     
    </div>
 
    </div>
  );
}
