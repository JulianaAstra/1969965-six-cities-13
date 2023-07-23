import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Helmet } from 'react-helmet-async';

function Page404(): JSX.Element {
  return (
    <div className='page-404'>
      <Helmet>
        <title>404</title>
      </Helmet>
      <h1>404</h1>
      <h2>Oops! This page is not found</h2>
      <Link to={AppRoute.Root}>To main page</Link>
    </div>
  );
}

export default Page404;
