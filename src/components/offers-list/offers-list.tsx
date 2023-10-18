import Card from '../card/card';
import { Offer } from '../../types/offer';
import { useState } from 'react';
import { Classes } from '../../const';

type OffersListProps = {
  offers: Offer[];
  classes: Classes;
}

function OffersList({offers, classes}: OffersListProps): JSX.Element {

  const [ ,setActiveCard] = useState('');

  function handleMouseLeave() {
    setActiveCard('');
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card classes={classes} onMouseEnter = {() => setActiveCard(offer.id)} onMouseLeave={handleMouseLeave} offer = {offer} key = {offer.id}/>)}
    </div>
  );
}

export default OffersList;

