import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import cardRank from "./utils/cardRank.js";
import evaluateHand from './utils/handEvaluator.js';

createApp({
    data() {
        return {
            deckId: null,
            cards: null,
            error: "",
            flippedCardUrl: "https://deckofcardsapi.com/static/img/back.png",
            swaps: 2,
            gameOver: false,
            besthand: null
        };
    },
    computed: {
        canSwap() {
            return this.swaps > 0 && !this.gameOver;
        },
        cardsSelectedToSwap() {
            return this.cards && this.cards.some(card => card.flipped);
        },
        handRank() {
            if (this.cards) {
                return this.getBestHand(this.cards);
            }
            return "Awaiting hand...";
        }
    },
    methods: {
        async getDeckId() {
            this.deckId = null;
            this.error = "";

            try {
                const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
                const response = await fetch(url);
                const data = await response.json();

                this.deckId = data.deck_id;
            } catch (err) {
                this.error = "An error has occured when trying to fetch a deck id.";
            }
        },
        async drawCards() {
            this.cards = null;

            try {
                // Ensure deckId exists before drawing
                if (!this.deckId) {
                    await this.getDeckId();
                }

                const url = `https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=5`;
                const response = await fetch(url);
                const data = await response.json();

                this.cards = data.cards.map(card => {
                    return {
                        ...card,
                        flipped: false,
                        rank: cardRank[card.value]
                    };
                });
            } catch (err) {
                console.error(err);
                this.error = "An error has occured when trying to draw cards from deck.";
            }
        },
        flipCard(code) {
            // Prevent flipping after swaps run out
            if (this.gameOver) return;

            this.cards = this.cards.map(card => {
                if (card.code === code)
                    return { ...card, flipped: !card.flipped };

                return card;
            });
        },
        async swapCards() {
            const cardsToSwap = this.cards.filter(card => card.flipped);

            if (cardsToSwap.length === 0) {
                return;
            }

            try {
                const url = `https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=${cardsToSwap.length}`;
                const response = await fetch(url);
                const data = await response.json();

                const newCards = data.cards.map(card => {
                    return {
                        ...card,
                        flipped: false,
                        rank: cardRank[card.value]
                    };
                });

                let newCardIndex = 0;

                this.cards = this.cards.map(card => {
                    if (card.flipped) {
                        const newCard = newCards[newCardIndex];
                        newCardIndex++;
                        return newCard;
                    }

                    return card;
                });
            } catch (err) {
                this.error = "An error has occured when trying to swap cards from hand.";
            }
        },
        getBestHand(cards) {
            return evaluateHand(cards);
        },
        async performSwap() {
            if (this.canSwap && this.cardsSelectedToSwap) {
                await this.swapCards();

                this.swaps--;

                // Also check if player has run out of swaps
                if (this.swaps === 0)
                    this.gameOver = true;
            }
        },
        async shuffleDeck() {

            try {
                // Reset game
                this.swaps = 2;
                this.gameOver = false;
                this.error = "";
                this.besthand = null;

                // Shuffle the deck in the API
                const shuffleUrl = `https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`;
                await fetch(shuffleUrl);

                // Draw a new hand
                await this.drawCards();

            } catch (err) {
                console.error(err);
                this.error = "An error occurred while restarting the game.";
            }
        },
        async startGame() {
            await this.getDeckId();
            if (this.deckId) {
                await this.drawCards();
            }
        }
    },
    mounted() {
        this.startGame();
    }
}).mount('#app');