import styles from "./ThankYouSection.module.scss";
import thankYouImage from "@InteractiveRating/assets/illustration-thank-you.svg";
import { LayoutRatingCard } from "@InteractiveRating/LayoutRatingCard/LayoutRatingCard.jsx";

export const ThankYouSection = ({ selectedRating }) => {
    return (
        <LayoutRatingCard>
            <div aria-live="polite" role="status" className={styles.ThankYouSection}>
                <div className={`${styles.ThankYouSection__image}`}>
                    <img src={thankYouImage} alt="" />
                </div>
                <p className={styles.ThankYouSection__rating}>
                    You selected <span id="selectedRating">{selectedRating}</span> out of 5
                </p>
                <div>
                    <h2 className={styles.ThankYouSection__title}>Thank you!</h2>
                    <p className={styles.ThankYouSection__description}>
                        We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t
                        hesitate to get in touch!
                    </p>
                </div>
            </div>
        </LayoutRatingCard>
    );
};
