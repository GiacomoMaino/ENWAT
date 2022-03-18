import React from 'react'

import './index.css'

const PartyCard = ({parties}) => {
    return(
<div class="container">
  <ul class="cards">
    {parties.map((party, i) => 
    (<> 
        <li class="card cards__item" style={{color: '#ffffff'}}>
      <div class="card__frame">
        <h2 class="card__title">{new Date(party.date.seconds*1000).toLocaleDateString()}</h2>
      </div>
      <div class="card__overlay"></div>
      <div class="card__content">
        <h2>{party.locationName}</h2>
        <p>{party.desc}</p>
        <p>{new Date(party.date.seconds*1000).toLocaleDateString()}</p>
      </div>
    </li>
    </>)) }
    {/*
    <li class="card cards__item">
      <div class="card__frame">
        <h2 class="card__title">{Date.partyObj.date.seconds}</h2>
      </div>
      <div class="card__overlay"></div>
      <div class="card__content">
        <h2>Design</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum veritatis id quia cupiditate sed architecto aliquam nostrum unde nam minima voluptas dicta, beatae sint reprehenderit sit ducimus officiis ratione?</p>
      </div>
    </li>
    */}
  </ul>
</div>
    )
}

export default PartyCard;