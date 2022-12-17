import styles from "./RatingBar.module.scss"
import { RatingButton } from "./RatingButton.jsx"

export const RatingBar = () => {
    return <div className={styles.RatingBar}>
        <div className={styles.RatingBar__stars}>
            <RatingButton>1</RatingButton>
            <RatingButton>2</RatingButton>
            <RatingButton>3</RatingButton>
            <RatingButton>4</RatingButton>
            <RatingButton>5</RatingButton>
        </div>
        <button className={styles.RatingBar__submit}>SUBMIT</button>
    </div>

}
