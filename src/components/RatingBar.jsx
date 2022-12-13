import { RatingButton } from "./RatingButton";
export const RatingBar = () => {
  return (
    <div className="rating-bar">
      <div className="rating-bar__stars">
        <RatingButton>1</RatingButton>
        <RatingButton>2</RatingButton>
        <RatingButton>3</RatingButton>
        <RatingButton>4</RatingButton>
        <RatingButton>5</RatingButton>
      </div>
      <button className="rating-bar__submit">SUBMIT</button>
    </div>
  );
};
