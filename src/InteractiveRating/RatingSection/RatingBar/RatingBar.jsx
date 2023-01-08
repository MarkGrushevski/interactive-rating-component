import { useState } from "react";
import styles from "./RatingBar.module.scss";
import { RatingRadioButton } from "./RatingRadioButton.jsx";

export const RatingBar = ({ setSelectedRating }) => {
    const stars = [1, 2, 3, 4, 5];

    const [value, setValue] = useState();

    const onChange = (ev) => {
        setValue(ev.target.value);
    };
    const onSubmit = (ev) => {
        ev.preventDefault();
        setSelectedRating(value);
    };

    return (
        <form onSubmit={onSubmit} className={styles.RatingBar}>
            <fieldset>
                <legend>Please select a rating</legend>
                <div className={styles.RatingBar__stars}>
                    {stars.map((value) => {
                        return <RatingRadioButton rating={value} onChange={onChange} key={value} />;
                    })}
                </div>
                <button type="submit" className={styles.RatingBar__submit}>
                    SUBMIT
                </button>
            </fieldset>
        </form>
    );
};
