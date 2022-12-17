import styles from "@/components/RatingSection/RatingBar/RatingBar.module.scss"
import { useState } from "react"

export const RatingButton = ({ children }) => {
    const [isActive, setIsActive] = useState(false)

    return <button
        onClick={() => setIsActive(true)}
        className={`${isActive ? "activeStar" : ""} ${styles.RatingBar__star} starWrapper`}
    >{children}</button>
}
