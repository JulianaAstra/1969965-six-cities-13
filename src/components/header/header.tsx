import Logo from '../logo/logo';
import { PagesClassModifier, LogoSize } from '../../const';
import { Link } from 'react-router-dom';

type HeaderProps = {
  favoriteOffersCount: number;
}

function Header({favoriteOffersCount}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo classModifier={PagesClassModifier.HEADER} size={LogoSize.HEADER}/>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to="/favorites"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                  </span>
                  <span className="header__favorite-count">{favoriteOffersCount}</span>
                </Link>
              </li>
              <li className="header__nav-item">

                <Link className="header__nav-link" to="/login">
                  <span className="header__signout">Sign out</span>
                </Link>

              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
