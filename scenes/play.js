class Play extends Phaser.Scene {

    constructor() {
        super({ key: 'Play', active: false })
    }

    init() {
        this.CONFIG = this.sys.game.CONFIG;

        this.DEPTH = {
            floor: 0
        };

        this.generator = new Generator(this);

        //flags
        this.allow_input = false;
        this.is_pause = false;
        this.is_gameover = false;
        //cam
        this.cam_speed = {
            base: 1,
            curent: 1,
            max: 1
        };
    }
    create() {
        //create floor first
        this.generator.setup();
    }

    update() {

        //cam moves down
        this.updateCamera();
        //draw new tiles
        //delete passed tiles
        this.generator.update();
    }
    //Cam
    updateCamera() {

        this.cameras.main.setScroll(
            0,
            this.cameras.main.scrollY + this.cam_speed.current
        )

    }
    setCamSpeed() {
        this.cam_speed.base = speed;
        this.cam_speed.curent = speed;

        this.cam_speed.curent = Math.min(
            this.cam_speed.curent,
            this.cam_speed.max
        );
        this.cam_speed.current = Math.max(
            this.cam_speed.curent,
            0
        );
    }
}