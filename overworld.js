class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init() {
        //console.log("overworld says hello", this);
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0);
        };
        image.src = "/images/maps/DemoLower.png";

        const x = 0;
        const y = 0;
        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(
                hero,
                0,      // left cut
                0,      // top cut
                32,     // width of cut
                32,     // height of cut
                x,      // hero's x pos on map
                y,       // hero's y pos on map
                32,     // x size of character (scaling)
                32      // y size of character (scaling)
            );
        };
        hero.src = "/images/characters/people/hero.png";
    }
}