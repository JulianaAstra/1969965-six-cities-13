import { Helmet } from 'react-helmet-async';
import { OfferDetailed } from '../../types/offer';
import { useParams, Navigate } from 'react-router-dom';
import { AppRoute, PagesClassModifier, FavoriteBtnSize } from '../../const';
import { countRating } from '../../components/card/utils';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import AddToFavoriteButton from '../../components/add-to-favorite-btn/add-to-favorite-btn';
import OfferFeatures from '../../components/offer-features/offer-features';
import OfferGoods from '../../components/offer-goods/offer-goods';
import OfferHost from '../../components/offer-host/offer-host';
import Header from '../../components/header/header';
import { Review } from '../../types/review';
import Reviews from '../../components/reviews/reviews';
import OffersList from '../../components/offers-list/offers-list';
import { nearPlaces } from '../../mocks/near-places';
import { NearPlacesClassesForCard } from '../../const';

type OfferPageProps = {
  detailedOffers: OfferDetailed[];
  reviews: Review[];
}

function OfferPage({detailedOffers, reviews} : OfferPageProps): JSX.Element {

  const idContainer = useParams();
  const offer = detailedOffers.find((elem) => elem.id === idContainer.id);

  if (offer === undefined) {
    return <Navigate to = {AppRoute.Error} />;
  }

  const { bedrooms, description, goods, host, images, isFavorite, isPremium, maxAdults, price, rating, title, type } = offer;

  return (
    <div className="page">
      <Helmet>
        <title>Offers</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <OfferGallery images = {images}/>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium ? <div className="offer__mark"><span>Premium</span></div> : ''}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <AddToFavoriteButton classModifier = {PagesClassModifier.OFFER} isFavorite = {isFavorite} size = {FavoriteBtnSize.OFFER}/>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${countRating(rating)}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>

                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <OfferFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults}/>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <OfferGoods goods={goods}/>
              </div>
              <OfferHost host={host} description={description}/>
              <Reviews reviews={reviews}/>
            </div>
          </div>
          <section className="offer__map map" />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
          Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <OffersList offers={nearPlaces} classes={NearPlacesClassesForCard}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
