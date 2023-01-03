import { useEffect, useState } from "react";
import { ThankYouSection } from "./ThankYouSection/ThankYouSection.jsx";
import { RatingSection } from "./RatingSection/RatingSection.jsx";
import "./index.scss";

export const InteractiveRating = () => {
    const [selectedRating, setSelectedRating] = useState(null);
    const [isRated, setIsRated] = useState(false);

    useEffect(() => {
        if (selectedRating) {
            setIsRated(true);
        }
    }, [selectedRating]);

    if (isRated) {
        return <ThankYouSection selectedRating={selectedRating} />;
    } else {
        return <RatingSection setSelectedRating={setSelectedRating} />;
    }
};
