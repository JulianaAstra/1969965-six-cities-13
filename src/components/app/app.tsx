import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Page404 from '../../pages/404-page/404-page.tsx';
import MainPage from '../../pages/main-page/main-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import { HelmetProvider } from 'react-helmet-async';
import { Offer, OfferDetailed } from '../../types/offer.ts';
import { Review } from '../../types/review.ts';
import ScrollToTop from '../scroll-to-top/scroll-to-top.tsx';

type AppScreenProps = {
  offers: Offer[];
  detailedOffers: OfferDetailed[];
  reviews: Review[];
}

function App({offers, detailedOffers, reviews}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path={AppRoute.Root} element={<MainPage offers = {offers} />}/>
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage offers = {offers} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={
              <OfferPage
                reviews={reviews}
                detailedOffers = {detailedOffers}
              />
            }
          />
          <Route
            path="*"
            element={<Page404 />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
