/**
 * Checks if all cards in hand are the same suit.
 * @param {Object[]} cards
 * @returns {boolean}
 */
export const isSameSuit = cards => {
    if (cards.length === 0)
        return false;

    return cards.every(card => card.suit === cards[0].suit);
};

/**
 * Returns card ranks, sorted
 * @param {Object[]} cards 
 * @returns {Number[]}
 */
const sortRanks = (cards) => {
    return cards.map(card => card.rank).sort((a, b) => a - b);
};

/**
 * Counts the number of occurrences of each rank
 * @param {Object[]} cards 
 * @returns {Object}
 */
const rankCounts = (cards) => {
    const ranks = (sortRanks(cards));

    return ranks.reduce((acc, rank) => {
        acc[rank] = (acc[rank] || 0) + 1;
        return acc;
    }, {});
};

/**
 * Counts the number of occurrences of each suit
 * @param {Object[]} cards 
 * @returns {Object}
 */
const suitCounts = (cards) => {
    return cards.reduce((acc, card) => {
        acc[card.suit] = (acc[card.suit] || 0) + 1;
        return acc;
    }, {});
};

/**
 * Pre-processor for hand to make easier checking later
 * @param {Object[]} cards 
 * @returns {Object}
 */
export const getHandData = (cards) => {

    return {
        ranks: sortRanks(cards),
        rankCounts: rankCounts(cards),
        suitCounts: suitCounts(cards),
        counts: Object.values(rankCounts(cards)).sort((a, b) => b - a),
        uniqueRanks: Object.keys(rankCounts(cards)).map(rank => Number(rank)).sort((a, b) => a - b)
    };
};

export const isFlush = ({ suitCounts }) => {
    return Object.values(suitCounts).includes(5);
};

export const isStraight = ({ ranks }) => {
    let isStandardStraight = true;
    for (let i = 0; i < ranks.length - 1; i++) {
        if (ranks[i] !== ranks[i + 1] - 1) {
            isStandardStraight = false;
            break;
        }
    }

    if (isStandardStraight)
        return true;

    const isWheel = ranks.length === 5 &&
        ranks[0] === 2 &&
        ranks[1] === 3 &&
        ranks[2] === 4 &&
        ranks[3] === 5 &&
        ranks[4] === 14;

    return isWheel;
};

export const isStraightFlush = (handData) => {
    return isStraight(handData) && isFlush(handData);
};

export const isFourOfAKind = ({ counts }) => {
    return counts[0] === 4;
};

export const isFullHouse = ({ counts }) => {
    return counts[0] === 3 && counts[1] === 2;
};

export const isThreeOfAKind = ({ counts }) => {
    return counts[0] === 3 && counts[1] === 1;
};

export const isTwoPair = ({ counts }) => {
    return counts[0] === 2 && counts[1] === 2;
};

export const isPair = ({ counts }) => {
    return counts[0] === 2 && counts[1] === 1;
};