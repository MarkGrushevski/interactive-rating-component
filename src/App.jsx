import { RatingSection } from "@/components/RatingSection/RatingSection.jsx"
import { ThankYouSection } from "@/components/ThankYouSection/ThankYouSection.jsx"
import { useEffect, useState } from "react"

export const App = () => {
    const [selectedRating, setSelectedRating] = useState(null)
    const [isRated, setIsRated] = useState(false)

    useEffect(() => {
        if (selectedRating) {
            setIsRated(true)
        }
    }, [selectedRating])

    if (isRated) {
        return <ThankYouSection selectedRating={selectedRating}/>
    } else {
        return <RatingSection setSelectedRating={setSelectedRating}/>
    }
}
