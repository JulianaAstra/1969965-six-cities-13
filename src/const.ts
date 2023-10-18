export const RATING_PER_STAR = 20;

export enum AppRoute {
  Root = '/',
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offer',
  Error = '/404'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const PagesClassModifier = {
  OFFER: 'offer',
  CARD: 'place-card',
  HEADER: 'header',
  FOOTER: 'footer'
};

export const FavoriteBtnSize = {
  OFFER: {
    width: 31,
    height: 33
  },
  CARD: {
    width: 18,
    height: 19
  }
};

export const LogoSize = {
  HEADER: {
    width: 81,
    height: 41
  },
  FOOTER: {
    width: 64,
    height: 33
  }
};

export const DateFormat = {
  YEAR_MONTH_DAY: 'YY-MM-DD',
  MONTH_DAY: 'MMMM YYYY',
};

export const rating = {
  '5': 'perfect',
  '4': 'good',
  '3': 'not bad',
  '2': 'badly',
  '1': 'terribly',
};

export type Classes = {
  ARTICLE_CLASS: string;
  WRAPPER_CLASS: string;
}

export const NearPlacesClassesForCard: Classes = {
  ARTICLE_CLASS: 'near-places__card place-card',
  WRAPPER_CLASS: 'near-places__image-wrapper place-card__image-wrapper'
};

export const MainClassesForCard: Classes = {
  ARTICLE_CLASS: 'cities__card place-card',
  WRAPPER_CLASS: 'cities__image-wrapper place-card__image-wrapper'
};
