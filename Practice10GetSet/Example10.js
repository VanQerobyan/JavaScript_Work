
class Car {
    _speed;

    constructor(speed) {
        this._speed = speed;
    }

    set setSpeed(speed) {
        if (speed > 0 && speed <= 200) {
          this._speed = speed;
        } else if (speed > 200) {
            console.log("Too fast");
        } else {
            throw new Error("Negative speed can not be");
        }
    }

    get getSpeed() {
        return car._speed;
    }
}


let car = new Car(200);

console.log(car.getSpeed);

car.setSpeed = 210;
