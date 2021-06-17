class Menu extends Phaser.Scene {

    constructor() {
        super({ key: 'Menu', active: false });
    }

    init() {
        this.CONFIG = this.sys.game.CONFIG;
    }

    create() {
        //background
        this.createBackground();
        //title
        this.title = new Text(
            this,
            this.CONFIG.centerX,
            75,
            'Cave',
            'title');

        //click to play text
        this.text = new Text(
            this,
            this.CONFIG.centerX,
            this.CONFIG.centerY,
            'click to play',
            'standard'
        )
        //mouse input
        this.createMouseInput();
        //keyboard input
        this.createKeyboardInput();
    }

    createBackground() {
        this.bg = this.add.graphics({ x: 0, y: 0 });
        this.bg.fillStyle('0xF4CCA1', 1);
        this.bg.fillRect(0, 0, this.CONFIG.width, this.CONFIG.height);
    }

    createMouseInput() {
        this.input.on('pointerup', this.goPlay, this);
    }

    createKeyboardInput() {
        function handleKeyUp(e) {
            switch (e.code) {
                case 'Enter':
                    this.goPlay();
                    break;
            }
        }
        this.input.keyboard.on('keyup', handleKeyUp, this);
    }

    goPlay() {
        console.log("play started!");
        this.scene.start('Play');
    }
}