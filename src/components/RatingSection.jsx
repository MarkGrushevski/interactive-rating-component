import { RatingBar } from "./RatingBar";
import { RatingCard } from "./RatingCard";
import starIcon from "@/assets/icon-star.svg";

export const RatingSection = () => {
  return (
    <RatingCard>
      <div className="rating-section">
        <div className="rating-section__star-icon star-wrapper">
          <img src={starIcon} alt="" />
        </div>
        <div className="rating-section__content">
          <h2 className="rating-section__title">How did we do?</h2>
          <p className="rating-section__description">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <RatingBar />
      </div>
    </RatingCard>
  );
};
