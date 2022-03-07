import React from 'react';
import '../styles/Portfolio.css'
import Card from '../Card.js';
import ArtSea from '../../assets/images/ArtSea.png';
import ExcuseGen from '../../assets/images/excuse_gen.png';
import App3 from '../../assets/images/image-3.png';

// console.log(Test)

const projects = [
  {
    name: 'ArtSea',
    description: 'ArtSea - Art Scene of the Puget Sound',
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
    name: 'App 3',
    description: 'Placeholder App 3',
    gitLink: 'https://github.com/bdibil/',
    imgSrc: App3,
    imgH: '280',
  },
 

]


const contStyle = {
  padding: '10px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const colStyle = {
  // width: '10vw',
  padding: '5px',
  // margin: '5px',
  // display: 'flex',
  // flexWrap: 'wrap',
  justifyContent: 'center',
};

export default function Portfolio() {
  return (
    <div className="portStyle">
      <br></br>
      <h1>My Work</h1>

      <div className="row row-cols-2 row-cols-md-3">

      <div class="col" style={contStyle}>
      <Card name={projects[0].name} description={projects[0].description} LiveLink={projects[0].LiveLink} gitLink={projects[0].gitLink} imgSrc={projects[0].imgSrc} imgW={projects[0].imgW} imgH={projects[0].imgH} />
      </div>

      <div class="col" style={contStyle}>
      <Card name={projects[1].name} description={projects[1].description} LiveLink={projects[1].LiveLink} gitLink={projects[1].gitLink} imgSrc={projects[1].imgSrc}  imgH={projects[1].imgH} />
      </div>

      <div class="col" style={contStyle}>
      <Card name={projects[2].name} description={projects[2].description} LiveLink={projects[2].LiveLink} gitLink={projects[2].gitLink} imgSrc={projects[2].imgSrc} imgH={projects[2].imgH}/>
      </div>


      
      <div class="col" style={contStyle}>
      <Card name={projects[0].name} description={projects[0].description} LiveLink={projects[0].LiveLink} gitLink={projects[0].gitLink} imgSrc={projects[0].imgSrc}/>
      </div>

      <div class="col" style={contStyle}>
      <Card name={projects[1].name} description={projects[1].description} LiveLink={projects[1].LiveLink} gitLink={projects[1].gitLink} imgSrc={projects[1].imgSrc}/>
      </div>

      <div class="col" style={contStyle}>
      <Card name={projects[2].name} description={projects[2].description} LiveLink={projects[2].LiveLink} gitLink={projects[2].gitLink} imgSrc={projects[2].imgSrc}/>
      </div>

   

     
    </div>
 
    </div>
  );
}
