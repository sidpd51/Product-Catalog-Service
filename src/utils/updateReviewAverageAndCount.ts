

const updateReviewAverageAndCount = (averageRating: number, reviewCount: number, currentRating: number, willAdd: boolean): [number, number] => {
    let averageRatingSum = averageRating * reviewCount;
    let updatedAverageRating: number;
    let udpatedReviewCount: number = reviewCount;
    if (willAdd) {
        updatedAverageRating = parseFloat(((averageRatingSum + currentRating) / (reviewCount + 1)).toFixed(1));
        udpatedReviewCount++;
    } else {
        updatedAverageRating = parseFloat(((averageRatingSum - currentRating) / (reviewCount - 1)).toFixed(1));
        udpatedReviewCount--;
    }
    return [updatedAverageRating, udpatedReviewCount]
}

export default updateReviewAverageAndCount