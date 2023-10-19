import { Offer } from '../../types/offer';
import { countRating } from '../card/utils';
import AddToFavoriteButton from '../add-to-favorite-btn/add-to-favorite-btn';
import { PagesClassModifier, FavoriteBtnSize } from '../../const';

type FavoritesCardProps = {
  offer: Offer;
}

function FavoritesCard({offer}: FavoritesCardProps): JSX.Element {
  const {title, type, price, previewImage, isPremium, rating, isFavorite} = offer;

  return (
    <article className="favorites__card place-card">
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={150}
            height={110}
            alt={title}
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">
                        /&nbsp;night
            </span>
          </div>
          <AddToFavoriteButton isFavorite={isFavorite} classModifier={PagesClassModifier.CARD} size={FavoriteBtnSize.CARD} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${countRating(rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoritesCard;
