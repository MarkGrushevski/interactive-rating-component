import styles from "RatingBar.module.scss"

export const RatingButton = ({ children }) => {
    return <button className={`${styles.RatingBar__star} starWrapper`}>
        {children}
    </button>
}
