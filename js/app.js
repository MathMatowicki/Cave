const App = function () {
    'use strict';

    this.VERSION = '0.0.1';
    this.IS_DEV = true;
}

App.prototype.start = function () {
    'use strict';

    //Scenes
    let scenes = [];

    scenes.push(Boot);
    scenes.push(Preload);
    scenes.push(Menu);

    const config = {
        type: Phaser.AUTO,
        parent: 'phaser-app',
        title: 'Cave',
        width: 360 / 2,
        height: 640 / 2,
        scene: scenes,
        pixelArt: true,
        backgroundColoer: '0xf4cca1'
    };
    //Create game
    let game = new Phaser.Game(config);
    game.IS_DEV = this.IS_DEV;
    game.VERSION = this.VERSION;
    game.URL = '';
    game.CONFIG = {
        width: config.width,
        height: config.height,
        centerX: Math.round(0.5 * config.width),
        centerY: Math.round(0.5 * config.height),
        tile: 16
    }
    game.sound_on = true;
}