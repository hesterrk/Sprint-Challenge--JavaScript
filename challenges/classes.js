// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  
    constructor(length, width, height)  {
      this.length = length;
      this.width = width;
      this.height = height;
    }
  
    volume() {
        return (this.length) * (this.width) * (this.height);
      }
  
    surfaceArea() {
    
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }

    whateverYouWant() {
      return (this.length) + (this.width) + (this.height);

    }
  
  }

  //var cb = new CuboidMaker(4,5,5);

  //var cubeMakerTwo = new CuboidMaker(20,20,20);

  class cuboidOne extends CuboidMaker { 
    
    constructor(length, width, height) {   
      super(length, width, height);  // this initializes the CuboidMaker parent class using new CuboidMaker(length, width, height)
    }
  }
  
  var cb = new cuboidOne(4,5,5);  //this is an instance of the child class 'cuboidOne'



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cb.volume()); // 100
console.log(cb.surfaceArea()); // 130
console.log(cb.height);
console.log(cb.whateverYouWant());
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(length, width, height, edge) {
    super(length, width, height);
    this.edge = edge;
  }

volOfCube() {
  return (this.edge) * (this.edge) * (this.edge);
}
surfaceAreaCube() {
  return (this.edge) * (this.edge) * (this.edge) * (this.edge) * (this.edge) * (this.edge);
}


}

var cubey = new CubeMaker(5, 5, 5, 5);

console.log(cubey.volOfCube());
console.log(cubey.surfaceAreaCube());