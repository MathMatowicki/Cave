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
        //background
        this.bg = this.add.graphics({ x: 0, y: 0 });
        this.bg.fillStyle('0xF4CCA1', 1);
        this.bg.fillRect(0, 0, this.CONFIG.width, this.CONFIG.height);

        //loading bar
        this.createLoadingBar();
        //spritesheets
        this.load.setPath(this.URL + 'assets/img');
        this.load.spritesheet('tileset', 'tileset-32px.png', { frameWidth: 32, frameHight: 32, endFrame: 19, margin: 2, spacing: 4 });
        this.load.spritesheet('spr-hero', 'spr-hero.png', { frameWidth: 32, frameHight: 32, endFrame: 4, margin: 2, spacing: 4 });
        this.load.spritesheet('spr-slime', 'spr-slime.png', { frameWidth: 32, frameHight: 32, endFrame: 4, margin: 2, spacing: 4 });
        this.load.spritesheet('spr-spider', 'spr-spider.png', { frameWidth: 32, frameHight: 32, endFrame: 4, margin: 2, spacing: 4 });

        this.load.on('progress', this.onProgress, this);
    }
    create() {
        this.time.addEvent({
            delay: 1000,
            callback: () => { this.scene.start('Menu'); },
            callbackScope: this
        });
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
        let x = 10;
        let y = this.CONFIG.centerY + 5;
        let w = this.CONFIG.width - 2 * x;
        let h = 18;
        this.progress = this.add.graphics({ x: x, y: y });
        this.border = this.add.graphics({ x: x, y: y });
        //progress callback
        this.load.on('progress', this.onProgress, this);
    }
    onProgress(val) {
        //bar
        let w = this.CONFIG.width - 2 * this.progress.x;
        let h = 36;
        this.progress.clear();
        this.progress.fillStyle('0xFFFFF');
        this.progress.fillRect(0, 0, w * val, h);

        this.border.clear();
        this.border.lineStyle(4, '0x4D6592', 1);
        this.border.strokeRect(0, 0, w * val, h);
        //%
        this.txt_progress.setText(Math.round(val * 100) + '%');
    }
}