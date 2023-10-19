import {useState, ChangeEvent} from 'react';
import RatingStars from '../review-stars/review-stars';

function ReviewForm(): JSX.Element {
  const [userText, setUserReview] = useState('');
  const [userRate, setUserRating] = useState('');

  const textChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    evt.preventDefault();
    setUserReview(evt.target.value);
  };

  const ratingChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setUserRating(evt.target.value);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <RatingStars userRate = {userRate} onChange={ratingChangeHandler}/>
      <textarea
        onChange={textChangeHandler}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={userText}
        // value={userText}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                  To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
                  your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled = {userText.length < 49 || !userRate}
        >
                  Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
