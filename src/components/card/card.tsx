import { Offer } from '../../types/offer';
import { countRating } from './utils';

type CardProps = {
  offer: Offer;
}

const BOOKMARK_BUTTON_CLASS = {
  Active: 'place-card__bookmark-button place-card__bookmark-button--active button',
  Inactive: 'place-card__bookmark-button button'
};

function Card({offer}: CardProps): JSX.Element {
  const {title, type, price, previewImage, isFavorite, isPremium, rating} = offer;

  return (
    <article className="cities__card place-card">
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt={title}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={isFavorite ? BOOKMARK_BUTTON_CLASS.Active : BOOKMARK_BUTTON_CLASS.Inactive}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${countRating(rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">
            {title}
          </a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
