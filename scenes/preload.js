class Preload extends Phaser.Scene {

    constructor() {
        super({ key: 'Preload', active: false });
    }

    init() {
        //globals   
        this.URL = this.sys.game.URL;
        this.CONFIG = this.sys.game.CONFIG;

    }

    preload() {

        //loading bar
        this.createLoadingBar();
        //spritesheets
        this.load.setPath(this.URL + 'assets/img');
        this.load.spritesheet('spr-hero', 'spr-hero.png', { frameWidth: 16, frameHight: 16, endFrame: 4, margin: 1, spacing: 2 });
        this.load.spritesheet('spr-slime', 'spr-slime.png', { frameWidth: 16, frameHight: 16, endFrame: 4, margin: 1, spacing: 2 });
        this.load.spritesheet('spr-spider', 'spr-spider.png', { frameWidth: 16, frameHight: 16, endFrame: 4, margin: 1, spacing: 2 });
    }

    create() {
        //   this.scene.start()
    }

    createLoadingBar() {
        //TItle
        this.title = new Text(
            this,
            this.CONFIG.centerX,
            75,
            'Loading Game',
            'preload',
            0.5
        );
        //Progess text
        this.txt_progress = new Text(
            this,
            this.CONFIG.centerX,
            this.CONFIG.centerY - 5,
            'Loading...',
            'preload',
            { x: 0.5, y: 1 }
        );
        // Progress bar
    }
}