// To build GameLevels, each contains GameObjects from below imports
import GameEnv from './GameEnv.js';
import Background from './Background.js';
import GameObject from './GameObject.js';
import Player from './Player.js';
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
    const sprite_src_player = path + "/images/gamify/playerSprites.png"; // be sure to include the path
    const PLAYER_SCALE_FACTOR = 12;
    const sprite_data_player = {
        id: 'Player',
        greeting: "Hello, please help me escape this prison.",
        src: sprite_src_player,
        SCALE_FACTOR: PLAYER_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 12,
        INIT_POSITION: { x: 0, y: height - (height/PLAYER_SCALE_FACTOR) }, 
        pixels: {height: 512, width: 512},
        orientation: {rows: 4, columns: 4 },
        down: {row: 0, start: 0, columns: 4 },
        left: {row: 2, start: 0, columns: 4 },
        right: {row: 1, start: 0, columns: 4 },
        up: {row: 3, start: 0, columns: 4 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 }, // W, A, S, D
        level_data: levelData
    };


    
    // NPC data  
    
     // NPC data for Questgiver
     const sprite_src_questgiver = path + "/images/gamify/questNPC.png";
     const sprite_data_questgiver = {
       id: 'Questgiver',
       // Store the base greeting as a regular property
       greeting: "Find me two spoons and I'll give you this key.",
       // Use a method instead of a getter
       getGreeting() {
           const itemsCollected = levelData.getPlayerItem();
           if (itemsCollected >= 2) {
               return "Thank you for finding both items! You can have this key";
           }
           return this.baseGreeting;
       },
       src: sprite_src_questgiver,
       SCALE_FACTOR: 9,
       STEP_FACTOR: 1000,
       ANIMATION_RATE: 50,
       pixels: { height: 64, width: 64 },
       INIT_POSITION: { x: (width/3 ), y: (height/3 ) },
       orientation: { rows: 1, columns: 1 },
       down: { row: 0, start: 0, columns: 1 },
       hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
       quest: "2 spoon = 1 key",
       level_data: levelData
     };
      

    
    // NPC data for quiz npc 
    const sprite_src_quiz = path + "/images/gamify/quizNPC.png"; // be sure to include the path
    const sprite_data_quiz = {
        id: 'Quiz Giver',
        greeting: "Answer my question correctly, and I'll give you a key",
        src: sprite_src_quiz,
        SCALE_FACTOR: 9,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 50,
        pixels: {height: 64, width: 64},
        INIT_POSITION: { x: (width / 2), y: (height / 2)},
        orientation: { rows: 1, columns: 1 },
       down: { row: 0, start: 0, columns: 1 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        // Linux command quiz
        quiz: { 
          title: "Quiz",
          questions: [
            "How many barrels are located in the prison?"
          ] 
        },
        level_data: levelData,
      };

    // NPC data for Knight
    const sprite_src_knight = path + "/images/gamify/knight.png"; // be sure to include the path
    const sprite_data_knight = {
        id: 'Knight',
        greeting: "I am the guardian of this prison. Prove your worth to pass.",
        src: sprite_src_knight,
        SCALE_FACTOR: 10,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        pixels: { height: 64, width: 64 },
        INIT_POSITION: { x: (width / 1.6), y: (height / 4) - 200 }, // Shifted right by increasing x value
        orientation: { rows: 1, columns: 1 },
        down: { row: 0, start: 0, columns: 1 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        level_data: levelData
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
        INIT_POSITION: { x: 600, y: height - (height/scaleItem1) - 500}, 
        pixels: {height: 32, width: 32},
        orientation: {rows: 1, columns: 1 },
        down: {row: 0, start: 0, columns: 1 },
        left: {row: 1, start: 0, columns: 1 },
        right: {row: 1, start: 0, columns: 1 },
        up: {row: 1, start: 0, columns: 1 },
        hitbox: { widthPercentage: 0.2, heightPercentage: 0.2 },
        level_data: levelData,
        
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
        INIT_POSITION: { x: 800, y: height - (height/scaleItem2) - 200}, 
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
      { class: Player, data: sprite_data_player },  
      { class: Item, data: spriteDataItem1 },
      { class: Item, data: spriteDataItem2},
      { class: Npc, data: sprite_data_questgiver },
      { class: Npc, data: sprite_data_quiz },
      { class: Npc, data: sprite_data_knight } // Added knight NPC
    ];
  }

}

export default GameLevelPrison;