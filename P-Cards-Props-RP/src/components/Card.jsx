import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <div className="card-body">
            <img src={props.img} alt="img" />
            <div className="about">
                {/* <h2 className='card-title'>{props.title}</h2> */}
                <p className='card-description'>
                    {props.description}
                </p>
            </div>
            <button>See Details</button>
        </div>
    </div>
  )
}

export default Card