import React from 'react'
import { Link } from "react-router-dom"
import "./PathCard.css"
import image from "./webdev.png"

// Services

// Components


const PathCard = (props) => {
  // useStates

  // methods

  return (
    <>
    <div className="path-container">
      <div className="path-card">
        <div className="path-image">
          <img src={image}alt="" />
        </div>
        <div className="path-body">
          <div className="path-info">

          <h1>WEB DEVELOPMENT</h1>
                <p>blah blah blah some info on the pathway Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi assumenda cumque deserunt
                    dolorum ex exercitationem.</p>
          </div>
          <div className="skill-infos">
            <div className="skills">
              <button className="card-button">VIEW SKILLS
              <span>&rarr;</span>
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>



    </>
  )
}

export default PathCard