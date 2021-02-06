class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    get area(){
        return this.calcArea();
    }
    calcArea(){
        return this.height * this.width;
    }
};

const square = new Rectangle(5,5);
console.log(square.area);




class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    static distance(a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}
const p1 = new Point(7, 2);
const p2 = new Point(3, 8);

console.log(Point.distance(p1, p2));





class Dog{
    constructor(name){
        this.name = name;
    }
    
    bark(){
        console.log(this.name + ' barks.');
    }
}
let d = new Dog('Rex');
d.bark();