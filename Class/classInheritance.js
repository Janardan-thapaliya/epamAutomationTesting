class animal {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} moves around.`);
    }
}

class cat extends animal {
    constructor(name) {
        super(name);
    }
}

let kitten = new cat("Garfield");
kitten.move();   //Garfield moves around.

