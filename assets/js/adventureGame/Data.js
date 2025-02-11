import GameEnv from './GameEnv.js';
import GameLevelWater from './GameLevelWater.js';
import GameLevelPrison from './GameLevelPrison.js';
import GameLevelishan from './GameLevelishan.js';
import GameLevelForest from './GameLevelForest.js';
import { getStats } from "./StatsManager.js";


let itemsCollected = 0;;
class Data {
    

    setPlayerItem(){
        itemsCollected++;
        console.log(itemsCollected);
    }

    getPlayerItem(){
        return itemsCollected;
    }
    
    
};


export default Data;
