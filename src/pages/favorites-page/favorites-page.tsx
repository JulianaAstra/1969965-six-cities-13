import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import FavoritesList from '../../components/favorites-list/favorites-list';
import Header from '../../components/header/header';
import { LogoSize } from '../../const';
import Logo from '../../components/logo/logo';
import { PagesClassModifier } from '../../const';

type FavoritesPageProps = {
  offers: Offer[];
}

function FavoritesPage({offers}: FavoritesPageProps): JSX.Element {
  const cities = Array.from(new Set<string>(offers.map((offer) => offer.city['name'])));

  return (
    <div className="page">
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              { cities.map((city) => {
                const offersByCity = offers.filter((offer) => offer.city['name'] === city);
                return <FavoritesList key={city} city = {city} favoriteOffers={offersByCity} />;
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo classModifier={PagesClassModifier.FOOTER} size={LogoSize.FOOTER}/>
      </footer>
    </div>
  );
}

export default FavoritesPage;
