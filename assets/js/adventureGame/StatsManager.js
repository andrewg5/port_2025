import { javaURI, fetchOptions } from "../api/config.js";

/**
 * Fetches and updates the game stats UI (Balance, Chat Score, Questions Answered).
 */
export async function getStats() {
    try {
        const balanceResponse = await fetch('/api/balance');
        if (!balanceResponse.ok) {
            throw new Error('Failed to fetch balance');
        }
        const balance = await balanceResponse.json();
        document.getElementById('balance').textContent = balance.amount;

        const chatScoreResponse = await fetch('/api/chatScore');
        if (!chatScoreResponse.ok) {
            throw new Error('Failed to fetch chatScore');
        }
        const chatScore = await chatScoreResponse.json();
        document.getElementById('chatScore').textContent = chatScore.score;

        const questionsAnsweredResponse = await fetch('/api/questionsAnswered');
        if (!questionsAnsweredResponse.ok) {
            throw new Error('Failed to fetch questionsAnswered');
        }
        const questionsAnswered = await questionsAnsweredResponse.json();
        document.getElementById('questionsAnswered').textContent = questionsAnswered.count;
    } catch (error) {
        console.error('Error fetching stats:', error);
    }
}

/**
 * Fetches the player's current balance.
 */
export function getBalance() {
    fetch(`${javaURI}/rpg_answer/getBalance/1`, fetchOptions)
        .then(response => response.json())
        .then(data => {
            document.getElementById("balance").innerText = data ?? 0;
        })
        .catch(err => console.error("Error fetching balance:", err));
}

/**
 * Fetches the player's current chat score.
 */
export function getChatScore() {
    fetch(`${javaURI}/rpg_answer/getChatScore/1`, fetchOptions)
        .then(response => response.json())
        .then(data => {
            document.getElementById("chatScore").innerText = data ?? 0;
        })
        .catch(err => console.error("Error fetching chat score:", err));
}

/**
 * Fetches the number of questions answered by the player.
 */
export function getQuestionsAnswered() {
    fetch(`${javaURI}/rpg_answer/getQuestionsAnswered/1`, fetchOptions)
        .then(response => response.json())
        .then(data => {
            document.getElementById("questionsAnswered").innerText = data ?? 0;
        })
        .catch(err => console.error("Error fetching questions answered:", err));
}
