
class Rectangle {
    _width;
    _height;

    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get area() {
        return this._height * this._width; 
    }

    set setWidth(width) {
        if (width <= 0) {
            throw new Error("Width can not be negative");
        }
        this._width = width; 
    }

    set setHeight(height) {
        if (height <= 0){
            throw new Error("Height can not be negative");
        }
        this._height = height;
    }
}


let rectangle = new Rectangle(7, 8);

console.log(rectangle.area);

rectangle.setHeight = 6;
rectangle.setWidth = 3;

console.log(rectangle.area);