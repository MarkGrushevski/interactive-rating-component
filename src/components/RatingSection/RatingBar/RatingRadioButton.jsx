import styles from "@/components/RatingSection/RatingBar/RatingRadioButton.module.scss"

export const RatingRadioButton = ({ rating, ...props }) => {

    return <div className={`${styles.RatingRadioButton} starWrapper`}>
        <input

            className={styles.RatingRadioButton__star}
            id={`ratingButton_${rating}`}
            value={rating}
            {...props}
            type="radio"
            name="rating"
        />
        <label htmlFor={`ratingButton_${rating}`}>{rating}</label>
        {/*
        <label htmlFor={`ratingButton_${rating}`}>{rating}
            <input

                className={styles.RatingRadioButton__star}
                id={`ratingButton_${rating}`}
                value={rating}
                {...props}
                type="radio"
                name="rating"
            />
        </label>
        */}
    </div>
}
