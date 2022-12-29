import starIcon from "@/assets/icon-star.svg";
import { RatingCard } from "@/components/RatingCard/RatingCard.jsx";
import { RatingBar } from "@/components/RatingSection/RatingBar/RatingBar.jsx";
import styles from "./RatingSection.module.scss";

export const RatingSection = ({ setSelectedRating }) => {
    return (
        <RatingCard>
            <div className={styles.RatingSection}>
                <div
                    className={`${styles.RatingSection__starIcon} starWrapper`}
                >
                    <img src={starIcon} alt="" />
                </div>
                <div>
                    <h2 className={styles.RatingSection__title}>
                        How did we do?
                    </h2>
                    <p className={styles.RatingSection__description}>
                        Please let us know how we did with your support request.
                        All feedback is appreciated to help us improve our
                        offering!
                    </p>
                </div>
                <RatingBar setSelectedRating={setSelectedRating} />
            </div>
        </RatingCard>
    );
};
