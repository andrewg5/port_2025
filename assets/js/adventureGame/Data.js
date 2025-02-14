import GameEnv from './GameEnv.js';
import GameLevelWater from './GameLevelWater.js';
import GameLevelPrison from './GameLevelPrison.js';
import GameLevelishan from './GameLevelishan.js';
import GameLevelForest from './GameLevelForest.js';
import { getStats } from "./StatsManager.js";

class Data {
    constructor() {
        this.itemsCollected = 0;  // Initialize itemsCollected as an instance property
        this.hasKey = false;      // Add property to track if player has received the key
        this.displayStatus();
    }

    displayStatus() {
        // Add many line breaks to push content to bottom
        console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
        console.log("========== GAME STATUS ==========");
        console.log(`Items Collected: ${this.itemsCollected}`);
        console.log(`Has Escape Key: ${this.hasKey}`);
        if (this.hasKey) {
            console.log("🔑 Key obtained from the Wizard!");
        }
        console.log("================================");
    }

    setPlayerItem() {
        this.itemsCollected++;
        
        if (this.itemsCollected === 2) {
            const questGiver = GameEnv.gameObjects.find(obj => obj.canvas?.id === 'Questgiver');
            if (questGiver) {
                if (!this.hasKey) {
                    this.hasKey = true;
                    questGiver.spriteData.greeting = "Here's the key to escape. Use it wisely!";
                    alert("You received a key from the Questgiver!");
                    console.clear(); // Clear the console first
                    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
                    console.log("🔑 🔑 🔑 KEY OBTAINED! 🔑 🔑 🔑");
                    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
                    console.log("========== GAME STATUS ==========");
                    console.log(`Items Collected: ${this.itemsCollected}`);
                    console.log(`Has Escape Key: ${this.hasKey}`);
                    console.log("🔑 Key obtained from the Wizard!");
                    console.log("================================");
                } else {
                    questGiver.spriteData.greeting = "You already have the key. Use it to escape!";
                    this.displayStatus();
                }
            }
        } else {
            this.displayStatus();
        }
    }

    getPlayerItem() {
        return this.itemsCollected;
    }

    hasEscapeKey() {
        this.displayStatus();
        return this.hasKey;
    }
}

export default Data;
