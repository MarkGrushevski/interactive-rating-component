import { useState } from "react"
import styles from "./RatingBar.module.scss"
import { RatingButton } from "./RatingButton"

export const RatingBar = () => {
    const initialStars = [
        { value: 1, current: false },
        { value: 2, current: false },
        { value: 3, current: false },
        { value: 4, current: false },
        { value: 5, current: false }
    ]

    const [isRated, setIsRated] = useState(false)
    const [stars, setStars] = useState(initialStars)

    const onClick = (obj) => {
        setStars([...initialStars, !obj.current])
    }

    return (
        <div className={styles.RatingBar}>
            <div className={styles.RatingBar__stars}>
                {
                    stars.map((obj, index, array) => <RatingButton
                        onClick={() => onClick(obj)}
                        key={obj.value}
                    >{obj.value}</RatingButton>)
                }
            </div>
            <button className={styles.RatingBar__submit}>SUBMIT</button>
        </div>
    )
}
