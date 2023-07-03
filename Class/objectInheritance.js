let animal = {
    fName: "Tom",
    move() {
        console.log(`${this.fName} is moving aimlessly.`);
    }
}

let cat = {
    __proto__ : animal,  //Inherit from animal
    fName: "Garfield"
}


cat.move();   //Garfield is moving aimlessly.
animal.move();  //Tom is moving aimlessly.