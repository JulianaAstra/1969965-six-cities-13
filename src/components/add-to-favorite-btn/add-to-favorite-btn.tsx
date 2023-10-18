import { getFavoriteStyles } from './favorite-btn-utils';
import { useState } from 'react';

type AddToFavoriteButtonProps = {
  isFavorite: boolean;
  classModifier: string;
  size: {
    width: number;
    height: number;
  };
}

function AddToFavoriteButton({isFavorite, classModifier, size}: AddToFavoriteButtonProps): JSX.Element {
  const [isAdded, setState] = useState(isFavorite);

  const changeFavoriteHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setState(!isAdded);
  };

  const {width, height} = size;

  return (
    <button onClick={changeFavoriteHandler} className={`${classModifier}__bookmark-button button`} type="button">
      <svg className={`${classModifier}__bookmark-icon`} width={width} height={height} style={getFavoriteStyles(isAdded)}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default AddToFavoriteButton;
