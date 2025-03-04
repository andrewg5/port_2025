import Background from './Background.js';

class GameLevelGrassland {
  constructor(path) {
    // Values dependent on GameEnv.create()
    let width = GameEnv.innerWidth;
    let height = GameEnv.innerHeight;

    // Background data
    const image_src_grassland = path + "/images/gamify/grassland.jpeg";
    const image_data_grassland = {
        id: 'Grassland',
        src: image_src_grassland,
        pixels: {height: 597, width: 340}
    };

    // List of objects definitions for this level
    this.objects = [
      { class: Background, data: image_data_grassland },
    ];
  }
}

export default GameLevelGrassland;