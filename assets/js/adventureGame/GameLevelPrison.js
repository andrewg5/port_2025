// To build GameLevels, each contains GameObjects from below imports
import GameEnv from './GameEnv.js';
import Background from './Background.js';
import GameObject from './GameObject.js';
import Player from './Player.js';
import Character from './Character.js';
import Item from './Item.js';
import Data from './Data.js';
import Npc from './Npc.js';

class GameLevelPrison {
  constructor(path) {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    // Values dependent on GameEnv.create()
    let width = GameEnv.innerWidth;
    let height = GameEnv.innerHeight;

    const levelData = new Data();


    // Background data
    const image_src_dungeon = path + "/images/gamify/rpgBackground.png"; // be sure to include the path
    const image_data_dungeon = {
        name: 'dungeon',
        greeting: "Welcome to the dungeon! Get 2 keys to escape.",
        src: image_src_dungeon,
        pixels: {height: 1135, width: 2490}
    };


    // Player data for Chillguy
    const sprite_src_chillguy = path + "/images/gamify/chillguy.png"; // be sure to include the path
    const CHILLGUY_SCALE_FACTOR = 5;
    const sprite_data_chillguy = {
        id: 'Chill Guy',
        greeting: "Hi I am Chill Guy, the desert wanderer. I am looking for wisdome and adventure!",
        src: sprite_src_chillguy,
        SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: height - (height/CHILLGUY_SCALE_FACTOR) }, 
        pixels: {height: 384, width: 512},
        orientation: {rows: 3, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },
        left: {row: 2, start: 0, columns: 3 },
        right: {row: 1, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 }, // W, A, S, D
        level_data: levelData
    };

    // NPC data  
    const sprite_src_npc = path + "/images/gamify/tux.png"; // be sure to include the path
    const sprite_data_npc = {
        id: 'Tux',
        greeting: "find item!",
        src: sprite_src_npc,
        SCALE_FACTOR: 8,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 50,
        pixels: {height: 256, width: 352},
        INIT_POSITION: { x: (width / 2), y: (height / 2)},
        orientation: {rows: 8, columns: 11 },
        down: {row: 5, start: 0, columns: 3 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
      };
    
     // NPC data for Questgiver
     const sprite_src_questgiver = path + "/images/gamify/questgiver.png";
     const sprite_data_questgiver = {
       id: 'Questgiver',
       greeting: "Please help me, I am stuck here and starving. There may be a key nearby...",
       src: sprite_src_questgiver,
       SCALE_FACTOR: 10,
       //STEP_FACTOR: 1000,
       ANIMATION_RATE: 50,
       pixels: { height: 2000, width: 2000 },
       INIT_POSITION: { x: (width/3 ), y: (height/3 ) },
       orientation: { rows: 4, columns: 4 },
       down: { row: 0, start: 0, columns: 3 },
       hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
       quest: {
         title: "New Adventure",
         description: "A tickler is near, please help!",
         reward: "30 gold"
       }
     };
      
    // data for item
    const spriteItem1 = path + "/images/gamify/spoon.png"; // be sure to include the path
    const scaleItem1 = 20;
    const spriteDataItem1 = {
        id: 'Item',
        greeting: "none",
        src: spriteItem1,
        SCALE_FACTOR: scaleItem1,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 200, y: height - (height/scaleItem1) - 100}, 
        pixels: {height: 32, width: 32},
        orientation: {rows: 1, columns: 1 },
        down: {row: 0, start: 0, columns: 1 },
        left: {row: 1, start: 0, columns: 1 },
        right: {row: 1, start: 0, columns: 1 },
        up: {row: 1, start: 0, columns: 1 },
        hitbox: { widthPercentage: 0.2, heightPercentage: 0.2 },
        level_data: levelData
    };


    // data for item
    const spriteItem2 = path + "/images/gamify/spoon.png"; // be sure to include the path
    const scaleItem2 = 20;
    const spriteDataItem2 = {
        id: 'Item',
        greeting: "none",
        src: spriteItem2,
        SCALE_FACTOR: scaleItem2,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 400, y: height - (height/scaleItem2) - 300}, 
        pixels: {height: 32, width: 32},
        orientation: {rows: 1, columns: 1 },
        down: {row: 0, start: 0, columns: 1 },
        left: {row: 1, start: 0, columns: 1 },
        right: {row: 1, start: 0, columns: 1 },
        up: {row: 1, start: 0, columns: 1 },
        hitbox: { widthPercentage: 0.2, heightPercentage: 0.2 },
        level_data: levelData
    };


    // List of objects defnitions for this level
    this.objects = [
      { class: Background, data: image_data_dungeon },
      { class: Player, data: sprite_data_chillguy },  
      { class: Character, data: sprite_data_npc },
      { class: Item, data: spriteDataItem1 },
      { class: Item, data: spriteDataItem2},
      { class: Npc, data: sprite_src_questgiver }
    ];
  }

}

export default GameLevelPrison;