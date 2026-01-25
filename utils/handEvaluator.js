import {
    getHandData,
    isStraightFlush,
    isFourOfAKind,
    isFullHouse,
    isFlush,
    isStraight,
    isThreeOfAKind,
    isTwoPair,
    isPair
} from "./helpers.js";

/**
 * Determines the best poker hand
 * @param {Object[]} cards - Current hand
 * @returns {string|null} The best hand or null if hand is invalid
 */
const evaluateHand = (cards) => {
    // Check for valid hand
    if (!cards || cards.length !== 5)
        return null;

    const handData = getHandData(cards);

    // Checking hand (startest with highest rank hand)
    // 1. Straight Flush
    if (isStraightFlush(handData)) return "Straight Flush";

    // 2. Four of a Kind
    if (isFourOfAKind(handData)) return "Four of a Kind";

    // 3. Full House
    if (isFullHouse(handData)) return "Full House";

    // 4. Flush
    if (isFlush(handData)) return "Flush";

    // 5. Straight
    if (isStraight(handData)) return "Straight";

    // 6. Three of a Kind
    if (isThreeOfAKind(handData)) return "Three of a Kind";

    // 7. Two Pair
    if (isTwoPair(handData)) return "Two Pair";

    // 8. Pair
    if (isPair(handData)) return "Pair";

    // 9. High Card
    return "High Card";
};

export default evaluateHand;