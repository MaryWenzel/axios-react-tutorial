import React, {useState} from 'react';

function BeerCard  (props) {

    const [isActive, setActive] = useState('false')
    const handleLike = () => {
        setActive(!isActive)
    }

    return(
        <li>
        <img src={props.image_url}></img>
        <div>
            <div className='main-info'>
                <h2>{props.name}</h2>
                <p> First Crafted: {props.first_brewed}</p> 
                <p>{props.abv}</p>
            </div>
            <div className="beer-desc">
                <p>{props.tagline}</p>
                <p>{props.description}</p>
                <i className={isActive ? "far fa-heart" : "fas fa-heart"} style={{color: "red", cursor: 'pointer'}} onClick={handleLike}></i>
            </div>
        </div>
    </li>

    )
}

export default BeerCard