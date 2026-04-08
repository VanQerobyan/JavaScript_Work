
class Temperature {
    _celsius;

    constructor(celsius) {
        this._celsius = celsius;
    }

    set setCelsius(celsius) {
       this._celsius = celsius; 
    }

    get getFarenheit() { //10c
            return (this._celsius * 1.8) + 32;
    }
}


let temp = new Temperature(10);

console.log(temp.getFarenheit);

temp.setCelsius = -10;
console.log(temp.getFarenheit);