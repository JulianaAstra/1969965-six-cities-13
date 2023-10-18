import { Offer } from '../../types/offer';
import { countRating } from './utils';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import AddToFavoriteButton from '../add-to-favorite-btn/add-to-favorite-btn';
import { PagesClassModifier, FavoriteBtnSize } from '../../const';
import { Classes } from '../../const';

type CardProps = {
  offer: Offer;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  classes: Classes;
}

function Card({offer, onMouseEnter, onMouseLeave, classes}: CardProps): JSX.Element {
  const {id, title, type, price, previewImage, isFavorite, isPremium, rating} = offer;

  return (
    <article onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave} className={classes.ARTICLE_CLASS}>
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className={classes.WRAPPER_CLASS}>

        <Link to = {`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt={title}
          />
        </Link>

      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <AddToFavoriteButton isFavorite = {isFavorite} classModifier={PagesClassModifier.CARD} size={FavoriteBtnSize.CARD}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${countRating(rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to = {`${AppRoute.Offer}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
