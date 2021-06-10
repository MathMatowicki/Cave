class Play extends Phaser.Scene {

    constructor() {
        super({ key: 'Play', active: false })
    }

    init() {
        this.CONFIG = this.sys.game.CONFIG;

        this.DEPTH = {
            floor: 0
        };
        //flags
        this.allow_input = false;
        this.is_pause = false;
        this.is_gameover = false;
    }
    create() {
        //create floor first
    }

    update() {
        //cam moves down
        //draw new tiles
        //delete last tiles
    }
    //Cam
    updateCamera() {

    }
    setCamSpeed() {

    }
}