import styles from "./LayoutRatingCard.module.scss";

export const LayoutRatingCard = ({ children }) => {
    return <article className={styles.LayoutRatingCard}>{children}</article>;
};
