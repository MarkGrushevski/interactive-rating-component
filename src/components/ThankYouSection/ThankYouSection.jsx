import styles from "./ThankYouSection.module.scss"
import thankYouImage from "@/assets/illustration-thank-you.svg"
import { RatingCard } from "@/components/RatingCard/RatingCard.jsx"

export const ThankYouSection = ({ selectedRating }) => {

    return <RatingCard>
        <div className={styles.ThankYouSection}>
            <div className={`${styles.ThankYouSection__image}`}>
                <img src={thankYouImage} alt=""/>
            </div>
            <div className={styles.ThankYouSection__rating}>You selected <span
                id="selectedRating">{selectedRating}</span> out of 5
            </div>
            <div>
                <h2 className={styles.ThankYouSection__title}>Thank you!</h2>
                <p className={styles.ThankYouSection__description}>
                    We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to
                    get in touch!
                </p>
            </div>
        </div>
    </RatingCard>
}
